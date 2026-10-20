import { SectionContainer } from './ui/section-container'
import { SectionHeading } from './ui/section-heading'
import { SchoolImage } from './ui/image'
import { paths } from '../data/school'

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32 border-y border-white/60">
      <SectionContainer>
        <SectionHeading
          eyebrow="About FLOREM"
          heading="A Little Place for Big Discoveries"
          support={
            "Every child deserves a place where they feel cared for, encouraged, and ready to discover the world around them. FLOREM brings care and learning together in an environment designed to support children's early development and growing confidence."
          }
          tagline="Where Care Flows"
        />

        <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="space-y-8">
            <p className="text-lg text-text">
              We believe early learning should feel safe, joyful, and full of discovery. At
              FLOREM Nursery & Primary School in Orozo, Abuja, children are welcomed into a
              caring setting where they can grow at their own pace.
            </p>
            <p className="text-lg text-text">
              From the littlest babies in creche to confident primary pupils, every stage is
              designed to nurture curiosity, build confidence, and lay the foundations for a
              lifetime of learning.
            </p>
            <div className="rounded-2xl border border-primary/20 bg-mint/40 p-6">
              <p className="font-semibold text-forest">
                <span className="block">"Where Care Flows"</span>
                <span className="text-sm text-muted mt-1">Our tagline</span>
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/70 shadow-lg overflow-hidden">
            <SchoolImage
              src={paths.about}
              alt="Placeholder: about photograph showing the FLOREM learning environment — genuine school photograph to be supplied"
              width={700}
              height={520}
              className="w-full h-[460px] object-cover object-position-center"
            />
            <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center text-white text-xs font-bold shadow-lg rotate-6">
              +
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
