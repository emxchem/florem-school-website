import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ProgramsSection } from './components/ProgramsSection'
import { FeaturesSection } from './components/FeaturesSection'
import { LearningEnvironment } from './components/LearningEnvironment'
import { GallerySection } from './components/GallerySection'
import { AdmissionsSection } from './components/AdmissionsSection'
import { FAQSection } from './components/FAQSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <FeaturesSection />
        <LearningEnvironment />
        <GallerySection />
        <AdmissionsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/2349130000504?text=Hello%20FLOREM%20Nursery%20&%20Primary%20School.%20I%20visited%20your%20website%20and%20would%20like%20to%20make%20an%20enquiry.%20Please%20assist%20me."
        className="fixed bottom-4 right-4 z-50 rounded-full bg-white/90 hover:bg-white/95 p-3 shadow-lg transition-colors transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 aural:hidden"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp FLOREM School"
      >
        <svg
          className="w-5 h-5 text-muted"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M22.12 15.3a1.9 1.9 0 0 1-1.417 1.417l-1.996 1.996a2.15 2.15 0 0 1-1.968 0L9.257 18.57a2.15 2.15 0 0 1-1.967.083l-1.997-1.996a1.9 1.9 0 0 1-1.416-1.416l1.996 1.996a2.15 2.15 0 0 1 1.968 0l1.997 1.996a1.9 1.9 0 0 1 .083 1.417zM4.96 11.23a1.56 1.56 0 0 1 0-2.22 1.56 1.56 0 0 1 2.22 0l9.143 9.142a1.56 1.56 0 0 1-2.337 2.328l-9.142-9.142a1.56 1.56 0 0 1 0-2.22zM12 2.5a9.5 9.5 0 1 0 9.5 9.5A9.5 9.5 0 0 0 12 2.5zM12 4.47a8.49 8.49 0 1 1 0 8.48 8.49 8.49 0 0 1 0-8.48z" />
        </svg>
        <span className="sr-only">WhatsApp FLOREM School</span>
      </a>
    </>
  )
}