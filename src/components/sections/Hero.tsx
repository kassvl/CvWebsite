import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { IconArrowUpRight, IconBrandGithub, IconBrandLinkedin } from '../ui/Icons'
import { profile } from '../../data/profile'
import { Container } from '../ui/Container'
import { easeOut } from '../../lib/motion'

/**
 * Hero film: 12 frames of real, shipped work, scrubbed by scroll.
 * Frames come from scripts/capture-hero.mjs (loomr.net, the braidss.xyz booking flow, the
 * MeshMedic demo). No client brand photography: the film opens on work.
 *
 * Performance notes, after the first version stuttered:
 * - frames are decoded with createImageBitmap at the size they are drawn at, so the browser
 *   never holds twelve full-resolution bitmaps (that was ~100 MB of decoded pixels),
 * - scroll updates write to the canvas and to two nodes directly; React state would re-render
 *   the whole section on every scroll tick,
 * - a frame is drawn only when the index or the canvas size actually changes.
 *
 * Phones and reduced-motion visitors get the poster frame instead.
 */
const FRAME_COUNT = 12
const frameUrl = (i: number) => `/hero/f${String(i + 1).padStart(2, '0')}.webp`

// Which frame starts which chapter of the film, and what to call it.
const CAPTIONS: { from: number; label: string; note: string }[] = [
  { from: 0, label: 'LOOMR', note: 'client site, live at loomr.net' },
  { from: 4, label: 'Kulama booking', note: 'guest picks a slot, the studio answers' },
  { from: 8, label: 'MeshMedic', note: 'incident in, reviewed pull request out' },
]

function useIsCompact() {
  const [compact, setCompact] = useState(true)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px), (prefers-reduced-motion: reduce)')
    const apply = () => setCompact(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])
  return compact
}

export function Hero() {
  const compact = useIsCompact()
  return compact ? <HeroCompact /> : <HeroFilm />
}

function HeroFilm() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const captionRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const noteRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return
    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    const bitmaps: (ImageBitmap | null)[] = new Array(FRAME_COUNT).fill(null)
    let index = -1
    let size = ''
    let raf = 0
    let cancelled = false

    const paint = (i: number, force = false) => {
      const bmp = bitmaps[i] ?? bitmaps.slice(0, i + 1).reverse().find(Boolean) ?? bitmaps.find(Boolean)
      if (!bmp) return
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      const key = `${w}x${h}`
      if (key !== size) {
        canvas.width = Math.round(w * dpr)
        canvas.height = Math.round(h * dpr)
        size = key
        force = true
      }
      if (!force && i === index) return
      index = i
      const scale = Math.max(canvas.width / bmp.width, canvas.height / bmp.height)
      const dw = bmp.width * scale
      const dh = bmp.height * scale
      ctx.drawImage(bmp, (canvas.width - dw) / 2, (canvas.height - dh) / 2, dw, dh)
    }

    /** Decode straight to the size we draw at; full-resolution bitmaps are what made it stutter. */
    const load = async (i: number) => {
      try {
        const res = await fetch(frameUrl(i))
        const blob = await res.blob()
        const target = Math.min(1600, Math.round(window.innerWidth * dpr))
        const bmp = await createImageBitmap(blob, {
          resizeWidth: target,
          resizeHeight: Math.round((target * 9) / 16),
          resizeQuality: 'high',
        })
        if (cancelled) return bmp.close()
        bitmaps[i] = bmp
        if (i === 0) paint(0, true)
      } catch {
        /* a missing frame just means the film holds the previous one */
      }
    }

    // Sequential, so the first frames are ready while the visitor is still reading the title.
    ;(async () => {
      for (let i = 0; i < FRAME_COUNT && !cancelled; i++) await load(i)
    })()

    let lastCaption = -1
    const update = () => {
      raf = 0
      const rect = section.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const p = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0
      paint(Math.min(FRAME_COUNT - 1, Math.round(p * (FRAME_COUNT - 1))))

      if (titleRef.current) titleRef.current.style.opacity = String(Math.max(0, 1 - p * 3.2))
      if (captionRef.current) captionRef.current.style.opacity = String(Math.min(1, p * 4))
      if (barRef.current) barRef.current.style.width = `${Math.round(p * 100)}%`

      const c = [...CAPTIONS].reverse().find((x) => index >= x.from) ?? CAPTIONS[0]
      const ci = CAPTIONS.indexOf(c)
      if (ci !== lastCaption) {
        lastCaption = ci
        if (labelRef.current) labelRef.current.textContent = c.label
        if (noteRef.current) noteRef.current.textContent = c.note
      }
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    const onResize = () => {
      size = ''
      onScroll()
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      cancelled = true
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      if (raf) cancelAnimationFrame(raf)
      bitmaps.forEach((b) => b?.close())
    }
  }, [])

  return (
    <section id="top" ref={sectionRef} className="relative h-[280vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[rgb(var(--rgb-bg))]">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 90% at 50% 10%, rgb(var(--rgb-bg) / 0.15) 0%, rgb(var(--rgb-bg) / 0.72) 55%, rgb(var(--rgb-bg) / 0.96) 100%)',
          }}
        />

        {/* Name and line, fading out as the film starts */}
        <div ref={titleRef} className="pointer-events-none absolute inset-0 flex items-center">
          <Container>
            <p className="kbd inline-flex items-center gap-2.5 rounded-full border border-[rgb(var(--rgb-brand-primary)/0.4)] bg-[rgb(var(--rgb-brand-primary)/0.1)] px-3 py-1.5 text-[rgb(var(--rgb-ink-50))]">
              <span className="live-dot block h-1.5 w-1.5 rounded-full bg-[rgb(var(--rgb-brand-primary))]" />
              {profile.status}
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-6xl font-semibold leading-[0.95] tracking-tight text-[rgb(var(--rgb-ink-50))] md:text-8xl">
              {profile.name}.
            </h1>
            <p className="mt-6 max-w-xl font-mono text-sm text-[rgb(var(--rgb-ink-200))] md:text-base">
              {profile.role.toLowerCase()} in {profile.location}. I build the thing, then I ship it.
            </p>
          </Container>
        </div>

        {/* Caption for the frame currently on screen */}
        <div className="absolute inset-x-0 bottom-0 pb-10">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div ref={captionRef} style={{ opacity: 0 }}>
                <p ref={labelRef} className="kbd text-[rgb(var(--rgb-brand-accent))]">
                  {CAPTIONS[0].label}
                </p>
                <p ref={noteRef} className="mt-1 font-display text-2xl text-[rgb(var(--rgb-ink-50))] md:text-3xl">
                  {CAPTIONS[0].note}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-[rgb(var(--rgb-brand-primary))] px-5 py-2.5 text-sm font-semibold text-[rgb(var(--rgb-ink-50))] transition-transform hover:-translate-y-0.5"
                >
                  See the work
                  <IconArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--rgb-border))] bg-[rgb(var(--rgb-bg)/0.5)] px-5 py-2.5 text-sm text-[rgb(var(--rgb-ink-50))] backdrop-blur transition-colors hover:border-[rgb(var(--rgb-brand-primary)/0.6)]"
                >
                  Get in touch
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                  className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--rgb-border))] bg-[rgb(var(--rgb-bg)/0.5)] px-4 py-2.5 text-sm text-[rgb(var(--rgb-ink-200))] backdrop-blur transition-colors hover:text-[rgb(var(--rgb-ink-50))]">
                  <IconBrandGithub size={16} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--rgb-border))] bg-[rgb(var(--rgb-bg)/0.5)] px-4 py-2.5 text-sm text-[rgb(var(--rgb-ink-200))] backdrop-blur transition-colors hover:text-[rgb(var(--rgb-ink-50))]">
                  <IconBrandLinkedin size={16} />
                </a>
              </div>
            </div>
            <div className="mt-8 h-px w-full bg-[rgb(var(--rgb-border))]">
              <div ref={barRef} className="h-px bg-[rgb(var(--rgb-brand-primary))]" style={{ width: '0%' }} />
            </div>
          </Container>
        </div>
      </div>
    </section>
  )
}

/** Phones, and anyone who asked for less motion: one screen, no film. */
function HeroCompact() {
  return (
    <section id="top" className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-16">
      <img
        src="/hero/poster.webp"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgb(var(--rgb-bg) / 0.55) 0%, rgb(var(--rgb-bg) / 0.88) 45%, rgb(var(--rgb-bg)) 100%)',
        }}
      />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="relative"
        >
          <p className="kbd inline-flex items-center gap-2.5 rounded-full border border-[rgb(var(--rgb-brand-primary)/0.4)] bg-[rgb(var(--rgb-brand-primary)/0.1)] px-3 py-1.5 text-[rgb(var(--rgb-ink-50))]">
            <span className="live-dot block h-1.5 w-1.5 rounded-full bg-[rgb(var(--rgb-brand-primary))]" />
            {profile.status}
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.95] tracking-tight text-[rgb(var(--rgb-ink-50))]">
            {profile.name}.
          </h1>
          <p className="mt-4 font-mono text-sm text-[rgb(var(--rgb-ink-200))]">
            {profile.role.toLowerCase()} in {profile.location}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[rgb(var(--rgb-ink-200))]">
            {profile.tagline}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--rgb-brand-primary))] px-5 py-2.5 text-sm font-semibold text-[rgb(var(--rgb-ink-50))]">
              See the work <IconArrowUpRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--rgb-border))] px-5 py-2.5 text-sm text-[rgb(var(--rgb-ink-50))]">
              Get in touch
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
