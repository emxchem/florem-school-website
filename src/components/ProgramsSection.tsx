import { BookOpen, Clock, Users, Baby, GraduationCap } from 'lucide-react'
import { SectionContainer } from './ui/section-container'
import { SectionHeading } from './ui/section-heading'
import { Card } from './ui/card'
import { programs } from '../data/programs'

const ICONS: Record<string, React.ElementType> = {
  baby: Baby,
  book: BookOpen,
  graduation: GraduationCap,
  users: Users,
  clock: Clock,
}

export function ProgramsSection() {
  return (
    <section id="programs" className="bg-cream py-24 sm:py-32 border-y border-white/60">
      <SectionContainer>
        <SectionHeading
          eyebrow="Programs"
          heading="Learning at Every Little Step"
          support="Explore the care and learning options offered by FLOREM."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => {
            const Icon = ICONS[program.icon]
            return (
              <Card key={program.id} padded>
                <div className="flex items-center gap-3 mb-4">
                  <div className="rounded-lg bg-primary/10 p-3 text-primary">
                    <Icon size={20} />
                  </div>
                  {program.age && (
                    <span className="ml-auto text-[11px] font-semibold tracking-wider uppercase rounded-full bg-forest/10 px-2.5 py-0.5 text-forest">
                      {program.age}
                    </span>
                  )}
                </div>
                <h3 className="mb-2 text-lg">{program.name}</h3>
                <p className="mb-6 text-sm text-muted">{program.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  Enquire about this program <span aria-hidden="true">→</span>
                </a>
              </Card>
            )
          })}
        </div>
      </SectionContainer>
    </section>
  )
}
