import * as React from 'react'
import { cn } from '../../lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: 'a'
  href?: string
}

const variants = {
  primary: 'button-primary bg-primary text-white hover:bg-primary/90 hover:text-white',
  secondary: 'button-secondary bg-gold text-text hover:bg-gold/90 hover:text-text',
  outline: 'button-outline border-2 border-purple text-purple hover:bg-purple hover:text-white',
  ghost: 'text-text hover:text-purple hover:bg-bg-secondary/60',
} as const

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
} as const

const base =
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ as, className, variant = 'primary', size = 'md', href, ...props }, ref) => {
    const classNames = cn(base, variants[variant], sizes[size], className)

    if (as === 'a') {
      return (
        <a
          ref={ref as any}
          href={href}
          className={classNames}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      )
    }

    return (
      <button
        ref={ref}
        type="button"
        className={classNames}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'
