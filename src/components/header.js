import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from '../icons/logo';
import Menu from './menu';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      borderBottom: `1px solid #eee`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
        justifyContent: `stretch`,
        alignItems: `center`,
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
    <Link to="/" style={{ textDecoration: `none` }} >
      <Logo color="#00b2e5" />
    </Link>
    <Menu />

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
