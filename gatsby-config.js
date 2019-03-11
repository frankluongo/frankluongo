// This allows us to use a dotenv file to keep our secrets
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Frank Luongo | Web Designer & Developer`,
    description: `Hi! I'm Frank Luongo, a Full-stack Web Developer and Designer with over 5 years of experience in the field. I have experience building websites and applications with WordPress, Elixir/Phoenix, Ruby on Rails, HTML5, CSS3, Sass, JavaScript, React and Vue. I also spent several years designing in Adobe Photoshop, Adobe Illustrator and Sketch as well as doing UI/UX Design via user testing, user studies, and writing product requirements.`,
    author: `@frankluongo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },


    // ? Using GraphCMS As a Source for data
    /*{
      resolve: "gatsby-source-graphql",
      options: {
        // The top level query type, can be anything you want!
        typeName: "GCMS",
        // The field you'll query against, can also be anything you want.
        fieldName: "gcms",
        // Your API endpoint, available from the dashboard and settings window.
        url: process.env.GRAPH_CMS_API,
      },
    },*/

    // ? Using The Filesystem as our data source
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts'
      }
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/projects`,
        name: 'projects'
      }
    },

    // ? Transform Markdown into usable code
    'gatsby-transformer-remark',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-root-import',


    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
