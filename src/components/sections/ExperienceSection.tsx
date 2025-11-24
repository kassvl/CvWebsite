import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { experiences } from '../../content/experience'
import { Tag } from '../ui/Tag'
import { Icon } from '../ui/Icon'

const variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: index * 0.12, ease: 'easeOut' as const },
  }),
}

export const ExperienceSection = () => (
  <section id="experience" className="relative py-24 sm:py-28 md:py-32">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,51,102,0.16),transparent_60%)]" />
    <Container className="relative">
      <SectionHeading eyebrow="Deneyim" description="Etki odaklı teslimatlar ve liderlik sorumlulukları.">
        Teknik liderlik yolculuğu
      </SectionHeading>
      <div className="mt-16 space-y-12">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={variants}
            className="relative grid gap-6 rounded-4xl border border-white/10 bg-white/5 p-10 text-white/80 shadow-[0_28px_68px_rgba(8,11,28,0.4)] backdrop-blur-2xl lg:grid-cols-[220px_1fr]"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-accent/20">
                  <Icon name="company" className="text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{experience.company}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/50">{experience.location}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-accent">{experience.role}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  {experience.start} — {experience.end}
                </p>
              </div>
              {experience.recognition ? (
                <div className="space-y-2">
                  {experience.recognition.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-emerald-300">
                      <Icon name="award" size={18} className="text-emerald-300" />
                      {item}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="space-y-6">
              <p className="text-base text-white/75">{experience.description}</p>
              <ul className="space-y-3 text-sm text-white/75">
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3">
                    <span className="mt-2 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-brand-accent" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <Tag key={technology} variant="outline">
                    {technology}
                  </Tag>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Container>
  </section>
)


