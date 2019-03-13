import React, { Component } from 'react'
import styled from 'styled-components';
import Instafeed from "instafeed.js"

import { Container, Wrapper } from "src/Styles/elements/Container"
import { Heading2 } from "src/Styles/elements/Headings";
import { Paragraph } from "src/Styles/elements/Paragraphs";
import { spacing } from "src/Styles/utilities/Variables";
import { above } from 'src/Styles/utilities/Breakpoints';
import { theme } from 'src/Styles/utilities/Colors';

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
          <div>
          <Heading2>About Me</Heading2>
          <Paragraph>I am passionate about making things better; better for the user, for the business and for the world. I love problem solving, researching and testing every solution until we find what’s right. Whether it’s through visual design, UX, development or a combination of disciplines, my ultimate goal is always to build something meaningful.</Paragraph>
          <Paragraph>I’m the type of person who loves finding ways to improve and optimize everything I do. I believe in always having a student mindset so I’m constantly learning, listening and reading about the things I enjoy. From my daily routines, workouts and eating habits to how I organize my desk, task lists, and personal journal, I’ve tried 10 different ways to do them to find what works best for me.</Paragraph>
          <Paragraph>When I set out to do something, I get it done. I have 1, 5, 10 year goals with 90 day objectives that I review weekly, as well as daily todo lists to help keep me on track. I also know my flaws and shortcomings well enough to set up guardrails against them.</Paragraph>
          <Paragraph>Looking for my work history? <a href={Resume} target="_blank" rel="noopener noreferrer">Check out My Resumé</a></Paragraph>
          </div>
          <div>
            <Heading2 paddingBottom="xsmall">My Latest Grams</Heading2>
            <Feed id="instafeed" />
          </div>
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
