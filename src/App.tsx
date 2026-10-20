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
    </>
  )
}
