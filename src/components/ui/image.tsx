import * as React from 'react'
import { cn } from '../../lib/utils'

/*
 * Optimized image component for genuine school photographs.
 *
 * - Reserves width/height from the aspect ratio to prevent layout shift
 * - Lazy-loads below the fold
 * - object-fit: cover by default (contain for logos)
 * - Graceful fallback when an image fails to load
 */
export interface SchoolImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  width?: number
  height?: number
  fit?: 'cover' | 'contain'
  priority?: boolean
}

export const SchoolImage: React.FC<SchoolImageProps> = ({
  src,
  alt,
  width,
  height,
  fit = 'cover',
  priority = false,
  className,
  ...props
}) => {
  const [error, setError] = React.useState(false)
  const aspectStyle = width && height ? { aspectRatio: `${width / height}` } : {}

  return (
    <figure
      className={cn('relative overflow-hidden rounded-xl', className)}
      style={{ ...aspectStyle }}
    >
      <img
        src={error ? undefined : src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={cn(
          'block w-full h-full object-',
          fit,
          'transition-opacity duration-300',
          'data-[error]:hidden',
        )}
        onError={() => setError(true)}
        {...props}
      />
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl border border-dashed border-muted bg-mint/50 text-muted text-sm text-center p-4">
          Image unavailable
        </div>
      )}
    </figure>
  )
}
