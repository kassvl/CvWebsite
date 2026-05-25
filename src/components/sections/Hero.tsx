import { motion } from 'framer-motion'
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMapPin,
} from '../ui/Icons'
import { profile } from '../../data/profile'
import { Container } from '../ui/Container'
import { easeOut } from '../../lib/motion'

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut, delay: i * 0.08 },
  }),
}

export function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Left: identity */}
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              custom={0}
              className="kbd inline-flex items-center gap-2.5 rounded-full border border-[rgb(var(--rgb-brand-accent)/0.35)] bg-[rgb(var(--rgb-brand-accent)/0.08)] px-3 py-1.5 text-[rgb(var(--rgb-brand-accent))]"
            >
              <span className="live-dot block h-1.5 w-1.5 rounded-full bg-[rgb(var(--rgb-brand-accent))]" />
              {profile.status}
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={reveal}
              custom={1}
              className="mt-6 font-[var(--font-display)] text-5xl font-bold tracking-tight text-[rgb(var(--rgb-ink-50))] md:text-7xl"
            >
              {profile.name}.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={reveal}
              custom={2}
              className="mt-4 font-mono text-sm md:text-base text-[rgb(var(--rgb-brand-primary))]"
            >
              <span className="text-[rgb(var(--rgb-ink-600))]">&gt;</span>{' '}
              {profile.role.toLowerCase()} <span className="text-[rgb(var(--rgb-ink-600))]">·</span>{' '}
              {profile.location}
            </motion.p>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={reveal}
              custom={3}
              className="mt-6 max-w-xl text-base leading-relaxed text-[rgb(var(--rgb-ink-200))] md:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              custom={4}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[rgb(var(--rgb-brand-primary))] px-5 py-2.5 text-sm font-semibold text-[rgb(var(--rgb-bg))] transition-transform hover:-translate-y-0.5"
              >
                See my work
                <IconArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--rgb-border))] px-5 py-2.5 text-sm font-medium text-[rgb(var(--rgb-ink-50))] transition-colors hover:border-[rgb(var(--rgb-brand-primary)/0.6)] hover:bg-[rgb(var(--rgb-surface-2))]"
              >
                Get in touch
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--rgb-border))] px-4 py-2.5 text-sm text-[rgb(var(--rgb-ink-200))] transition-colors hover:border-[rgb(var(--rgb-brand-primary)/0.6)] hover:text-[rgb(var(--rgb-ink-50))]"
                aria-label="GitHub"
              >
                <IconBrandGithub size={16} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--rgb-border))] px-4 py-2.5 text-sm text-[rgb(var(--rgb-ink-200))] transition-colors hover:border-[rgb(var(--rgb-brand-primary)/0.6)] hover:text-[rgb(var(--rgb-ink-50))]"
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin size={16} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={reveal}
              custom={5}
              className="mt-10 inline-flex items-center gap-2 text-xs text-[rgb(var(--rgb-ink-400))]"
            >
              <IconMapPin size={14} />
              {profile.region}
            </motion.div>
          </div>

          {/* Right: system status card */}
          <motion.aside
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <SystemStatusCard />
          </motion.aside>
        </div>
      </Container>
    </section>
  )
}

function SystemStatusCard() {
  const s = profile.systemStatus
  return (
    <div className="card relative overflow-hidden p-6 md:p-7">
      <div className="flex items-center justify-between">
        <div className="kbd flex items-center gap-2 text-[rgb(var(--rgb-ink-400))]">
          <span className="grid h-6 w-6 place-items-center rounded-md border border-[rgb(var(--rgb-brand-primary)/0.4)] bg-[rgb(var(--rgb-brand-primary)/0.1)] text-[rgb(var(--rgb-brand-primary))]">
            ⌘
          </span>
          portfolio status
        </div>
        <div className="flex items-center gap-2 text-xs text-[rgb(var(--rgb-brand-accent))]">
          <span className="live-dot block h-1.5 w-1.5 rounded-full bg-[rgb(var(--rgb-brand-accent))]" />
          available
        </div>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
        <Stat label="region" value={s.region} accent />
        <Stat label="role" value={s.role} />
        <Stat label="status" value={s.status} />
        <Stat label="open issues" value={String(s.incidents)} ok />
      </dl>

      <div className="mt-6 rounded-xl border border-[rgb(var(--rgb-border))] bg-[rgb(var(--rgb-bg)/0.6)] p-4 font-mono text-xs leading-relaxed text-[rgb(var(--rgb-ink-200))]">
        <p>
          <span className="text-[rgb(var(--rgb-ink-600))]">$</span>{' '}
          <span className="text-[rgb(var(--rgb-brand-primary))]">cat</span> /etc/portfolio
        </p>
        <p className="text-[rgb(var(--rgb-ink-400))]">5 hero projects · HCL · Python · TS</p>
        <p className="mt-2">
          <span className="text-[rgb(var(--rgb-ink-600))]">$</span>{' '}
          <span className="text-[rgb(var(--rgb-brand-primary))]">grep</span> -c compliance README.md
        </p>
        <p className="text-[rgb(var(--rgb-ink-400))]">PCI-DSS · GDPR · EU DORA · CIS · NIST</p>
      </div>
    </div>
  )
}

function Stat({
  label,
  value,
  accent,
  ok,
}: {
  label: string
  value: string
  accent?: boolean
  ok?: boolean
}) {
  return (
    <div>
      <dt className="kbd">{label}</dt>
      <dd
        className={
          'mt-1 font-mono text-base ' +
          (accent
            ? 'text-[rgb(var(--rgb-brand-primary))]'
            : ok
              ? 'text-[rgb(var(--rgb-brand-accent))]'
              : 'text-[rgb(var(--rgb-ink-50))]')
        }
      >
        {value}
      </dd>
    </div>
  )
}
