import React from 'react'

import Layout from "../../components/layout"
import ProjectsListing from 'src/components/Global/ProjectsListing';
import { Wrapper, Container } from 'src/Styles/elements/Container';

const ProjectIndex = () => {

  return (
    <Layout>
      <Wrapper>
        <Container>
          <ProjectsListing />
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default ProjectIndex;
