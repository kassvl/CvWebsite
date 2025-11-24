import { Container } from '../layout/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { competencies } from '../../content/competencies'
import { motion } from 'framer-motion'

export const CompetenciesSection = () => (
  <section id="competencies" className="relative py-24 sm:py-28 md:py-32">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,51,102,0.14),transparent_60%)]" />
    <Container className="relative">
      <SectionHeading
        eyebrow="Uzmanlık Alanları"
        description="Platform vizyonunu besleyen çekirdek yetkinlikler ve odak alanları."
      >
        Stratejiyi teknolojiye dönüştüren üç sütun
      </SectionHeading>
      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {competencies.map((competency, index) => (
          <motion.article
            key={competency.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 text-white/80 shadow-[0_28px_70px_rgba(6,10,24,0.42)] backdrop-blur-2xl"
          >
            <div className="space-y-3">
              <span className="inline-flex rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
                {competency.title}
              </span>
              <h3 className="text-xl font-semibold text-white">{competency.headline}</h3>
              <p className="text-sm text-white/70">{competency.description}</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/50">Ana kabiliyetler</h4>
              <ul className="space-y-3 text-sm text-white/75">
                {competency.capabilities.map((capability) => (
                  <li key={capability} className="flex gap-3">
                    <span className="mt-2 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-brand-accent" />
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/50">Araç seti</h4>
              <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-white/50">
                {competency.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/70"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
)


