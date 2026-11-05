import { useCallback, useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionContainer } from './ui/section-container'
import { SectionHeading } from './ui/section-heading'
import { SchoolImage } from './ui/image'
import { galleryImages } from '../data/gallery'

export function GallerySection() {
  const [openId, setOpenId] = useState<string | null>(null)
  const activeImage = galleryImages.find((img) => img.id === openId)
  const isOpen = openId !== null
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const closeLightbox = useCallback(() => setOpenId(null), [])

  const navigateLightbox = useCallback((direction: 1 | -1) => {
    setOpenId((currentId) => {
      if (!currentId) return null
      const currentIndex = galleryImages.findIndex((image) => image.id === currentId)
      const nextIndex = (currentIndex + direction + galleryImages.length) % galleryImages.length
      return galleryImages[nextIndex]?.id ?? null
    })
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      triggerRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (!isOpen) return
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
  }, [isOpen, closeLightbox, navigateLightbox])

  const trapDialogFocus = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab') return
    const controls = Array.from(
      event.currentTarget.querySelectorAll<HTMLButtonElement>('button:not(:disabled)'),
    )
    const first = controls[0]
    const last = controls[controls.length - 1]
    if (!first || !last) return

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
  }

  return (
    <>
      <section id="school-life" className="border-y border-border bg-bg-secondary py-14 sm:py-16 lg:py-20">
        <SectionContainer className="w-[92%] max-w-[1440px] px-0">
          <SectionHeading
            eyebrow="SCHOOL LIFE AT FLOREM"
            heading="Moments That Make Us Flourish"
            support="Take a glimpse into our vibrant school community, where children learn, explore, build friendships and create memories every day."
          />

          <div className="school-gallery-grid" aria-label="School life gallery">
            {galleryImages.map((image) => (
                <button
                  key={image.id}
                  type="button"
                  className="school-gallery-card group rounded-xl border border-border/70 bg-white p-0 text-left shadow-sm transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
                  aria-label={`Open photo: ${image.caption ?? image.alt}`}
                  onClick={(event) => {
                    triggerRef.current = event.currentTarget
                    setOpenId(image.id)
                  }}
                >
                  <SchoolImage
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="school-gallery-frame w-full rounded-xl"
                    objectPosition="center"
                  />
                  {image.caption && (
                    <span className="block px-3 py-2.5 text-sm font-medium text-text">
                      {image.caption}
                    </span>
                  )}
                </button>
              ))}
          </div>
        </SectionContainer>
      </section>

      {/* Accessible lightbox */}
      {openId && activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-text/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          onClick={closeLightbox}
          onKeyDown={trapDialogFocus}
        >
          <div
            className="relative flex h-full w-full max-w-[1440px] flex-col items-center justify-center gap-3 px-12 py-12 sm:px-16"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="absolute right-0 top-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              onClick={closeLightbox}
              aria-label="Close gallery"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              onClick={() => navigateLightbox(-1)}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              width={activeImage.width}
              height={activeImage.height}
              loading="eager"
              decoding="async"
              className="h-auto max-h-[68vh] w-auto max-w-full rounded-xl border border-white/20 object-contain shadow-2xl"
            />
            <button
              type="button"
              className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              onClick={() => navigateLightbox(1)}
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <p id="lightbox-title" className="max-w-prose text-center text-sm font-medium text-white sm:text-base" aria-live="polite">
              {activeImage.caption ?? activeImage.alt}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
