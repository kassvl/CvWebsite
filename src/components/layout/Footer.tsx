import { profile } from '../../data/profile'
import { Container } from '../ui/Container'

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--rgb-border))] py-10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 text-sm text-[rgb(var(--rgb-ink-400))] md:flex-row md:items-center">
          <p className="font-mono text-xs">
            <span className="text-[rgb(var(--rgb-ink-600))]">$</span> echo "{profile.monogram}.dev — built with React, Tailwind v4, Framer Motion."
          </p>
          <p className="font-mono text-xs">
            © {new Date().getFullYear()} {profile.name} ·{' '}
            <span className="text-[rgb(var(--rgb-brand-accent))]">
              {profile.systemStatus.region}
            </span>
          </p>
        </div>
      </Container>
    </footer>
  )
}
