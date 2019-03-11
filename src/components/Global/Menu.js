import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components';

import ContactLink from './ContactLink';

const Menu = () => (
  <MenuList>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/projects">Projects</Link></li>
    <li><Link to="/blog">Blog</Link></li>
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
`;

export default Menu;
