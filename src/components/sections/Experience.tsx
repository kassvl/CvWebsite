import { Section } from '../ui/Section'
import { experience, education } from '../../data/experience'

export function Experience() {
  return (
    <Section
      id="experience"
      index="04"
      eyebrow="experience &amp; education"
      title={
        <>
          The path to <span className="text-[rgb(var(--rgb-brand-accent))]">Cloud&nbsp;Engineer</span>.
        </>
      }
      description="Hands-on training programs and academic work shaping my Cloud / DevOps trajectory."
    >
      <div className="grid gap-12 lg:grid-cols-2">
        <Timeline label="Experience">
          {experience.map((item) => (
            <article key={item.company} className="card p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="kbd text-[rgb(var(--rgb-brand-primary))]">{item.role}</p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-[rgb(var(--rgb-ink-50))]">
                    {item.company}
                  </h3>
                </div>
                <div className="text-right text-xs text-[rgb(var(--rgb-ink-400))]">
                  <p className="font-mono">
                    {item.start} — {item.end}
                  </p>
                  <p className="mt-0.5">{item.location}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[rgb(var(--rgb-ink-200))]">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5">
                    <span
                      aria-hidden
                      className="mt-1.5 inline-block h-1 w-1 flex-none rounded-full bg-[rgb(var(--rgb-brand-accent))]"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {item.tags.map((t) => (
                  <li
                    key={t}
                    className="inline-flex items-center rounded-md border border-[rgb(var(--rgb-border))] bg-[rgb(var(--rgb-bg)/0.5)] px-2 py-1 font-mono text-[11px] text-[rgb(var(--rgb-ink-400))]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Timeline>

        <Timeline label="Education">
          {education.map((edu) => (
            <article key={edu.school} className="card p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="kbd text-[rgb(var(--rgb-brand-primary))]">{edu.degree}</p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-[rgb(var(--rgb-ink-50))]">
                    {edu.school}
                  </h3>
                </div>
                <div className="text-right text-xs text-[rgb(var(--rgb-ink-400))]">
                  <p className="font-mono">
                    {edu.start} — {edu.end}
                  </p>
                  <p className="mt-0.5">{edu.location}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[rgb(var(--rgb-ink-200))]">
                {edu.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5">
                    <span
                      aria-hidden
                      className="mt-1.5 inline-block h-1 w-1 flex-none rounded-full bg-[rgb(var(--rgb-brand-primary))]"
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Timeline>
      </div>
    </Section>
  )
}

function Timeline({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="kbd mb-4 text-[rgb(var(--rgb-ink-400))]">{label}</p>
      <div className="space-y-4">{children}</div>
    </div>
  )
}
