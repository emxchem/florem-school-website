import * as React from 'react'
import { cn } from '../../lib/utils'

export interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  narrow?: boolean
}

export const SectionContainer = React.forwardRef<HTMLDivElement, SectionContainerProps>(
  ({ className, narrow = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'mx-auto max-w-7xl px-6 sm:px-8 lg:px-10',
        narrow ? 'max-w-5xl' : 'max-w-7xl',
        className,
      )}
      {...props}
    />
  ),
)
SectionContainer.displayName = 'SectionContainer'
