import { useCallback, useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { paths } from '../data/school'

const NAV_ITEMS = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#programs', label: 'Programs' },
  { href: '#school-life', label: 'School Life' },
  { href: '#admissions', label: 'Admissions' },
  { href: '#contact', label: 'Contact' },
] as const

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState<string | null>('hero')
  const headerRef = useRef<HTMLElement>(null)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Track which section is in view to highlight the active navigation link.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) {
          setActiveId(visible.target.id.replace('#', ''))
        }
      },
      { rootMargin: '-96px 0% -75% 0%', threshold: 0.05 },
    )

    document.querySelectorAll('section[id]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const toggleMenu = () => setMenuOpen((open) => !open)
  const closeMenu = () => setMenuOpen(false)

  const handleKeydown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') closeMenu()
  }

  return (
    <>
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only fixed top-4 left-4 z-50 bg-forest text-white px-4 py-2 rounded-xl transition-transform -translate-y-full focus:translate-y-0"
      >
        Skip to main content
      </a>

      <header
        ref={headerRef}
        className={`
          sticky top-0 z-40 transition-colors duration-300
          ${scrolled
            ? 'bg-white/50 backdrop-blur-md border-b border-white/40 shadow-sm'
            : 'bg-transparent'}
        `}
      >
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <div className="flex items-center gap-3">
              <a
                href="#hero"
                className="flex items-center gap-2"
                aria-label="FLOREM Nursery & Primary School homepage"
              >
                <img
                  src={paths.logo}
                  alt="FLOREM Nursery & Primary School logo"
                  width="360"
                  height="110"
                  loading="eager"
                  className="h-14 w-auto object-contain"
                />
                <span className="hidden sm:block font-heading text-2xl font-bold text-forest tracking-tight">
                  FLOREM Nursery &amp; Primary School
                </span>
              </a>
            </div>

            <nav className="hidden lg:flex items-baseline gap-8 text-sm font-medium">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`
                    text-text hover:text-primary transition-colors
                    ${
                      activeId === item.href.slice(1)
                        ? 'text-forest underline underline-offset-4'
                        : ''
                    }
                  `}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="hidden sm:inline-flex"
                onClick={closeMenu}
              >
                <Button variant="outline" size="sm">
                  Enquire About Admission
                </Button>
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a href="#contact" className="hidden sm:inline-flex">
                <Button size="sm">Enquire About Admission</Button>
              </a>
              <button
                type="button"
                className="lg:hidden p-2 rounded-lg text-text hover:bg-mint transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={toggleMenu}
                onKeyDown={handleKeydown}
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu — rendered in the page flow so it never traps content behind an overlay */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 border-t border-white/60 bg-white/90 backdrop-blur-md pb-6"
          >
            <div className="flex flex-col gap-2 pt-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-text rounded-xl hover:bg-mint hover:text-forest transition-colors"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mx-auto mt-4 block text-center px-6 py-3 text-base font-semibold text-white bg-primary rounded-xl hover:bg-forest transition-colors"
                onClick={closeMenu}
              >
                Enquire About Admission
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
