import { Layout } from './components/layout/Layout'
import { HomeSection, WhoAmISection } from './components/sections/HomeSection'
import { ProjectsSection } from './components/sections/CaseStudiesSection'
import { CoWorkSection } from './components/sections/CoWorkSection'
// Contact section intentionally removed per latest design

const App = () => (
  <Layout>
    <HomeSection />
    <WhoAmISection />
    <ProjectsSection />
    <CoWorkSection />
  </Layout>
  )

export default App
