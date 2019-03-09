import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby";
import myface from "../images/alt-portrait.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* Intro Section */}
    <section>

      <div>
        <h1>Hi, I'm Frank Luongo</h1>
        <h2>I create usable and exciting digital solutions for brands of any size.</h2>
        <p>I’m a multi-disciplinary designer and developer working out of Philadelphia. I believe in making companies of any size stand out with clean, intelligent design and hand-crafted, innovative web experiences.</p>

        <div>
          <h2>Contact Me!</h2>
          <a href="mailto:frank@frankluongo.com">frank@frankluongo.com</a>
        </div>
        <div>
          <h2>Learn More About Me and My Work</h2>
          <ul>
            <li>
              <Link to="/about-me">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/my-projects">
                My Work
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <img src={myface} alt="Frank Luongo" />
      </div>

    </section>

    {/* About Me Section */}

    <section>
      <h2>About Me</h2>
      <p>I am passionate about making things better; better for the user, for the business and for the world. I love problem solving, researching and testing every solution until we find what’s right. Whether it’s through visual design, UX, development or a combination of disciplines, my ultimate goal is always to build something meaningful.</p>
      <p>I’m the type of person who loves finding ways to improve and optimize everything I do. I believe in always having a student mindset so I’m constantly learning, listening and reading about the things I enjoy. From my daily routines, workouts and eating habits to how I organize my desk, task lists, and personal journal, I’ve tried 10 different ways to do them to find what works best for me.</p>
      <p>When I set out to do something, I get it done. I have 1, 5, 10 year goals with 90 day objectives that I review weekly, as well as daily todo lists to help keep me on track. I also know my flaws and shortcomings well enough to set up guardrails against them.</p>
      <p>Looking for my work history? <a href="https://www.frankluongo.com/wp-content/uploads/FrankLuongoResume.pdf" target="_blank" rel="noopener noreferrer">Check out My Resumé</a></p>
    </section>

    {/* My work */}

    <section>
      <h2>My Work</h2>
      <p>I’ve had the pleasure of working with some great companies and teams. Check out some of my recent projects below.</p>
    </section>
  </Layout>
)

export default IndexPage
