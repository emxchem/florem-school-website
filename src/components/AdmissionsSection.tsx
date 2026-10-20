import { SectionContainer } from './ui/section-container'
import { SectionHeading } from './ui/section-heading'
import { Button } from './ui/button'
import { Phone } from 'lucide-react'
import { school } from '../data/school'

export function AdmissionsSection() {
  return (
    <section id="admissions" className="bg-forest text-white py-24 sm:py-32 border-y border-white/10">
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary/5 -z-10" />
        <SectionContainer narrow>
          <SectionHeading
            eyebrow="Admissions"
            heading="Give Your Child a Caring Place to Begin."
            support={
              "Interested in FLOREM Nursery & Primary School? Get in touch to learn more about our programs, admission requirements, and the next steps for your family."
            }
          />

          <div className="mt-16 flex flex-col sm:flex-row gap-6 items-center justify-center">
            <Button as="a" href="#contact" variant="secondary" size="lg" className="text-white">
              Start an Enquiry
            </Button>
            <a
              href={`tel:${school.phoneLink}`}
              className="flex items-center gap-2 text-lg font-medium text-white underline underline-offset-4 hover:opacity-90 transition-opacity"
            >
              <Phone size={22} strokeWidth={2} /> Call the School: {school.phone}
            </a>
          </div>

          <p className="mt-12 text-sm text-white/60 text-center max-w-xs mx-auto">
            Admission availability is confirmed by the school directly — please get in touch to
            check current openings before applying.
          </p>
        </SectionContainer>
      </div>
    </section>
  )
}
