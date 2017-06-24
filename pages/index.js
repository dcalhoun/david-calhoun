import About from '../components/About'
import Layout from '../components/Layout'
import Projects from '../components/Projects'
import withColorCycle from '../containers/withColorCycle'

const ColorCycleLayout = withColorCycle(Layout)

export default (props) => (
  <ColorCycleLayout>
    <About />
    <Projects />
  </ColorCycleLayout>
)
