import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.families.default};
    font-size: ${props => props.theme.fonts.sizes.default};
    line-height: 1.3em;
    min-width: ${props => props.theme.siteWidth.min};
    padding: 20px;
  }

  /* headings */

  h1, h2, h3, h4, h5, h6 {
    font-size: ${props => props.theme.fonts.sizes.default};
    font-family: ${props => props.theme.fonts.families.heading};
    font-weight: bold;
  }

  h1 {
    font-size: ${props => props.theme.fonts.sizes.h1};
  }

  h2 {
    font-size: ${props => props.theme.fonts.sizes.h2};
  }

  h3 {
    font-size: ${props => props.theme.fonts.sizes.h3};
  }

  h4 {
    font-size: ${props => props.theme.fonts.sizes.h4};
  }

  h5 {
    font-size: ${props => props.theme.fonts.sizes.h5};
  }

  h6 {
    font-size: ${props => props.theme.fonts.sizes.h6};
  }

  /* formatting */

  strong, b {
    font-weight: bold;
  }

  em, i {
    font-style: italic;
  }

  hr {
    border: none;
    border-top: 1px solid #bbb;
    margin: 20px 0;
  }

  /* anchors */

  a {
    color: ${props => props.theme.colors.anchor.default};

    &:hover {
      color: ${props => props.theme.colors.anchor.hover};
    }

    &:visited {
      color: ${props => props.theme.colors.anchor.visited};
    }

    &:active {
      color: ${props => props.theme.colors.anchor.active};
    }
  }

  /* spacing */

  p, h1, h2, h3, h4, h5, h6 {
    margin: 15px 0;

    &:first-child {
      margin-top: 0;
    }
  }
`;

export default GlobalStyle;
