import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '../../types/content'
import { Tag } from '../ui/Tag'
import { Icon } from '../ui/Icon'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => (
  <AnimatePresence>
    {project ? (
      <>
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99] bg-ink-900/70 backdrop-blur"
          onClick={onClose}
        />
        <motion.div
          key="modal"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-x-4 bottom-8 top-8 z-[100] overflow-y-auto rounded-[32px] border border-white/12 bg-[#0b1028]/95 p-10 text-white shadow-[0_42px_120px_rgba(4,6,20,0.65)] backdrop-blur-2xl sm:inset-x-auto sm:left-1/2 sm:top-1/2 sm:h-[90vh] sm:w-[840px] sm:-translate-x-1/2 sm:-translate-y-1/2"
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-brand-accent">{project.category}</p>
              <h3 className="mt-2 text-3xl font-semibold text-white">{project.title}</h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              ✕
            </button>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <p className="text-base text-white/75">{project.description}</p>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_60px_rgba(4,6,18,0.45)] backdrop-blur-xl">
                <h4 className="text-xs uppercase tracking-[0.24em] text-brand-accent">Problem</h4>
                <p className="mt-3 text-sm text-white/80">{project.problem}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_24px_60px_rgba(4,6,18,0.45)] backdrop-blur-xl">
                <h4 className="text-xs uppercase tracking-[0.24em] text-brand-accent">Çözüm</h4>
                <p className="mt-3 text-sm text-white/80">{project.solution}</p>
              </div>
              <div className="rounded-3xl border border-emerald-400/35 bg-emerald-400/15 p-6 text-sm text-emerald-100 shadow-lg shadow-emerald-500/20">
                <h4 className="text-xs uppercase tracking-[0.24em]">Etki</h4>
                <p className="mt-3 text-base">{project.impact}</p>
              </div>
              <ul className="grid gap-3 text-sm text-white/75">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-2 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-brand-accent" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <aside className="space-y-6">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/15 bg-white/10 shadow-[0_24px_60px_rgba(4,6,18,0.4)]">
                <img
                  src={project.coverImage}
                  alt={`${project.title} ekran görüntüsü`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-[0.24em] text-brand-accent">Teknolojiler</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Tag key={technology} variant="outline">
                      {technology}
                    </Tag>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-[0.24em] text-brand-accent">Bağlantılar</h4>
                <div className="mt-3 space-y-2">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-white/12 px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:border-white/30 hover:text-white"
                    >
                      {link.label}
                      <Icon name="external" size={18} className="text-brand-accent" />
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </motion.div>
      </>
    ) : null}
  </AnimatePresence>
)


