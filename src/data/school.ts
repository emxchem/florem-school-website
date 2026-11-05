/*
 * Centralized school configuration.
 *
 * The school email has been confirmed by the school owner.
 * The email address is shown below and can be used for contact.
 */
export const school = {
  name: 'FLOREM Nursery & Primary School',
  tagline: 'Raising Flourishing Leaders',
  address: 'A40 Cajah Estate, Orozo, Abuja, Nigeria.',
  phone: '09130000504',
  phoneLink: '09130000504',
  email: 'Flore mdaycare@gmail.com',
  emailConfirmed: true,
  description:
    'At FLOREM Nursery & Primary School, we provide a caring environment where children can explore, learn, build confidence, and develop a love for learning.',
} as const

export const brand = {
  primary: '#C49A3A',     /* Gold accent */
  forest: '#F1F2F4',      /* Secondary background */
  secondary: '#D1D5DB',   /* Borders */
  mint: '#F8F9FA',        /* Near-white */
  cream: '#FFFDF5',
  white: '#FFFFFF',
  text: '#292D32',        /* Main headings */
  body: '#4B5563',        /* Body text */
  muted: '#6B7280',       /* Muted text */
  gold: '#C49A3A',        /* Gold accent */
} as const

export const paths = {
  logo: '/images/florem/florem-official-logo.jpeg',
  favicon: '/images/florem/florem-official-logo.jpeg',
  hero: '/images/florem/hero.jpg',
  about: '/images/florem/about.jpg',
  community: '/images/florem/community.jpg',
  flyer: '/images/florem/flyer.jpg',
} as const
