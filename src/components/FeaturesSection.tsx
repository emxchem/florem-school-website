import { SectionContainer } from './ui/section-container'
import { SectionHeading } from './ui/section-heading'
import { ShieldCheck, Home, Leaf, Book, Video } from 'lucide-react'

const features = [
  {
    id: 'bilingual',
    icon: <ShieldCheck size={20} strokeWidth={2} />,
    title: 'Bilingual Staff',
    body:
      "FLOREM advertises bilingual staff on its team, supporting children and families in more than one language. Please contact the school to confirm which languages are spoken.",
  },
  {
    id: 'home-setting',
    icon: <Home size={20} strokeWidth={2} />,
    title: 'A Home-Like Setting',
    body:
      'The school advertises a home-setting environment — a warm, familiar space where children can settle in comfortably and feel cared for.',
  },
  {
    id: 'eco-friendly',
    icon: <Leaf size={20} strokeWidth={2} />,
    title: 'Eco-Friendly Environment',
    body:
      "FLOREM advertises an eco-friendly environment that encourages children to explore, play, and develop a respect for the world around them.",
  },
  {
    id: 'british-curriculum',
    icon: <Book size={20} strokeWidth={2} />,
    title: 'British Curriculum',
    body:
      "The school's promotional material mentions a British curriculum. Contact the school for details about the curriculum and the learning stages to which it applies. No accreditation or recognition is claimed here.",
  },
  {
    id: 'cctv',
    icon: <Video size={20} strokeWidth={2} />,
    title: 'CCTV Surveillance',
    body:
      "FLOREM advertises 24-hour CCTV surveillance as a precaution across the school. This is a stated safety measure, not a guarantee of absolute security.",
  },
] as const

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-24 sm:py-32 border-y border-white/60">
      <SectionContainer narrow>
        <SectionHeading
          eyebrow="Why Choose FLOREM"
          heading="Care That Helps Children Flourish"
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-2xl border border-muted bg-white p-8 hover:border-primary/60 transition-colors"
            >
              <div className="mb-6 rounded-lg bg-primary/10 p-3 text-primary">{feature.icon}</div>
              <h3 className="mb-3 text-lg">{feature.title}</h3>
              <p className="text-sm text-muted">{feature.body}</p>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
