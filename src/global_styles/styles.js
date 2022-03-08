import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    /* FONTS */
    --font-1: "Montserrat";

    /* COLORS */
    --color-primary: #323A40;
    --color-secondary: #3C4953;
    --color-dark: #1D2226;
    --color-light: #FFFFFF;
    --color-gray: #CBCBCB;
    --color-dark-gray: #6B6A6E;
    --color-action: #83DDA9;
    --color-action-active: #43D882;
    --color-action-text: #1A1F26;
    --color-link: #7FDEE4;
    --color-danger: #E34D43;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-1), sans-serif;
  }

  html, body, #root, .App {
    height: 100%;
    width: 100%;
  }

  #root {
    background-color: var(--color-primary);
  }
`;

export {
  GlobalStyles
};
