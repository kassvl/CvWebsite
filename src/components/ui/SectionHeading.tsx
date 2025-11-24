import type { PropsWithChildren } from 'react'
import { clsx } from 'clsx'

type SectionHeadingProps = PropsWithChildren<{
  eyebrow: string
  description?: string
  align?: 'left' | 'center'
}>

export const SectionHeading = ({ eyebrow, children, description, align = 'left' }: SectionHeadingProps) => (
  <div
    className={clsx('flex w-full flex-col gap-4', {
      'items-center text-center': align === 'center',
      'items-start text-left': align === 'left',
    })}
  >
    <span className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.28em] text-brand-accent/80">
      <span className="h-[1px] w-10 bg-gradient-to-r from-transparent via-brand-accent/70 to-transparent" />
      {eyebrow}
    </span>
    <div>
      <h2 className="text-3xl font-semibold text-white md:text-4xl lg:text-[38px]">{children}</h2>
      {description ? <p className="mt-3 max-w-3xl text-base text-white/70 md:text-lg">{description}</p> : null}
    </div>
  </div>
)


