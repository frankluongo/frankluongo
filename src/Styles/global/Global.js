import { createGlobalStyle } from 'styled-components';
import { theme } from '../utilities/Colors';
import { above } from 'src/Styles/utilities/Breakpoints';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  html {
    font-size: 100%;
  }

  html, body {
    margin: 0;
    padding: 0;

    color: ${theme.gray4};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    box-sizing: border-box;
  }

  /* Resets List in Alphabetical Order */

  a {
    color: ${theme.blue7};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }


  dl,
  ol,
  ul {
    margin: 0;
    padding: 0;

    list-style: none;
  }

  figure {
    display: block;

    margin: 0;
    padding: 0;
  }

  img {
    display: block;

    max-width: 100%;
  }

  main {
    padding-top: 84px;

    ${above.small`
      padding-top: 100px;
    `}
    ${above.medium`
      padding-top: 146px;
    `}
  }
`;

export default GlobalStyle;
