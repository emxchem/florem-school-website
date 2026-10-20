import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { SectionContainer } from './ui/section-container'
import { SectionHeading } from './ui/section-heading'
import { faqs } from '../data/faq'

export function FAQSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const isExpanded = (id: string): boolean => expandedId === id
  const toggle = (id: string): void => {
    setExpandedId((current) => (current === id ? null : id))
  }

  return (
    <section id="faq" className="bg-white py-24 sm:py-32 border-y border-white/60">
      <SectionContainer>
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          heading="Frequently Asked Questions"
        />

        <div className="mt-16 grid gap-4 sm:max-w-3xl sm:mx-auto">
          {faqs.map((faq) => {
            const expanded = isExpanded(faq.id)
            return (
              <div key={faq.id} className="rounded-xl border border-muted">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-4 text-left text-forest font-semibold text-lg transition-all"
                  aria-expanded={expanded}
                  aria-controls={`faq-content-${faq.id}`}
                  onClick={() => toggle(faq.id)}
                >
                  {faq.question}
                  {expanded ? <ChevronUp size={20} strokeWidth={2} /> : <ChevronDown size={20} strokeWidth={2} />}
                </button>
                <div
                  id={`faq-content-${faq.id}`}
                  className="overflow-hidden transition-all duration-300 ease-out"
                  aria-hidden={!expanded}
                  style={{ maxHeight: expanded ? 240 : 0, opacity: expanded ? 1 : 0 }}
                >
                  <div className="px-6 pb-4 pt-2 text-sm text-muted">
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </SectionContainer>
    </section>
  )
}
