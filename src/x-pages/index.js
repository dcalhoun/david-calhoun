import About from "../components/About";
import Analytics from "../components/Analytics";
import DarkMode from "../components/DarkMode";
import Layout from "../components/Layout";
import Projects from "../components/Projects";

export default props => (
  <Analytics>
    <DarkMode>
      <Layout>
        <About />
        <Projects />
      </Layout>
    </DarkMode>
  </Analytics>
);
