import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'
import { Container } from './Container'
import { easeOut } from '../../lib/motion'

interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  id: string
  index?: string
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  children: ReactNode
  containerSize?: 'default' | 'narrow'
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
}: SectionProps) {
  return (
    <section id={id} className={clsx('relative py-24 md:py-32 scroll-mt-24', className)}>
      <Container size={containerSize}>
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-12 md:mb-16 max-w-3xl"
        >
          {(index || eyebrow) && (
            <div className="kbd flex items-center gap-3">
              {index && <span className="text-[rgb(var(--rgb-brand-primary))]">{index}</span>}
              {eyebrow && <span>{eyebrow}</span>}
            </div>
          )}
          <h2 className="mt-4 font-[var(--font-display)] text-3xl md:text-5xl font-bold tracking-tight text-[rgb(var(--rgb-ink-50))]">
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
