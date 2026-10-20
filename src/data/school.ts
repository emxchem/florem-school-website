/*
 * Centralized school configuration.
 *
 * NOTE ON EMAIL: The original promotional flyer displays an address resembling
 * "Flore mdaycare@gmail.com". The exact spelling is ambiguous and has NOT been
 * confirmed by the school owner. The raw value is kept below exactly as it
 * appears in the flyer and is marked as unconfirmed. Do not use it as a
 * clickable mailto destination, and do not silently "correct" it, until the
 * school owner verifies it.
 */
export const school = {
  name: 'FLOREM Nursery & Primary School',
  tagline: 'Where Care Flows',
  address: 'A40 Cajah Estate, Orozo, Abuja, Nigeria.',
  phone: '09130000504',
  phoneLink: '09130000504',
  email: 'Flore mdaycare@gmail.com',
  emailConfirmed: false,
  description:
    'At FLOREM Nursery & Primary School, we provide a caring environment where children can explore, learn, build confidence, and develop a love for learning.',
} as const

export const brand = {
  primary: '#79B832',
  forest: '#075B35',
  secondary: '#2F9650',
  mint: '#EEF7E9',
  cream: '#FFFDF5',
  white: '#FFFFFF',
  text: '#25352D',
  muted: '#69766D',
  gold: '#E7C66B',
} as const

export const paths = {
  logo: '/images/florem/logo.jpg',
  favicon: '/images/florem/logo.jpg',
  hero: '/images/florem/hero.jpg',
  about: '/images/florem/about.jpg',
  community: '/images/florem/community.jpg',
  flyer: '/images/florem/flyer.jpg',
} as const
