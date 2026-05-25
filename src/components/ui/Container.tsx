import { clsx } from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  size?: 'default' | 'narrow'
}

export function Container({
  children,
  className,
  size = 'default',
  ...rest
}: ContainerProps) {
  return (
    <div
      className={clsx(
        'mx-auto w-full px-6 md:px-10',
        size === 'default' ? 'max-w-6xl' : 'max-w-3xl',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
