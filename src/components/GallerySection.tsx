import { useCallback, useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionContainer } from './ui/section-container'
import { SectionHeading } from './ui/section-heading'
import { SchoolImage } from './ui/image'
import { galleryImages } from '../data/gallery'

/*
 * Desktop asymmetrical grid placement for gallery items.
 * Values are CSS grid line numbers.
 */
const GRID_PLACEMENT: Record<string, {
  colStart: number
  colEnd: number
  rowStart: number
  rowEnd: number
}> = {
  'gallery-1': { colStart: 1, colEnd: 3, rowStart: 1, rowEnd: 3 },
  'gallery-2': { colStart: 3, colEnd: 4, rowStart: 1, rowEnd: 3 },
  'gallery-3': { colStart: 4, colEnd: 5, rowStart: 1, rowEnd: 3 },
  'gallery-4': { colStart: 3, colEnd: 4, rowStart: 3, rowEnd: 4 },
  'gallery-5': { colStart: 3, colEnd: 4, rowStart: 4, rowEnd: 5 },
  'gallery-6': { colStart: 4, colEnd: 5, rowStart: 3, rowEnd: 5 },
}

export function GallerySection() {
  const [openId, setOpenId] = useState<string | null>(null)
  const activeImage = galleryImages.find((img) => img.id === openId)

  const closeLightbox = useCallback(() => setOpenId(null), [])

  const navigateLightbox = useCallback((direction: 1 | -1) => {
    const ids = galleryImages.map((img) => img.id)
    const current = ids.indexOf(openId ?? '')
    const next = (current + direction + ids.length) % ids.length
    setOpenId(ids[next])
  }, [openId])

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (!openId) return
      if (event.key === 'Escape') {
        closeLightbox()
      } else if (event.key === 'ArrowRight') {
        navigateLightbox(1)
      } else if (event.key === 'ArrowLeft') {
        navigateLightbox(-1)
      }
    }
    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [openId, closeLightbox, navigateLightbox])

  return (
    <>
      <section id="school-life" className="bg-cream py-24 sm:py-32 border-y border-white/60">
        <SectionContainer>
          <SectionHeading
            eyebrow="School Life Gallery"
            heading="Little Moments, Lasting Memories"
          />

          <div
            className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:grid-rows-4 gap-6"
            aria-label="School life gallery"
          >
            {galleryImages.map((image) => {
              const placement = GRID_PLACEMENT[image.id]
              return (
                <figure
                  key={image.id}
                  className={`
                    group rounded-2xl border border-muted overflow-hidden
                    transition-transform duration-300
                    ${placement
                      ? `lg:col-start-${placement.colStart} lg:col-end-${placement.colEnd} lg:row-start-${placement.rowStart} lg:row-end-${placement.rowEnd}`
                      : ''
                  }
                  `}
                  onClick={() => setOpenId(image.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      setOpenId(image.id)
                    }
                  }}
                >
                  <SchoolImage
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover object-position-center group-hover:scale-105"
                  />
                  <figcaption className="absolute left-4 right-4 bottom-4 text-white/90 text-sm font-medium px-3 py-1.5 rounded-lg bg-forest/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.caption}
                  </figcaption>
                </figure>
              )
            })}
          </div>
        </SectionContainer>
      </section>

      {/* Accessible lightbox */}
      {openId && activeImage && (
        <div
          className="fixed inset-0 z-50 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          onClick={closeLightbox}
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
          <div className="relative flex-1 flex items-center justify-center p-6 sm:p-10 max-w-[90vw] max-h-[90vh] mx-auto">
            <button
              type="button"
              className="absolute right-6 top-6 z-10 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={closeLightbox}
              aria-label="Close gallery"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 opacity-50 hover:opacity-100 transition-all"
              onClick={() => navigateLightbox(-1)}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <SchoolImage
              src={activeImage.src}
              alt={activeImage.alt}
              width={900}
              height={900}
              className="w-auto max-w-full max-h-[70vh] object-contain object-position-center rounded-xl border border-white/20 shadow-2xl"
              priority
            />
            <button
              type="button"
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 opacity-50 hover:opacity-100 transition-all"
              onClick={() => navigateLightbox(1)}
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
              <h3 id="lightbox-title" className="text-white text-lg font-medium">
                {activeImage.caption}
              </h3>
              <button
                type="button"
                className="mt-4 text-sm text-white/70 underline underline-offset-4 hover:text-white"
                onClick={closeLightbox}
              >
                Close gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
