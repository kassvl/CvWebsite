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

/**
 * Typographic hero. A scroll-scrubbed film of the client sites used to sit here; it was cut on
 * 2026-09-20 because it looked worse than the work it was showing and ate a scroll's worth of
 * frame time. The page now opens on the name, the offer and links to the two live sites.
 */
const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut, delay: i * 0.07 },
  }),
}

const LIVE = [
  { label: 'braidss.xyz', note: 'booking system, Kulama', href: 'https://braidss.xyz' },
  { label: 'loomr.net', note: 'showroom and configurator', href: 'https://loomr.net' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      {/* warm light from the top left, the only "image" on the page */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(70% 55% at 12% 0%, rgb(var(--rgb-brand-primary) / 0.16) 0%, transparent 62%),' +
            'radial-gradient(60% 50% at 85% 10%, rgb(var(--rgb-brand-accent) / 0.08) 0%, transparent 60%)',
        }}
      />
      <Container>
        <div className="relative grid items-end gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={reveal}
              custom={0}
              className="kbd inline-flex items-center gap-2.5 rounded-full border border-[rgb(var(--rgb-brand-primary)/0.4)] bg-[rgb(var(--rgb-brand-primary)/0.1)] px-3 py-1.5 text-[rgb(var(--rgb-ink-50))]"
            >
              <span className="live-dot block h-1.5 w-1.5 rounded-full bg-[rgb(var(--rgb-brand-primary))]" />
              {profile.status}
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={reveal}
              custom={1}
              className="mt-7 font-display text-6xl font-semibold leading-[0.92] tracking-tight text-[rgb(var(--rgb-ink-50))] md:text-8xl"
            >
              Kadirhan
              <span className="block text-[rgb(var(--rgb-brand-primary))]">Emre.</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={reveal}
              custom={2}
              className="mt-6 font-mono text-sm text-[rgb(var(--rgb-ink-400))] md:text-base"
            >
              {profile.role.toLowerCase()} · {profile.location}
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
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[rgb(var(--rgb-brand-primary))] px-5 py-2.5 text-sm font-semibold text-[rgb(var(--rgb-ink-50))] transition-transform hover:-translate-y-0.5"
              >
                See the work
                <IconArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--rgb-border))] px-5 py-2.5 text-sm text-[rgb(var(--rgb-ink-50))] transition-colors hover:border-[rgb(var(--rgb-brand-primary)/0.6)] hover:bg-[rgb(var(--rgb-surface))]"
              >
                Get in touch
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--rgb-border))] px-4 py-2.5 text-sm text-[rgb(var(--rgb-ink-200))] transition-colors hover:text-[rgb(var(--rgb-ink-50))]"
              >
                <IconBrandGithub size={16} />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--rgb-border))] px-4 py-2.5 text-sm text-[rgb(var(--rgb-ink-200))] transition-colors hover:text-[rgb(var(--rgb-ink-50))]"
              >
                <IconBrandLinkedin size={16} />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </motion.div>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={reveal}
              custom={5}
              className="mt-10 inline-flex items-center gap-2 text-xs text-[rgb(var(--rgb-ink-400))]"
            >
              <IconMapPin size={14} />
              {profile.region}
            </motion.p>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.25 }}
            className="lg:col-span-5"
          >
            <div className="card p-6 md:p-7">
              <p className="kbd text-[rgb(var(--rgb-ink-400))]">live right now</p>
              <ul className="mt-5 divide-y divide-[rgb(var(--rgb-border))]">
                {LIVE.map((item) => (
                  <li key={item.href} className="py-3 first:pt-0 last:pb-0">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline justify-between gap-4"
                    >
                      <span>
                        <span className="font-display text-xl text-[rgb(var(--rgb-ink-50))] group-hover:text-[rgb(var(--rgb-brand-primary))]">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-sm text-[rgb(var(--rgb-ink-400))]">{item.note}</span>
                      </span>
                      <IconArrowUpRight
                        size={16}
                        className="flex-none text-[rgb(var(--rgb-ink-600))] transition-transform group-hover:-translate-y-0.5 group-hover:text-[rgb(var(--rgb-brand-primary))]"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[rgb(var(--rgb-border))] pt-6">
                <div>
                  <dt className="kbd">status</dt>
                  <dd className="mt-1 font-mono text-sm text-[rgb(var(--rgb-brand-accent))]">
                    {profile.systemStatus.status}
                  </dd>
                </div>
                <div>
                  <dt className="kbd">graduating</dt>
                  <dd className="mt-1 font-mono text-sm text-[rgb(var(--rgb-ink-50))]">feb 2027</dd>
                </div>
                <div>
                  <dt className="kbd">work permit</dt>
                  <dd className="mt-1 font-mono text-sm text-[rgb(var(--rgb-ink-50))]">poland, no sponsorship</dd>
                </div>
                <div>
                  <dt className="kbd">languages</dt>
                  <dd className="mt-1 font-mono text-sm text-[rgb(var(--rgb-ink-50))]">en c1+ · pl a2-b1 · tr</dd>
                </div>
              </dl>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  )
}
