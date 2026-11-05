import { Button } from './ui/button'
import { SectionContainer } from './ui/section-container'
import { SchoolImage } from './ui/image'
import { schoolLifeFeature } from '../data/gallery'

export function LearningEnvironment() {
  return (
    <section id="environment" className="bg-white py-16 sm:py-20 lg:py-24">
      <SectionContainer className="w-[92%] max-w-[1440px] px-0">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-purple">
              LIFE AT FLOREM
            </p>
            <h2 className="mb-5 text-3xl sm:text-4xl">
              A joyful place to learn and belong
            </h2>
            <p className="mb-7 max-w-xl text-base leading-relaxed text-body sm:text-lg">
              Each day brings new discoveries, caring guidance and opportunities to build friendships.
              At FLOREM, children are encouraged to explore and grow with confidence.
            </p>
            <Button as="a" href="#school-life" variant="primary" size="md">
              Explore the school gallery
            </Button>
          </div>
          <SchoolImage
            src={schoolLifeFeature.src}
            alt={schoolLifeFeature.alt}
            width={schoolLifeFeature.width}
            height={schoolLifeFeature.height}
            className="school-life-feature w-full rounded-xl border border-border/60 shadow-md lg:col-span-7"
          />
        </div>
      </SectionContainer>
    </section>
  )
}
