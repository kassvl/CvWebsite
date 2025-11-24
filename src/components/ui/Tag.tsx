import type { PropsWithChildren } from 'react'
import { clsx } from 'clsx'

type TagProps = PropsWithChildren<{
  className?: string
  variant?: 'default' | 'outline' | 'success'
}>

const variantStyles = {
  default: 'bg-white/10 text-white border-transparent',
  outline: 'bg-transparent text-white border border-white/30',
  success: 'bg-emerald-400/15 text-emerald-300 border border-emerald-300/25',
}

export const Tag = ({ children, className, variant = 'default' }: TagProps) => (
  <span
    className={clsx(
      'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]',
      variantStyles[variant],
      className,
    )}
  >
    {children}
  </span>
)


