import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { IconArrowUpRight, IconBrandGithub, IconBrandLinkedin } from '../ui/Icons'
import { profile } from '../../data/profile'
import { Container } from '../ui/Container'
import { easeOut } from '../../lib/motion'

/**
 * Hero film: 20 frames of real, shipped work, scrubbed by scroll.
 * Frames come from scripts/capture-hero.mjs (braidss.xyz, loomr.net, the MeshMedic demo).
 *
 * Phones and reduced-motion visitors get the poster frame instead: the film is 600 KB and a
 * recruiter on a phone should reach the content immediately, which is why the section
 * collapses to one screen there.
 */
const FRAME_COUNT = 20
const frameUrl = (i: number) => `/hero/f${String(i + 1).padStart(2, '0')}.webp`

// Which frame starts which chapter of the film, and what to call it.
const CAPTIONS: { from: number; label: string; note: string }[] = [
  { from: 0, label: 'Kulama, Wrocław', note: 'client site, live at braidss.xyz' },
  { from: 5, label: 'Booking flow', note: 'guest picks a slot, the studio answers' },
  { from: 9, label: 'LOOMR', note: 'client site, live at loomr.net' },
  { from: 15, label: 'MeshMedic', note: 'incident in, reviewed pull request out' },
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
  const [frame, setFrame] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const images: HTMLImageElement[] = []
    let current = -1
    let raf = 0

    const draw = (index: number) => {
      const img = images[index]
      if (!img?.complete || !img.naturalWidth) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr
        canvas.height = h * dpr
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      // cover fit
      const scale = Math.max(w / img.naturalWidth, h / img.naturalHeight)
      const dw = img.naturalWidth * scale
      const dh = img.naturalHeight * scale
      ctx.clearRect(0, 0, w, h)
      ctx.drawImage(img, (w - dw) / 2, (h - dh) / 2, dw, dh)
    }

    // First frame first, so something is on screen before the rest arrives.
    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image()
      img.decoding = 'async'
      img.src = frameUrl(i)
      img.onload = () => {
        if (i === current || (current === -1 && i === 0)) draw(i)
      }
      images.push(img)
    }

    const update = () => {
      raf = 0
      const rect = section.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const p = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 0
      const index = Math.min(FRAME_COUNT - 1, Math.round(p * (FRAME_COUNT - 1)))
      setProgress(p)
      if (index !== current) {
        current = index
        setFrame(index)
        draw(index)
      } else {
        draw(index)
      }
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const caption = [...CAPTIONS].reverse().find((c) => frame >= c.from) ?? CAPTIONS[0]
  const titleOpacity = Math.max(0, 1 - progress * 3.2)

  return (
    <section id="top" ref={sectionRef} className="relative h-[320vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
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
        <div
          className="pointer-events-none absolute inset-0 flex items-center"
          style={{ opacity: titleOpacity }}
        >
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
              <div style={{ opacity: Math.min(1, progress * 4) }}>
                <p className="kbd text-[rgb(var(--rgb-brand-accent))]">{caption.label}</p>
                <p className="mt-1 font-display text-2xl text-[rgb(var(--rgb-ink-50))] md:text-3xl">
                  {caption.note}
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
              <div
                className="h-px bg-[rgb(var(--rgb-brand-primary))]"
                style={{ width: `${Math.round(progress * 100)}%` }}
              />
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
