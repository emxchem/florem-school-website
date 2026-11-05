import { SectionContainer } from './ui/section-container'
import { Mail, MapPin, Phone } from 'lucide-react'
import { school, paths } from '../data/school'
import { programs } from '../data/programs'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  const year = CURRENT_YEAR

  return (
    <footer className="site-footer bg-text text-white border-t border-white/10">
      <SectionContainer className="py-12 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src={paths.logo}
                alt="FLOREM Nursery & Primary School logo"
                width="360"
                height="110"
                loading="eager"
                className="h-24 w-auto object-contain mb-2"
              />
            </div>
            <p className="text-xl font-heading font-bold text-white tracking-tight">
              FLOREM Nursery &amp; Primary School
            </p>
            <p className="text-lg italic text-gold">Raising Flourishing Leaders</p>
            <p className="text-sm text-white/85">
              A caring nursery and primary school in Orozo, Abuja, Nigeria.
            </p>
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
                      <span className="text-xs text-white/75"> ({program.age})</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
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
              <li className="flex items-start gap-3">
                <Mail size={18} className="flex-shrink-0 text-gold" />
                <a href={`mailto:${school.email}`} className="break-all hover:text-gold transition-colors">
                  {school.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-white/75">
          <p>
            © {year} FLOREM Nursery & Primary School. All rights reserved.
          </p>
        </div>
      </SectionContainer>
    </footer>
  )
}
