import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import Logo from '../icons/logo';
import Menu from './menu';

import { Container } from '../Styles/elements/Container';

const Header = ({ className }) => (
  <header className={className} >
    <Container
      style={{
        display: `flex`,
        justifyContent: `stretch`,
        alignItems: `center`,
      }}
    >
    <Link to="/" style={{ textDecoration: `none` }} >
      <Logo color="#00b2e5" />
    </Link>
    <Menu />

    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default styled(Header)`
  margin-bottom: 1.45rem;

  background-color: #fff;
  border-bottom: 1px solid #eee;
`;
