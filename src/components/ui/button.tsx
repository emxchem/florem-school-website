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
  primary: 'bg-[#79B832] text-white hover:bg-[#075B35]',
  secondary: 'bg-[#075B35] text-white hover:bg-[#79B832]',
  outline: 'border-2 border-[#79B832] text-[#075B35] hover:bg-[#79B832] hover:text-white',
  ghost: 'text-[#075B35] hover:text-[#79B832] hover:bg-mint/20',
} as const

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
} as const

const base =
  'inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

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
