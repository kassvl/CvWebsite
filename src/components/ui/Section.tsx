import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'
import { Container } from './Container'
import { Heartbeat } from '../effects/Heartbeat'
import { easeOut } from '../../lib/motion'

interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  id: string
  index?: string
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  children: ReactNode
  containerSize?: 'default' | 'narrow'
  /** Draw the EKG divider at the top of the section. On by default. */
  divider?: boolean
}

export function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
  className,
  containerSize = 'default',
  divider = true,
}: SectionProps) {
  return (
    <section id={id} className={clsx('relative py-24 md:py-32 scroll-mt-24', className)}>
      <Container size={containerSize}>
        {divider && (
          /* EKG divider: a faint monitor line between sections, flanked by medical crosses */
          <div
            aria-hidden
            className="mb-16 flex items-center gap-3 text-[rgb(var(--rgb-vital))] md:mb-20"
          >
            <span className="font-mono text-sm opacity-60">+</span>
            <div className="flex-1">
              <Heartbeat beats={6} height={18} className="opacity-45" />
            </div>
            <span className="font-mono text-sm opacity-60">+</span>
          </div>
        )}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          {(index || eyebrow) && (
            <div className="kbd flex items-center gap-2.5">
              <span className="live-dot block h-1.5 w-1.5 rounded-full bg-[rgb(var(--rgb-brand-primary))]" />
              {index && <span className="text-[rgb(var(--rgb-brand-primary))]">{index}</span>}
              {eyebrow && <span>{eyebrow}</span>}
            </div>
          )}
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold tracking-tight text-[rgb(var(--rgb-ink-50))]">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-base md:text-lg leading-relaxed text-[rgb(var(--rgb-ink-200))]">
              {description}
            </p>
          )}
        </motion.header>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  )
}
