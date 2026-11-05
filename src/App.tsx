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

import { FaWhatsapp } from 'react-icons/fa6'

const WHATSAPP_MESSAGE =
  'Hello FLOREM Nursery & Primary School. I visited your website and would like to make an enquiry. Please assist me.'

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
        href={`https://wa.me/2349130000504?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#1DA851] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with FLOREM Nursery & Primary School on WhatsApp"
      >
        <FaWhatsapp className="h-8 w-8 text-white" aria-hidden="true" />
        <span className="sr-only">WhatsApp FLOREM School</span>
      </a>
    </>
  )
}