import React, { Component } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components';
import SEO from "../components/seo"

import { above } from 'src/Styles/utilities/Breakpoints';
import { space } from 'src/Styles/utilities/Variables';
import { type } from 'src/Styles/utilities/Typography';
import Layout from 'src/components/layout';
import { Wrapper, Container } from 'src/Styles/elements/Container';
import { Heading1 } from 'src/Styles/elements/Headings'

export default class postLayout extends Component {
  render() {

    const { markdownRemark } = this.props.data;

    return (
      <Layout>
        <SEO title="Home" keywords={[`${markdownRemark.frontmatter.title}`, `application`, `react`]} />
        <Wrapper>
          <MarkdownContainer>
            <Heading1 paddingBottom="small">{ markdownRemark.frontmatter.title }</Heading1>
            <div dangerouslySetInnerHTML={{
              __html: markdownRemark.html
            }} />
          </MarkdownContainer>
        </Wrapper>
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(
      frontmatter: {
        slug: {
          eq: $slug
        }
      }) {
      html
      frontmatter {
        title
        date
        photo
      }
    }
  }
`;

const MarkdownContainer = styled(Container)`

h2 {
  ${type.secondaryHeader};

  font-size: 1.2rem;
  font-style: italic;
  font-weight: normal;

  ${above.small`
    font-size: 1.4rem;
  `};
}

img {
  display: block;

  margin-bottom: ${space("small")};
}

p,
li {
  margin-bottom: ${space("xsmall")};

  & + & {
    margin-top: ${space("xsmall")}
  }

  ${type.bodyCopy};
  font-size: 1rem;
  line-height: 1.7;

  ${above.small`
    font-size: 1.2rem;
  `};
}

`;
