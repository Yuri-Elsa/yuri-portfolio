import { LightboxProvider } from './hooks/useLightbox'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useActiveNav } from './hooks/useActiveNav'

import Background from './components/Background/Background'
import Navbar from './components/Navbar/Navbar'
import Lightbox from './components/Lightbox/Lightbox'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Organizations from './components/Organizations/Organizations'
import Certifications from './components/Certifications/Certifications'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function PortfolioApp() {
  useScrollReveal()
  useActiveNav()

  return (
    <>
      <Background />
      <Lightbox />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Organizations />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <LightboxProvider>
      <PortfolioApp />
    </LightboxProvider>
  )
}
