import type { HTMLAttributes, PropsWithChildren } from 'react'
import { clsx } from 'clsx'

type ContainerProps = PropsWithChildren<
  {
    className?: string
  } & HTMLAttributes<HTMLDivElement>
>

export const Container = ({ children, className, ...props }: ContainerProps) => (
  <div className={clsx('mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8', className)} {...props}>
    {children}
  </div>
)


