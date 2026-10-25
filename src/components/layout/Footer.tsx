import { profile } from '../../data/profile'
import { Container } from '../ui/Container'
import { Heartbeat } from '../effects/Heartbeat'

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--rgb-border))] py-10">
      <Container>
        {/* flatlining-into-calm EKG strip to close the page */}
        <div
          aria-hidden
          className="mb-8 flex items-center gap-3 text-[rgb(var(--rgb-brand-primary))]"
        >
          <span className="font-mono text-xs opacity-50">+</span>
          <div className="flex-1">
            <Heartbeat beats={8} height={16} className="opacity-35" />
          </div>
          <span className="font-mono text-xs opacity-50">+</span>
        </div>
        <div className="flex flex-col items-start justify-between gap-4 text-sm text-[rgb(var(--rgb-ink-400))] md:flex-row md:items-center">
          <p className="font-mono text-xs">
            <span className="text-[rgb(var(--rgb-ink-600))]">$</span> echo "{profile.monogram}.dev, built with React, Tailwind v4 and Framer Motion."
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
