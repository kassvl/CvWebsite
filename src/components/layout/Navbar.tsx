import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '../ui/Icons'
import { navItems } from '../../data/nav'
import { profile } from '../../data/profile'
import { Container } from '../ui/Container'
import { easeOut } from '../../lib/motion'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: easeOut }}
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-3' : 'py-5',
      )}
    >
      <Container>
        <nav
          className={clsx(
            'flex items-center justify-between rounded-full border px-4 md:px-5 py-2.5 backdrop-blur-xl transition-all duration-300',
            scrolled
              ? 'border-[rgb(var(--rgb-border))] bg-[rgb(var(--rgb-surface)/0.8)]'
              : 'border-transparent bg-[rgb(var(--rgb-surface)/0.4)]',
          )}
        >
          <a
            href="#top"
            className="flex items-center gap-2.5 font-mono font-semibold tracking-tight text-[rgb(var(--rgb-ink-50))]"
          >
            <span className="grid h-7 w-7 place-items-center rounded-md border border-[rgb(var(--rgb-brand-primary)/0.5)] bg-[rgb(var(--rgb-brand-primary)/0.12)] text-xs text-[rgb(var(--rgb-brand-primary))]">
              k
            </span>
            <span className="hidden sm:inline">{profile.monogram}</span>
            <span className="text-[rgb(var(--rgb-ink-400))]">/</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.index}>
                <a
                  href={item.href}
                  className="group flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-[rgb(var(--rgb-ink-200))] transition-colors hover:text-[rgb(var(--rgb-ink-50))]"
                >
                  <span className="font-mono text-xs text-[rgb(var(--rgb-ink-600))] group-hover:text-[rgb(var(--rgb-brand-primary))]">
                    {item.index}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1">
            <IconLink href={profile.github} label="GitHub">
              <IconBrandGithub size={16} />
            </IconLink>
            <IconLink href={profile.linkedin} label="LinkedIn">
              <IconBrandLinkedin size={16} />
            </IconLink>
            <IconLink href={`mailto:${profile.email}`} label="Email">
              <IconMail size={16} />
            </IconLink>
          </div>
        </nav>
      </Container>
    </motion.header>
  )
}

interface IconLinkProps {
  href: string
  label: string
  children: React.ReactNode
}

function IconLink({ href, label, children }: IconLinkProps) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full text-[rgb(var(--rgb-ink-400))] transition-colors hover:bg-[rgb(var(--rgb-surface-2))] hover:text-[rgb(var(--rgb-ink-50))]"
    >
      {children}
    </a>
  )
}
