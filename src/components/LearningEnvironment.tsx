import { SectionContainer } from './ui/section-container'
import { SectionHeading } from './ui/section-heading'
import { SchoolImage } from './ui/image'
import { environmentImages } from '../data/gallery'

export function LearningEnvironment() {
  return (
    <section id="environment" className="bg-white py-24 sm:py-32 border-y border-white/60">
      <SectionContainer>
        <SectionHeading
          eyebrow="Learning Environment"
          heading="Spaces to Learn, Play, and Grow"
          support="Discover a welcoming environment where children can learn, interact, explore, and enjoy meaningful experiences."
        />

        <div className="mt-16 lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4 space-y-8">
            <p className="text-lg text-text">
              FLOREM's environment is designed around the children in its care — a place where
              they can move freely, play safely, and feel at home while they learn.
            </p>
            <div className="rounded-xl border border-gold/20 bg-gold/10 p-6">
              <h3 className="mb-2 text-lg">A caring setting for every age</h3>
              <p className="text-sm text-muted">
                From creche to primary, the spaces at FLOREM are arranged to support each
                stage of early development.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 gap-8">
            <div className="col-span-2 lg:col-span-2 row-span-2 rounded-2xl border border-white/70 shadow-lg overflow-hidden bg-white/30">
              <div className="relative aspect-[10/7] max-h-[420px] w-full overflow-hidden rounded-[24px] border border-white/60 bg-white/10">
                <SchoolImage
                  src={environmentImages[0].src}
                  alt={environmentImages[0].alt}
                  width={600}
                  height={420}
                  className="w-full h-full object-cover object-position-center"
                />
              </div>
            </div>
            <div className="rounded-2xl border border-white/70 shadow-lg overflow-hidden bg-white/30">
              <div className="relative aspect-[5/4] max-h-[240px] w-full overflow-hidden rounded-[24px] border border-white/60 bg-white/10">
                <SchoolImage
                  src={environmentImages[1].src}
                  alt={environmentImages[1].alt}
                  width={300}
                  height={240}
                  className="w-full h-full object-cover object-position-center"
                />
              </div>
            </div>
            <div className="rounded-2xl border border-white/70 shadow-lg overflow-hidden bg-white/30">
              <div className="relative aspect-[5/4] max-h-[240px] w-full overflow-hidden rounded-[24px] border border-white/60 bg-white/10">
                <SchoolImage
                  src={environmentImages[2].src}
                  alt={environmentImages[2].alt}
                  width={300}
                  height={240}
                  className="w-full h-full object-cover object-position-center"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
