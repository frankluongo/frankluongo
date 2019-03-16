import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components';

import ContactLink from './contactLink';
import { above } from 'src/Styles/utilities/Breakpoints';
import { type } from 'src/Styles/utilities/Typography';


const Menu = () => (
  <MenuList>
    <li><Link to="/">Home</Link></li>
    {/* <li><Link to="/projects">Projects</Link></li> */}
    {/* <li><Link to="/blog">Blog</Link></li> */}
    <li><ContactLink text="Contact" /></li>
  </MenuList>
)

const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;

  width: 100%;

  padding: 0;
  margin: 0;

  list-style: none;

  ${above.small`
    width: 50%;
  `};

  ${above.medium`
    width: 30%;
  `};

  a {
    ${type.bodyCopy};
    font-size: 0.875rem;

    ${above.small`
      font-size: 1rem;
    `};
  }
`;

export default Menu;
