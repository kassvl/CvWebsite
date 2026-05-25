import { IconCertificate, IconLanguage } from '../ui/Icons'
import { Section } from '../ui/Section'
import { certifications, languages } from '../../data/certifications'

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="credentials"
      title={
        <>
          Certifications &amp; <span className="text-[rgb(var(--rgb-brand-primary))]">languages</span>.
        </>
      }
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="kbd mb-4 flex items-center gap-2 text-[rgb(var(--rgb-ink-400))]">
            <IconCertificate size={14} /> certifications
          </p>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li key={c.title} className="card flex items-start justify-between gap-4 p-4">
                <div>
                  <p className="font-display text-sm font-semibold text-[rgb(var(--rgb-ink-50))]">
                    {c.title}
                  </p>
                  <p className="mt-0.5 text-xs text-[rgb(var(--rgb-ink-400))]">{c.issuer}</p>
                </div>
                <span className="font-mono text-xs text-[rgb(var(--rgb-brand-accent))]">
                  {c.date}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="kbd mb-4 flex items-center gap-2 text-[rgb(var(--rgb-ink-400))]">
            <IconLanguage size={14} /> languages
          </p>
          <ul className="space-y-3">
            {languages.map((l) => (
              <li key={l.name} className="card flex items-center justify-between gap-4 p-4">
                <p className="font-display text-sm font-semibold text-[rgb(var(--rgb-ink-50))]">
                  {l.name}
                </p>
                <span className="font-mono text-xs text-[rgb(var(--rgb-brand-primary))]">
                  {l.level}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
