import React, { Component } from 'react'
import styled from 'styled-components';
import Instafeed from "instafeed.js"

import { Container, Wrapper } from "src/Styles/elements/Container"
import { Heading2 } from "src/Styles/elements/Headings";
import { Paragraph } from "src/Styles/elements/Paragraphs";
import { spacing } from "src/Styles/utilities/Variables";
import { above } from 'src/Styles/utilities/Breakpoints';
import { theme } from 'src/Styles/utilities/Colors';
import { FancyLinkTag } from 'src/Styles/elements/FancyLink';

import Resume from 'src/images/FrankLuongoResume.pdf'



export default class AboutMe extends Component {
  componentDidMount () {
    this.displayInstafeed();
  }

  displayInstafeed = () => {
    let feed = new Instafeed({
          get: 'user',
          clientId: process.env.GATSBY_INSTAFEED_CLIENT_ID,
          userId: process.env.GATSBY_INSTAFEED_USER_ID,
          accessToken: process.env.GATSBY_INSTAFEED_ACCESS_TOKEN,
          limit: 5,
          template: '<a href="{{link}}"><img src="{{image}}" alt="Photo from my Instagram" class="instafeed__photo" /></a>'
    });
    feed.run();
  }

  render() {
    return (
      <Wrapper backgroundColor={theme.gray2}>
        <AboutMeContent>
          <section>
          <Heading2>About Me</Heading2>
          <Paragraph>
            Whether it’s through visual design, UX, development or a combination of disciplines, my ultimate goal is always to build something meaningful that adds value to the user and your business. I find ways to improve and optimize everything I do and I’m constantly learning, listening, reading and absorbing new information. I'm excited and grateful to have the opportunity to do the type of work I get to do.
          </Paragraph>

          <Paragraph>
            When I'm not writing code, sketching wireframes and pushing pixels around, I'm typically running, spending time with friends and family or watching Marvel movies.
          </Paragraph>

          <Paragraph>Looking for my work history? <FancyLinkTag href={Resume} target="_blank" rel="noopener noreferrer">Check out My Resumé</FancyLinkTag></Paragraph>
          </section>
          <aside>
            <Heading2 paddingBottom="xsmall">My Latest Grams</Heading2>
            <Feed id="instafeed" />
          </aside>
        </AboutMeContent>
      </Wrapper>
    )
  }
}


const AboutMeContent = styled(Container)`
  display: grid;
  grid-gap: ${spacing.xsmall};
  grid-template-columns: 1fr;

  ${above.small`
    grid-gap: ${spacing.small};
    grid-template-columns: 2fr 1fr;
  `}
`;

const Feed = styled.div`
  display: grid;
  grid-gap: ${spacing.xsmall};
  grid-template-columns: repeat(3, 1fr);

  ${above.small`
    grid-gap: ${spacing.small};
    grid-template-columns: repeat(2, 1fr);
  `}

  img {
    width: 100%;
  }
`;
