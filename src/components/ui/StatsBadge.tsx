import type { PropsWithChildren } from 'react'
import { clsx } from 'clsx'

type StatsBadgeProps = PropsWithChildren<{
  label: string
  className?: string
}>

export const StatsBadge = ({ label, children, className }: StatsBadgeProps) => (
  <div
    className={clsx(
      'flex flex-col items-center justify-center rounded-3xl border border-brand-primary/20 bg-brand-primary/[0.06] px-6 py-5 text-center shadow-[0_18px_40px_rgba(14,23,38,0.2)] backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(14,23,38,0.25)] dark:border-white/5 dark:bg-white/[0.06]',
      className,
    )}
  >
    <span className="text-3xl font-semibold text-brand-primary md:text-4xl">{children}</span>
    <span className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-ink-500 md:text-xs">{label}</span>
  </div>
)


