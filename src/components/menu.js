import { Link } from "gatsby"
import React from "react"

const Menu = () => (
  <ul style={{ display: `flex`, width: `100%`, padding: `0`, margin: `0`, listStyle: `none`, justifyContent: `space-around` }} >
    <li>
      <Link to="/">
        Home
      </Link>
    </li>
    <li>
      <Link to="/projects">
        Projects
      </Link>
    </li>
    <li>
      <Link to="/blog">
        Blog
      </Link>
    </li>
    <li>
      <Link to="/contact">
        Contact
      </Link>
    </li>
  </ul>
)

export default Menu
