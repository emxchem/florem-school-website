export type FAQ = {
  id: string
  question: string
  answer: string
}

/*
 * Frequently asked questions.
 *
 * Answers are based only on information supplied by the school. Nothing is
 * invented: no fees, deadlines, accreditation, or operating hours.
 */
export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What age groups does FLOREM cater to?',
    answer:
      "The school's advertised offerings include creche for babies aged 1 month to 1 year, playgroup for children aged 1–3 years, nursery, and primary. Please contact the school to confirm current admission arrangements.",
  },
  {
    id: 'faq-2',
    question: 'What programs does the school offer?',
    answer:
      'FLOREM offers creche, playgroup, nursery, primary, child care training, and after-school care. Contact the school for details about each programme.',
  },
  {
    id: 'faq-3',
    question: 'Does FLOREM offer after-school care?',
    answer:
      'Yes. After-school care is advertised as an additional care option for families seeking support beyond regular school hours. Contact the school for availability and details.',
  },
  {
    id: 'faq-4',
    question: 'What curriculum does the school advertise?',
    answer:
      "FLOREM's promotional material mentions a British curriculum. Contact the school for details about the curriculum and the learning stages to which it applies.",
  },
  {
    id: 'faq-5',
    question: 'How can I enquire about admission?',
    answer:
      'You can use the enquiry form on this website or call 09130000504. The form is a demonstration and does not deliver messages until a backend is connected by the school.',
  },
  {
    id: 'faq-6',
    question: 'Where is FLOREM located?',
    answer:
      'The address provided by the school is A40 Cajah Estate, Orozo, Abuja, Nigeria.',
  },
]
