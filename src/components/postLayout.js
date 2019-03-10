import React, { Component } from 'react'
import { graphql } from 'gatsby'

import Layout from './layout';

export default class postLayout extends Component {
  render() {
    return (
      <Layout>
        whaddup dawg
      </Layout>
    )
  }
}

export const query = graphql`
  query PostQuery {
    markdownRemark(frontmatter: {
      slug: {
      eq: "/first-post"
      }
    }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
