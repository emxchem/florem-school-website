import * as React from 'react'

export interface SectionHeadingProps {
  eyebrow?: string
  heading: string
  support?: string
  tagline?: string
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  heading,
  support,
  tagline,
}) => {
  return (
    <div className="mb-12 text-center">
      {eyebrow && (
        <span className="inline-block mb-4 text-sm font-semibold tracking-wider text-primary uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="mb-4">{heading}</h2>
      {tagline && (
        <p className="mb-6 text-lg text-muted italic">{tagline}</p>
      )}
      {support && <p className="text-muted max-w-2xl mx-auto">{support}</p>}
    </div>
  )
}
