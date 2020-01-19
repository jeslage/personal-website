import { createGlobalStyle } from "styled-components";
import ams from "adaptive-modular-scale";

import { WorkSans } from "./fonts";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Work Sans';
    src: url(${WorkSans});
    font-display: swap;
  }

  * { -webkit-tap-highlight-color: rgba(0,0,0,0); }

  html {
    text-size-adjust: 100%;
  }
  
  body {
    font-family: "Work Sans", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.color};

    svg {
      fill: ${props => props.theme.color};
    }
  }
  
  h1, h2, h3, h4, h5, h6, p, a {
    margin:0;
    padding:0;
    font-family: "Work Sans", Arial, sans-serif;
  }

  h1 { ${ams(2)} }
  h2 { ${ams(1)} }

  p { 
    ${ams(1)}
    line-height: 1.5;
    max-width:700px;
  } 

  a {
    ${ams(1)}
    color: inherit;
  }
  
  img {
    width: 100%;
    height: auto;
    image-rendering: crisp-edges;
  }

  html,
  body,
  div,
  article,
  section,
  main,
  footer,
  header,
  form,
  fieldset,
  legend,
  pre,
  code,
  p,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  dl,
  dt,
  dd,
  textarea,
  input[type='email'],
  input[type='number'],
  input[type='password'],
  input[type='tel'],
  input[type='text'],
  input[type='url'] {
    box-sizing: border-box;
  }

  figure {
    margin: 0;
  }

  main {
    position: relative;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .lazyload,
  .lazyloading {
    opacity: 0;
    transition: opacity 400ms;
  }

  img.lazyloaded {
    transition: opacity 400ms;
    opacity: 1;
  }

  p {
    margin: 0;
  }
  
  i {
    font-style: italic;
  }

  b, strong {
    font-weight: 700;
  }

  @media print {
    @page { margin: 2cm }

    *,
    *:before,
    *:after {
      background: transparent !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]:after {
      content: ' (' attr(href) ')';
    }

    abbr[title]:after {
      content: ' (' attr(title) ')';
    }
    /*
    * Don't show links that are fragment identifiers
    */
    
    a[href^='#']:after,
    a[href^='javascript:']:after {
      content: '';
    }

    pre {
      white-space: pre-wrap !important;
    }

    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    /*
    * Printing Tables:
    * http://css-discuss.incutio.com/wiki/Printing_Tables
    */
    
    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }
`;

export default GlobalStyle;
