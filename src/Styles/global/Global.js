import { createGlobalStyle } from 'styled-components';
import { theme } from '../utilities/Colors';

const GlobalStyle = createGlobalStyle`
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

  *, *::after, *::before {
    box-sizing: inherit;
  }

  figure {
    display: block;

    margin: 0;
    padding: 0;
  }

  ul,
  ol,
  dl {
    margin: 0;
    padding: 0;

    list-style: none;
  }

  img {
    display: block;

    max-width: 100%;
  }
`;

export default GlobalStyle;
