import { Section } from '../ui/Section'
import { skillGroups } from '../../data/skills'

export function TechStack() {
  return (
    <Section
      id="stack"
      index="02"
      eyebrow="stack"
      title={
        <>
          Tools that keep clusters{' '}
          <span className="text-[rgb(var(--rgb-brand-accent))]">healthy</span>.
        </>
      }
      description="The eight layers I reach for, from infra plumbing to incident-grade observability."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((g) => (
          <div key={g.title} className="card p-5">
            <h3 className="font-display text-sm font-semibold tracking-tight text-[rgb(var(--rgb-ink-50))]">
              {g.title}
            </h3>
            <p className="mt-1 text-xs text-[rgb(var(--rgb-ink-400))]">{g.caption}</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center rounded-md border border-[rgb(var(--rgb-border))] bg-[rgb(var(--rgb-surface-2))] px-2 py-1 font-mono text-[11px] text-[rgb(var(--rgb-ink-200))]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
