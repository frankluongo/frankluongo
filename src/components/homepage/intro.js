import React from "react"
import styled from 'styled-components';
import myface from "../../images/alt-portrait.jpg"
import { Heading1, Heading2 } from "../../Styles/elements/Headings";
import { Paragraph } from "../../Styles/elements/Paragraphs";
import { spacing } from "../../Styles/utilities/Variables";
import { above } from '../../Styles/utilities/Breakpoints';

import { Container, Wrapper } from "../../Styles/elements/Container"

import ContactLink from 'src/components/global/ContactLink';

const Intro = () => {

  return (
    <Wrapper>
      <ContentContainer>
        <AboutMeImage />

        <div>
          <Heading1 paddingBottom="xxsmall">Hi, I'm Frank Luongo</Heading1>
          <Heading2 paddingBottom="xxsmall">I create usable and exciting digital solutions for brands of any size.</Heading2>
          <Paragraph paddingBottom="xsmall">I’m a multi-disciplinary designer and developer working out of Philadelphia. I believe in making companies of any size stand out with clean, intelligent design and hand-crafted, innovative web experiences.</Paragraph>

          <div>
            <Heading2 paddingBottom="xxsmall">Contact Me!</Heading2>
            <Paragraph><ContactLink /></Paragraph>
          </div>
        </div>
      </ContentContainer>
    </Wrapper>
  )
}

const ContentContainer = styled(Container)`
  display: grid;
  grid-gap: ${spacing.xsmall};
  grid-template-columns: 1fr;

  ${above.small`
    grid-gap: ${spacing.small};
    grid-template-columns: 2fr 1fr;
  `}
`;

const AboutMeImage = styled.figure`
  padding-top: 60%;

  background-image: url(${myface});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${above.small`
    padding-top: 0;
    height: 60%;
    order: 1;
  `}

  ${above.medium`
    height: 100%;
  `}
`;

export default Intro;
