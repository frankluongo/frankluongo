const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
    {
      allMarkdownRemark(filter: {
        frontmatter: {
          type: {eq: "post"}
        }
      }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }`)
    .then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/blog${node.frontmatter.slug}`,
          component: path.resolve('./src/components/postLayout.js'),
          context: {
            slug: node.frontmatter.slug
          }
        })
      })
    })
    graphql(`
    {
      allMarkdownRemark(filter: {
        frontmatter: {
          type: {eq: "project"}
        }
      }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }`)
    .then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/projects${node.frontmatter.slug}`,
          component: path.resolve('./src/components/postLayout.js'),
          context: {
            slug: node.frontmatter.slug
          }
        })
      })
      resolve();
    })

  }); // The Promise
}
