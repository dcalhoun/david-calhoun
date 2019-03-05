import About from "../components/About";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import React from "react";
import SEO from "../components/SEO";

function Index(props) {
  return (
    <Layout>
      <SEO title="" />
      <About />
      <Projects />
    </Layout>
  );
}

export default Index;
