export type GalleryImage = {
  id: string
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

/*
 * Gallery assets — real school photographs.
 *
 * Save the supplied photographs into public/images/florem/ using the filenames
 * below. The alt text describes each scene; no children's names or personal
 * information are included.
 *
 * Image-to-file mapping (from the supplied photos):
 *   gallery-1.jpg  -> featured in School Life and included in the gallery
 *   gallery-2.jpg  -> boy and girl (supplied photo 2)
 *   gallery-3.jpg  -> two pupils portrait (supplied photo 3)
 *   gallery-4.jpg  -> school community with Nigerian flags (supplied photo 4)
 *   gallery-5.jpg  -> classroom / learning environment (supplied photo 5)
 *   gallery-6.jpg  -> large group with teacher (supplied photo 6)
 *
 * The logo (supplied photo 7) -> logo.jpg
 * The full flyer (supplied photo 8) -> flyer.jpg  [reference only, not used as hero]
 * The promotional collage (supplied photo 9) is intentionally NOT used,
 * per the rule not to substitute a collage for individual photographs.
 */
export const galleryImages: GalleryImage[] = [
  {
    id: 'gallery-1',
    src: '/images/florem/gallery-1.jpg',
    alt: 'Two FLOREM pupils sharing a happy moment at school',
    width: 514,
    height: 266,
    caption: 'A joyful moment at FLOREM',
  },
  {
    id: 'gallery-2',
    src: '/images/florem/gallery-2.jpg',
    alt: 'FLOREM school community — a boy and a girl learning together',
    width: 505,
    height: 266,
    caption: 'Learning and growing together',
  },
  {
    id: 'gallery-3',
    src: '/images/florem/gallery-3.jpg',
    alt: 'FLOREM school community — two pupils in uniform portrait',
    width: 511,
    height: 266,
    caption: 'Everyday moments at FLOREM',
  },
  {
    id: 'gallery-4',
    src: '/images/florem/gallery-4.jpg',
    alt: 'FLOREM school community — children waving Nigerian flags outdoors',
    width: 823,
    height: 315,
    caption: 'Everyday moments at FLOREM',
  },
  {
    id: 'gallery-5',
    src: '/images/florem/gallery-5.jpg',
    alt: 'FLOREM school community — children seated in class with a teacher',
    width: 710,
    height: 315,
    caption: 'FLOREM school community',
  },
  {
    id: 'gallery-6',
    src: '/images/florem/gallery-6.jpg',
    alt: 'FLOREM school community — large group photo with teacher and pupils',
    width: 555,
    height: 436,
    caption: 'Learning and growing together',
  },
]

export const schoolLifeFeature: GalleryImage = {
  id: 'school-life-feature',
  src: '/images/florem/gallery-1.jpg',
  alt: 'Two FLOREM pupils sharing a happy moment at school',
  width: 514,
  height: 266,
  caption: 'A joyful moment at FLOREM',
}

export const environmentImages = [
  {
    id: 'env-main',
    src: '/images/florem/env-main.jpg',
    alt: 'FLOREM learning environment — children seated in class with a teacher',
    size: 'large' as const,
  },
  {
    id: 'env-side-1',
    src: '/images/florem/env-side-1.jpg',
    alt: 'FLOREM learning environment — children waving Nigerian flags outdoors',
    size: 'small' as const,
  },
  {
    id: 'env-side-2',
    src: '/images/florem/env-side-2.jpg',
    alt: 'FLOREM learning environment — pupil in uniform portrait',
    size: 'small' as const,
  },
]
