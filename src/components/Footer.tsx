import { SectionContainer } from './ui/section-container'
import { MapPin, Phone } from 'lucide-react'
import { school, paths } from '../data/school'
import { programs } from '../data/programs'

const NAV_LINKS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#school-life', label: 'School Life' },
  { href: '#admissions', label: 'Admissions' },
  { href: '#contact', label: 'Contact' },
] as const

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  const year = CURRENT_YEAR

  return (
    <footer className="bg-forest text-white border-t border-white/10">
      <SectionContainer className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={paths.logo}
                alt="FLOREM Nursery & Primary School logo"
                width="360"
                height="110"
                loading="eager"
                className="h-12 w-auto object-contain mb-2"
              />
            </div>
            <p className="text-xl font-heading font-bold text-white tracking-tight">
              FLOREM Nursery &amp; Primary School
            </p>
            <p className="text-lg italic text-gold">Where Care Flows</p>
            <p className="text-sm text-white/70">
              A caring nursery and primary school in Orozo, Abuja, Nigeria.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
              Programs
            </h3>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.id}>
                  <a
                    href="#programs"
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {program.name}
                    {program.age && (
                      <span className="text-xs text-white/50"> ({program.age})</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5 text-gold" />
                <span>{school.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-gold" />
                <a
                  href={`tel:${school.phoneLink}`}
                  className="hover:text-gold transition-colors"
                >
                  {school.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 text-gold" aria-hidden="true">✉</span>
                <span className="text-xs text-white/50">
                  Email confirmation pending — contact the school directly.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-white/50">
          <p>
            © {year} FLOREM Nursery & Primary School. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Demonstration website — images, email address, and other details
            subject to confirmation by the school owner before launch.
          </p>
        </div>
      </SectionContainer>
    </footer>
  )
}
