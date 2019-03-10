import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/homepage/intro";
import { Heading2 } from "../Styles/elements/Headings";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Intro />
    {/* About Me Section */}

    <section>
      <Heading2>About Me</Heading2>
      <p>I am passionate about making things better; better for the user, for the business and for the world. I love problem solving, researching and testing every solution until we find what’s right. Whether it’s through visual design, UX, development or a combination of disciplines, my ultimate goal is always to build something meaningful.</p>
      <p>I’m the type of person who loves finding ways to improve and optimize everything I do. I believe in always having a student mindset so I’m constantly learning, listening and reading about the things I enjoy. From my daily routines, workouts and eating habits to how I organize my desk, task lists, and personal journal, I’ve tried 10 different ways to do them to find what works best for me.</p>
      <p>When I set out to do something, I get it done. I have 1, 5, 10 year goals with 90 day objectives that I review weekly, as well as daily todo lists to help keep me on track. I also know my flaws and shortcomings well enough to set up guardrails against them.</p>
      <p>Looking for my work history? <a href="https://www.frankluongo.com/wp-content/uploads/FrankLuongoResume.pdf" target="_blank" rel="noopener noreferrer">Check out My Resumé</a></p>
    </section>

    {/* My work */}

    <section>
      <Heading2>My Work</Heading2>
      <p>I’ve had the pleasure of working with some great companies and teams. Check out some of my recent projects below.</p>
    </section>
  </Layout>
)

export default IndexPage
