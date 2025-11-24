import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react'
import { clsx } from 'clsx'

type ButtonVariant = 'primary' | 'ghost' | 'outline'

type ButtonProps = PropsWithChildren<
  {
    variant?: ButtonVariant
    icon?: ReactNode
    iconPosition?: 'left' | 'right'
    size?: 'md' | 'lg'
    as?: 'button' | 'a'
    href?: string
  } & ButtonHTMLAttributes<HTMLButtonElement>
>

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-accent/80 disabled:opacity-60 disabled:cursor-not-allowed'

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-primary text-white hover:bg-brand-primary/90',
  ghost:
    'bg-transparent border border-transparent text-brand-primary hover:border-brand-primary/20 hover:bg-brand-primary/10',
  outline:
    'border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
}

const sizeStyles = {
  md: 'text-sm px-5 py-2.5',
  lg: 'text-base px-6 py-3',
}

export const Button = ({
  variant = 'primary',
  icon,
  iconPosition = 'left',
  size = 'md',
  children,
  as = 'button',
  href,
  ...props
}: ButtonProps) => {
  const composedClassName = clsx(baseStyles, variantStyles[variant], sizeStyles[size], props.className)

  if (as === 'a' && href) {
    return (
      <a
        className={composedClassName}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...(props as unknown as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {icon && iconPosition === 'left' && icon}
        {children}
        {icon && iconPosition === 'right' && icon}
      </a>
    )
  }

  return (
    <button className={composedClassName} {...props}>
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </button>
  )
}


