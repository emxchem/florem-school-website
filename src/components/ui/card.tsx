import * as React from 'react'
import { cn } from '../../lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padded?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, padded = true, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-2xl border border-muted bg-white text-text shadow-sm transition-transform hover:-translate-y-1',
        padded ? 'p-6' : 'p-0',
        className,
      )}
      {...props}
    />
  ),
)
Card.displayName = 'Card'
