import React from 'react'
import Layout from "../../components/layout"
import { useStaticQuery, graphql, Link } from 'gatsby'

// * Default Export
// ? ------------------------------------------------------

const BlogIndex = () => {

// * Queries
// ? ------------------------------------------------------

  const { allMarkdownRemark } = useStaticQuery(POSTS_QUERY)

// * Helper Functions
// ? ------------------------------------------------------

  const GetallPosts = (props) => {
    let { allMarkdownRemark } = props;
    let list = allMarkdownRemark.edges.map((edge, index) => (
      <li key={index}>
        <Link to={`/blog${edge.node.frontmatter.slug}`}>
          {edge.node.frontmatter.title}
        </Link>
      </li>
    ))
    return (
      <>{list}</>
    )
  }

// * Return
// ? ------------------------------------------------------

  return (
    <Layout>
      <div>Hi!</div>
      <ul>
        <GetallPosts allMarkdownRemark={allMarkdownRemark} />
      </ul>
    </Layout>
  )
}

const POSTS_QUERY = graphql`
query BlogPosts {
  allMarkdownRemark(filter: {
    frontmatter: {
      type: {eq: "post"}
    }
  }) {
    edges {
      node {
        frontmatter {
          slug
          title
        }
      }
    }
  }
}
`;


export default BlogIndex;
