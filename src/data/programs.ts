export type ProgramIcon = 'baby' | 'book' | 'graduation' | 'users' | 'clock'

export type Program = {
  id: string
  name: string
  age?: string
  description: string
  icon: ProgramIcon
}

/*
 * Programs advertised by FLOREM Nursery & Primary School.
 *
 * These descriptions are proposed marketing copy based on the programmes listed
 * in the school's promotional material. They are not verified details of the
 * school's curriculum. No fees, deadlines, or availability are stated.
 */
export const programs: Program[] = [
  {
    id: 'creche',
    name: 'Creche',
    age: '1 month – 1 year',
    description:
      'A nurturing care environment for babies during their earliest stage of development.',
    icon: 'baby',
  },
  {
    id: 'playgroup',
    name: 'Playgroup',
    age: '1–3 years',
    description:
      'An early learning experience that encourages curiosity, play, interaction, and discovery.',
    icon: 'users',
  },
  {
    id: 'nursery',
    name: 'Nursery',
    description:
      'An engaging early-years environment where children can explore foundational learning through age-appropriate activities.',
    icon: 'book',
  },
  {
    id: 'primary',
    name: 'Primary',
    description:
      'A learning stage focused on building foundational knowledge, confidence, and positive learning habits.',
    icon: 'graduation',
  },
  {
    id: 'child-care-training',
    name: 'Child Care Training',
    description:
      "Explore FLOREM's advertised child care training offering. Contact the school for information about the training format and enrollment.",
    icon: 'users',
  },
  {
    id: 'after-school-care',
    name: 'After-School Care',
    description:
      'An additional care option for families seeking support beyond regular school hours. Contact the school for availability and details.',
    icon: 'clock',
  },
]
