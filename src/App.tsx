import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { LenisProvider } from './components/effects/LenisProvider'
import { GridBackground } from './components/effects/GridBackground'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { TechStack } from './components/sections/TechStack'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'

function App() {
  return (
    <>
      <LenisProvider />
      <GridBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
