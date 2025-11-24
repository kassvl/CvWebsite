import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { projects } from '../../content/projects'
import type { Project } from '../../types/content'
import { Tag } from '../ui/Tag'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import { ProjectModal } from './ProjectModal'
import { clsx } from 'clsx'

const filters = [
  { label: 'Hepsi', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Mobil', value: 'mobile' },
  { label: 'AI', value: 'ai' },
  { label: 'Otomasyon', value: 'automation' },
  { label: 'Hackathon', value: 'hackathon' },
] as const

type FilterValue = (typeof filters)[number]['value']

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = useMemo(
    () => (activeFilter === 'all' ? projects : projects.filter((project) => project.category === activeFilter)),
    [activeFilter],
  )

  return (
    <section id="projects" className="relative py-24 sm:py-28 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.15),transparent_60%)]" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Projeler"
          description="Ölçekli ürünlerden deneysel prototiplere kadar seçilmiş çalışmalar."
        >
          Etki alanı geniş projeler
        </SectionHeading>
        <div className="mt-12 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={clsx(
                'rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-[0.14em] transition-all',
                activeFilter === filter.value
                  ? 'border-white/20 bg-white/10 text-white shadow-[0_22px_48px_rgba(8,12,28,0.4)]'
                  : 'border-white/10 text-white/60 hover:border-white/20 hover:text-white',
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/5 text-white/80 shadow-[0_30px_70px_rgba(6,10,24,0.45)] backdrop-blur-2xl transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={`${project.title} proje görseli`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col gap-6 p-8">
                <div className="space-y-3">
                  <Tag variant="outline" className="border-white/30 text-white group-hover:bg-white/15">
                    {project.category.toUpperCase()}
                  </Tag>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-white/75">{project.description}</p>
                  <p className="text-sm font-medium text-brand-accent">{project.impact}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <Tag key={technology}>{technology}</Tag>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="md"
                    icon={<Icon name="external" size={18} />}
                    iconPosition="right"
                    onClick={() => setSelectedProject(project)}
                    className="border border-white/15 bg-white/10 text-white hover:bg-white/20"
                  >
                    Detayları incele
                  </Button>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/40">
                    <span>Öne çıkanlar</span>
                    <span className="h-[2px] w-10 bg-brand-accent/60" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}


