import React, { Component } from 'react'

import { Container, Wrapper } from "src/Styles/elements/Container"
import { Heading2 } from 'src/Styles/elements/Headings';
import { Paragraph } from 'src/Styles/elements/Paragraphs';

import ProjectsListing from 'src/components/global/projectsListing'

export default class Projects extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Heading2>My Work</Heading2>
          <Paragraph>
            I’ve had the pleasure of working with some great brands. Check out some of my recent projects below.
          </Paragraph>
          <ProjectsListing />
        </Container>
      </Wrapper>
    )
  }
}
