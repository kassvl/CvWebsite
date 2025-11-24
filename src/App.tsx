import Layout from './components/layout/Layout'
import { HomeSection } from './components/sections/HomeSection'
import { AboutSection } from './components/sections/AboutSection'
import { ProjectsSection } from './components/sections/CaseStudiesSection'
import { CoWorkSection } from './components/sections/CoWorkSection'

const App = () => (
  <Layout>
    <HomeSection />
    <AboutSection />
    <ProjectsSection />
    <CoWorkSection />
  </Layout>
  )

export default App
