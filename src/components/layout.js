/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { useSpring, animated } from 'react-spring'

import Header from "./global/header"
import Footer from "./global/footer"
import GlobalStyle from 'src/Styles/global/Global';

const Layout = ({ children }) => {

  const props = useSpring({opacity: 1, from: {opacity: 0}})


  return (
    <StaticQuery
      query={META_QUERY}
      render={data => (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
            <animated.main style={props}>{children}</animated.main>
          <Footer />
          <GlobalStyle />
        </>
      )}
    />
  )
}

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
