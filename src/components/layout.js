/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import { Container } from "../Styles/elements/Container"
import GlobalStyle from '../Styles/global/Global';

const Layout = ({ children }) => (
  <StaticQuery
    query={META_QUERY}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          <main>{children}</main>
          <GlobalStyle />
        </Container>
      </>
    )}
  />
)

const META_QUERY = graphql`
query SiteTitleQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
