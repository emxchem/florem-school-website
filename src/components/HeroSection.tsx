import { SchoolImage } from './ui/image'
import { Button } from './ui/button'
import { paths } from '../data/school'

export function HeroSection() {
  return (
    <section id="hero" className="relative bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-16 sm:py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="lg:pr-8">
            <p className="mb-6 block text-sm font-semibold tracking-wider text-primary uppercase">
              FLOREM Nursery &amp; Primary School
            </p>
            <h1 className="mb-6">Where Little Beginnings Blossom Into Bright Futures.</h1>
            <p className="mb-8 max-w-lg text-lg text-text">
              At FLOREM Nursery & Primary School, we provide a caring environment where children
              can explore, learn, build confidence, and develop a love for learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button as="a" href="#contact" variant="primary" size="lg">
                Enquire About Admission
              </Button>
              <Button as="a" href="#about" variant="outline" size="lg">
                Discover Our School
              </Button>
            </div>
            <p className="mt-10 text-lg italic text-muted">Raising Flourishing Leaders</p>
          </div>

          <div className="relative rounded-2xl border border-white/70 shadow-xl overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-72 h-72 bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="relative aspect-[3/2] max-h-[640px] w-full overflow-hidden rounded-[24px] border border-white/80 bg-white/20">
              <SchoolImage
                src={paths.hero}
                alt="Placeholder: hero photograph of the FLOREM school community — genuine school photograph to be supplied"
                width={900}
                height={600}
                priority
                className="w-full h-full object-cover object-position-center"
              />
            </div>
            <div className="absolute left-6 bottom-6">
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/90 px-4 py-2 text-sm font-semibold text-forest shadow-sm border border-white/60">
                A caring place to learn and grow
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
