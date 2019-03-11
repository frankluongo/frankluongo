import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from "gatsby";

export default class Listing extends Component {
  render() {
    return (
      <StaticQuery
        query={LISTING_QUERY}
        render={({allMarkdownRemark}) => (
          allMarkdownRemark.edges.map(edge => (
            <article key={edge.node.frontmatter.slug}>
              <h2>{edge.node.frontmatter.title}<br />
              <small>{edge.node.frontmatter.date}</small></h2>

              <Link to={`/blog${edge.node.frontmatter.slug}`}>
                <p>{edge.node.excerpt}</p>
              </Link>
            </article>
          ))
        )}
      />
    )
  }
}

const LISTING_QUERY = graphql`
  query ListingPosts {
    allMarkdownRemark(limit: 10, sort:{
      order: DESC,
      fields: [frontmatter___date]
    }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD.YYYY")
            title
            slug
          }
        }
      }
    }
  }
`;
