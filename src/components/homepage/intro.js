import React from "react"
import styled from 'styled-components';
import myface from "../../images/alt-portrait.jpg"
import { Heading1, Heading2 } from "../../Styles/elements/Headings";
import { spacing } from "../../Styles/utilities/Variables";
import { above } from '../../Styles/utilities/Breakpoints';
import { Link } from "gatsby";

const Intro = () => {

  return (
    <ContentWrapper>
      <AboutMeImage />

    <div>
      <Heading1>Hi, I'm Frank Luongo</Heading1>
      <Heading2>I create usable and exciting digital solutions for brands of any size.</Heading2>
      <p>I’m a multi-disciplinary designer and developer working out of Philadelphia. I believe in making companies of any size stand out with clean, intelligent design and hand-crafted, innovative web experiences.</p>

      <div>
        <Heading2>Contact Me!</Heading2>
        <a href="mailto:frank@frankluongo.com">frank@frankluongo.com</a>
      </div>
      <div>
        <Heading2>Learn More About Me and My Work</Heading2>
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

  </ContentWrapper>
  )
}

const ContentWrapper = styled.section`
  display: grid;
  grid-gap: ${spacing.xsmall};
  grid-template-columns: 1fr;

  ${above.small`
    grid-gap: ${spacing.small};
    grid-template-columns: 2fr 1fr;
  `}
`;

const AboutMeImage = styled.figure`
  padding-top: 100%;

  background-image: url(${myface});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${above.small`
    padding-top: 0;
    height: 100%;
    order: 1;
  `}
`;

export default Intro;
