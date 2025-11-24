import { Container } from '../layout/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { skillCategories } from '../../content/skills'
import { clsx } from 'clsx'

const levelMap = {
  critical: { label: 'Kritik', className: 'bg-emerald-400/15 text-emerald-200 border border-emerald-300/35' },
  advanced: { label: 'İleri', className: 'bg-brand-accent/20 text-brand-accent border border-brand-accent/35' },
  intermediate: { label: 'Orta', className: 'bg-amber-400/20 text-amber-200 border border-amber-300/30' },
}

export const SkillsSection = () => (
  <section id="skills" className="relative py-24 sm:py-28 md:py-32">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.2),transparent_65%)]" />
    <Container className="relative">
      <SectionHeading eyebrow="Yetkinlikler" description="Derinlikli teknik beceriler ve çalışma prensipleri.">
        Çok yönlü mühendislik repertuarı
      </SectionHeading>
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-4xl border border-white/10 bg-white/5 p-8 text-white/80 shadow-[0_28px_70px_rgba(6,10,24,0.42)] backdrop-blur-2xl transition-transform duration-200 hover:-translate-y-1"
          >
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-accent">{category.title}</h3>
            <ul className="mt-6 space-y-6">
              {category.items.map((item) => (
                <li key={item.name} className="space-y-2">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-base font-semibold text-white">{item.name}</p>
                    <span
                      className={clsx(
                        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]',
                        levelMap[item.level].className,
                      )}
                    >
                      {levelMap[item.level].label}
                    </span>
                  </div>
                  {item.description ? <p className="text-sm text-white/70">{item.description}</p> : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </section>
)


