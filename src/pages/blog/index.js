import React from 'react'
import Layout from "../../components/layout"
import { useStaticQuery, graphql } from 'gatsby'

const BlogIndex = () => {

  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query BlogPosts {
        allMarkdownRemark {
          totalCount
          edges {
            node {
              excerpt
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `
  )

  const GetallPosts = (props) => {
    let {allMarkdownRemark} = props;
    let list = allMarkdownRemark.edges.map((edge, index) => (
      <li key={index}>{edge.node.frontmatter.title}</li>
    ))
    return (
      <>{list}</>
    )
  }

  return (
    <Layout>
      <div>Hi!</div>
      <ul>
        <GetallPosts allMarkdownRemark={allMarkdownRemark} />
      </ul>
    </Layout>
  )
}

export default BlogIndex;
