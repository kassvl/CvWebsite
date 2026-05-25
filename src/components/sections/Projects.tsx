import { motion } from 'framer-motion'
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconStar,
} from '../ui/Icons'
import { Section } from '../ui/Section'
import { projects, type Project } from '../../data/projects'
import { easeOut } from '../../lib/motion'

export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      eyebrow="selected work"
      title={
        <>
          Projects shipped at the{' '}
          <span className="text-[rgb(var(--rgb-brand-primary))]">infra</span> layer.
        </>
      }
      description="Open-source repositories and lab-grade systems — most are reproducible end-to-end with the commands in their READMEs."
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </ul>
    </Section>
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
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="-mx-6 -mt-6 mb-5 block aspect-[16/9] overflow-hidden rounded-t-2xl border-b border-[rgb(var(--rgb-border))] bg-[rgb(var(--rgb-bg)/0.5)]"
          aria-label={`${project.title} screenshot — opens repo`}
        >
          <img
            src={project.screenshot}
            alt={`${project.title} — live screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </a>
      )}

      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="kbd text-[rgb(var(--rgb-brand-primary))]">{project.category}</p>
          <h3 className="mt-2 font-display text-lg font-semibold text-[rgb(var(--rgb-ink-50))]">
            {project.title}
          </h3>
        </div>
        <div className="flex items-center gap-3 text-xs text-[rgb(var(--rgb-ink-400))]">
          <span className="inline-flex items-center gap-1">
            <IconStar size={14} /> {project.stars}
          </span>
          <span className="font-mono">{project.language}</span>
        </div>
      </header>

      <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--rgb-ink-200))]">
        {project.summary}
      </p>

      {project.highlights.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-[rgb(var(--rgb-ink-200))]">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-2.5">
              <span
                aria-hidden
                className="mt-1.5 inline-block h-1 w-1 flex-none rounded-full bg-[rgb(var(--rgb-brand-primary))]"
              />
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

      <footer className="mt-6 flex items-center gap-3 pt-4 border-t border-[rgb(var(--rgb-border))]">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-[rgb(var(--rgb-border))] px-3 py-1.5 text-xs text-[rgb(var(--rgb-ink-200))] transition-colors hover:border-[rgb(var(--rgb-brand-primary)/0.6)] hover:text-[rgb(var(--rgb-ink-50))]"
        >
          <IconBrandGithub size={14} /> Code
        </a>
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[rgb(var(--rgb-brand-primary)/0.12)] px-3 py-1.5 text-xs text-[rgb(var(--rgb-brand-primary))] transition-colors hover:bg-[rgb(var(--rgb-brand-primary)/0.2)]"
          >
            <IconArrowUpRight size={14} /> Demo
          </a>
        )}
      </footer>
    </motion.li>
  )
}
