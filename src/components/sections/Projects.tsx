import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { IconArrowUpRight, IconBrandGithub, IconStar } from '../ui/Icons'
import { Container } from '../ui/Container'
import { projects, type Project } from '../../data/projects'
import { easeOut } from '../../lib/motion'

/** Logical width the embedded sites are rendered at before being scaled into the frame. */
const EMBED_WIDTH = 1280

/**
 * Client work gets a chapter each: the site runs inside the page, in a browser frame, once
 * the visitor asks for it. The embed is click-to-load on purpose, so the page itself stays
 * light and nobody's phone loads three sites at once.
 */
export function Projects() {
  const chapters = projects.filter((p) => p.embed)
  const rest = projects.filter((p) => !p.embed)
  return (
    <section id="projects" className="relative scroll-mt-24 py-24 md:py-32">
      <Container>
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-14 max-w-3xl md:mb-20"
        >
          <div className="kbd flex items-center gap-3">
            <span className="text-[rgb(var(--rgb-brand-primary))]">03</span>
            <span>selected work</span>
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[rgb(var(--rgb-ink-50))] md:text-5xl">
            Two sites you can use right now,{' '}
            <span className="text-[rgb(var(--rgb-brand-primary))]">and the rest of the work</span>.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[rgb(var(--rgb-ink-200))] md:text-lg">
            The client sites below are running in production. Open them here, click around, then read
            how they are built. Private repos are marked; I am happy to walk through that code on a call.
          </p>
        </motion.header>
      </Container>

      <div className="space-y-24 md:space-y-32">
        {chapters.map((project, i) => (
          <Chapter key={project.slug} project={project} index={i + 1} flip={i % 2 === 1} />
        ))}
      </div>

      <Container>
        <h3 className="mt-24 mb-8 font-display text-2xl text-[rgb(var(--rgb-ink-50))] md:mt-32">
          Team products and open source
        </h3>
        <ul className="grid gap-5 md:grid-cols-2">
          {rest.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </ul>
      </Container>
    </section>
  )
}

function Chapter({ project, index, flip }: { project: Project; index: number; flip: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.7, ease: easeOut }}
    >
      <Container>
        <div className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-14 ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
          <div className="lg:col-span-5">
            <p className="kbd text-[rgb(var(--rgb-brand-accent))]">
              {String(index).padStart(2, '0')} / {project.category}
            </p>
            <h3 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[rgb(var(--rgb-ink-50))] md:text-6xl">
              {project.title}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-[rgb(var(--rgb-ink-200))]">
              {project.summary}
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-[rgb(var(--rgb-ink-200))]">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span aria-hidden className="mt-2 inline-block h-1 w-4 flex-none bg-[rgb(var(--rgb-brand-primary))]" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <li
                  key={s}
                  className="inline-flex items-center rounded-md border border-[rgb(var(--rgb-border))] bg-[rgb(var(--rgb-surface))] px-2 py-1 font-mono text-[11px] text-[rgb(var(--rgb-ink-400))]"
                >
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[rgb(var(--rgb-brand-primary))] px-4 py-2 text-sm font-semibold text-[rgb(var(--rgb-ink-50))] transition-transform hover:-translate-y-0.5"
                >
                  <IconArrowUpRight size={15} /> Open the site
                </a>
              )}
              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[rgb(var(--rgb-border))] px-4 py-2 text-sm text-[rgb(var(--rgb-ink-200))] transition-colors hover:border-[rgb(var(--rgb-brand-primary)/0.6)] hover:text-[rgb(var(--rgb-ink-50))]"
                >
                  <IconBrandGithub size={15} /> Code
                </a>
              ) : (
                project.privateNote && (
                  <span className="font-mono text-[11px] text-[rgb(var(--rgb-ink-400))]">{project.privateNote}</span>
                )
              )}
            </div>
          </div>

          <div className="lg:col-span-7">
            <LiveEmbed project={project} />
          </div>
        </div>
      </Container>
    </motion.article>
  )
}

function LiveEmbed({ project }: { project: Project }) {
  const [live, setLive] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.5)
  const host = project.embed ? new URL(project.embed).host : ''

  // The frame is narrower than a laptop, and loading the site at frame width would show its
  // phone layout. Render it at desktop width and scale it down instead.
  useEffect(() => {
    const box = boxRef.current
    if (!box) return
    const measure = () => setScale(box.clientWidth / EMBED_WIDTH)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(box)
    return () => ro.disconnect()
  }, [])
  return (
    <figure className="overflow-hidden rounded-xl border border-[rgb(var(--rgb-border))] bg-[rgb(var(--rgb-surface))] shadow-[0_30px_90px_-40px_rgb(0_0_0/0.9)]">
      <figcaption className="flex items-center gap-2 border-b border-[rgb(var(--rgb-border))] bg-[rgb(var(--rgb-surface-2))] px-3 py-2">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--rgb-brand-primary)/0.7)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--rgb-brand-accent)/0.7)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--rgb-ink-600)/0.7)]" />
        </span>
        <span className="truncate font-mono text-[11px] text-[rgb(var(--rgb-ink-400))]">{host}</span>
        {live && (
          <button
            type="button"
            onClick={() => setLive(false)}
            className="ml-auto font-mono text-[11px] text-[rgb(var(--rgb-ink-400))] hover:text-[rgb(var(--rgb-ink-50))]"
          >
            close
          </button>
        )}
      </figcaption>

      <div ref={boxRef} className="relative aspect-[16/10] w-full overflow-hidden bg-[rgb(var(--rgb-bg))]">
        {live ? (
          <iframe
            src={project.embed}
            title={`${project.title}, running`}
            loading="lazy"
            style={{
              width: EMBED_WIDTH,
              height: EMBED_WIDTH * 0.625,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              border: 0,
            }}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        ) : (
          <button
            type="button"
            onClick={() => setLive(true)}
            className="group relative block h-full w-full text-left"
            aria-label={`Load ${project.title} inside this page`}
          >
            {project.screenshot && (
              <img
                src={project.screenshot}
                alt={`${project.title} screenshot`}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
              />
            )}
            <span className="absolute inset-0 bg-[rgb(var(--rgb-bg)/0.45)] transition-colors group-hover:bg-[rgb(var(--rgb-bg)/0.3)]" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--rgb-brand-primary))] px-5 py-2.5 text-sm font-semibold text-[rgb(var(--rgb-ink-50))] shadow-lg transition-transform group-hover:-translate-y-0.5">
                Try it live
              </span>
            </span>
          </button>
        )}
      </div>
    </figure>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, ease: easeOut, delay: index * 0.05 }}
      className="card group flex flex-col p-6"
    >
      {project.screenshot && (
        <a
          href={project.demo ?? project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="-mx-6 -mt-6 mb-5 block aspect-[16/9] overflow-hidden rounded-t-[var(--radius-card)] border-b border-[rgb(var(--rgb-border))] bg-[rgb(var(--rgb-bg)/0.5)]"
          aria-label={`${project.title} screenshot, opens ${project.demo ? 'the live site' : 'the repo'}`}
        >
          <img
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </a>
      )}

      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="kbd text-[rgb(var(--rgb-brand-accent))]">{project.category}</p>
          <h3 className="mt-2 font-display text-xl font-semibold text-[rgb(var(--rgb-ink-50))]">
            {project.title}
          </h3>
        </div>
        <div className="flex items-center gap-3 text-xs text-[rgb(var(--rgb-ink-400))]">
          {project.repo && project.stars !== undefined && (
            <span className="inline-flex items-center gap-1">
              <IconStar size={14} /> {project.stars}
            </span>
          )}
          <span className="font-mono">{project.language}</span>
        </div>
      </header>

      <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--rgb-ink-200))]">{project.summary}</p>

      {project.highlights.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-[rgb(var(--rgb-ink-200))]">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-2.5">
              <span aria-hidden className="mt-2 inline-block h-1 w-3 flex-none bg-[rgb(var(--rgb-brand-primary))]" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <li
            key={s}
            className="inline-flex items-center rounded-md border border-[rgb(var(--rgb-border))] bg-[rgb(var(--rgb-bg)/0.5)] px-2 py-1 font-mono text-[11px] text-[rgb(var(--rgb-ink-400))]"
          >
            {s}
          </li>
        ))}
      </ul>

      <footer className="mt-6 flex flex-wrap items-center gap-3 border-t border-[rgb(var(--rgb-border))] pt-4">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-[rgb(var(--rgb-brand-primary)/0.14)] px-3 py-1.5 text-xs text-[rgb(var(--rgb-brand-primary))] transition-colors hover:bg-[rgb(var(--rgb-brand-primary)/0.24)]"
          >
            <IconArrowUpRight size={14} /> Live site
          </a>
        )}
        {project.repo ? (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-[rgb(var(--rgb-border))] px-3 py-1.5 text-xs text-[rgb(var(--rgb-ink-200))] transition-colors hover:border-[rgb(var(--rgb-brand-primary)/0.6)] hover:text-[rgb(var(--rgb-ink-50))]"
          >
            <IconBrandGithub size={14} /> Code
          </a>
        ) : (
          project.privateNote && (
            <span className="font-mono text-[11px] text-[rgb(var(--rgb-ink-400))]">{project.privateNote}</span>
          )
        )}
      </footer>
    </motion.li>
  )
}
