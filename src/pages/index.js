import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Intro from "src/components/homepage/intro";
import AboutMe from "src/components/homepage/AboutMe";
import Projects from "src/components/homepage/Projects";
// import Listing from "../components/listing";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <Listing /> */}
    <Intro />
    <AboutMe />
    <Projects />
  </Layout>
)

export default IndexPage
