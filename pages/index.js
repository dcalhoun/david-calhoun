import About from '../components/About'
import Analytics from '../containers/Analytics'
import DarkMode from '../containers/DarkMode'
import Layout from '../components/Layout'
import Projects from '../components/Projects'

export default props => (
  <Analytics>
    <DarkMode>
      <Layout>
        <About />
        <Projects />
      </Layout>
    </DarkMode>
  </Analytics>
)
