import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 
*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
  font-size: 62.5%;
}
body {
  --divider: ${(props) => props.theme.colors.gray4};
  --icon: ${(props) => props.theme.colors.gray3};
  --bgColor: ${(props) => props.theme.colors.primary8};
  --textColor: ${(props) => props.theme.colors.primary1};
  --contentBgColor: ${(props) => props.theme.colors.primary9};
  --contentTextColor: ${(props) => props.theme.colors.primary3};
  --headingColor: ${(props) => props.theme.colors.primary2};
  --linkColor: ${(props) => props.theme.colors.gray3};
  --categoryBorderColor: ${(props) => props.theme.colors.primary6};
  --regularFontWeight: ${(props) => props.theme.text.fontWeight3};
  --boldFontWeight: ${(props) => props.theme.text.fontWeight4};
  --headerBackground: 	hsla(0, 0%, 100%, 0.85);
  --headerShadow: hsla(0, 0%, 0%, 0.08);
  --blockQuoteBorder: ${(props) => props.theme.colors.gray4};
  --blockQuoteBackground: ${(props) => props.theme.colors.gray5};
  --inlineCodeBackground: ${(props) => props.theme.colors.gray4};
  --postNavButtonBackground: ${(props) => props.theme.colors.gray6};
  --hoveredPostNavButtonBackground: ${(props) => props.theme.colors.primary9};

  background: var(--bgColor);
  font-family: "Noto Sans KR";
  color: var(--textColor);
  margin: 0;
  transition: all 0.2s ease-in;
}

  body.dark {
    --divider: ${(props) => props.theme.colors.gray1};
    --icon: ${(props) => props.theme.colors.gray2};
    --bgColor: ${(props) => props.theme.colors.primary1};
    --textColor: ${(props) => props.theme.colors.primary7};
    --contentBgColor: ${(props) => props.theme.colors.primary2};
    --contentTextColor: ${(props) => props.theme.colors.primary9};
    --headingColor: ${(props) => props.theme.colors.primary6};
    --linkColor: ${(props) => props.theme.colors.neonBlue};
    --categoryBorderColor: ${(props) => props.theme.colors.primary3};
    --boxShadow: ${(props) => props.theme.colors.boxShadow};
    --smallBoxShadow: ${(props) => props.theme.colors.smallBoxShadow};
    --animation: ${(props) => props.theme.animation.logoAnimation};
    --regularFontWeight: ${(props) => props.theme.text.fontWeight1};
    --boldFontWeight: ${(props) => props.theme.text.fontWeight3};
    --headerBackground: 	hsla(218, 27%, 14%, 0.85);
    --headerShadow: hsla(0, 0%, 100%, 0.08);
    --blockQuoteBorder: ${(props) => props.theme.colors.gray3};
    --blockQuoteBackground: ${(props) => props.theme.colors.primary1};
    --inlineCodeBackground: ${(props) => props.theme.colors.gray2};
    --postNavButtonBackground: ${(props) => props.theme.colors.primary2};
    --hoveredPostNavButtonBackground: ${(props) => props.theme.colors.primary3};
    

    background: var(--bgColor);
    font-family: "Noto Sans KR";
    color: var(--textColor);
    margin: 0;
    
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  a {
    text-decoration: none;
    transition: .2s;
    &:focus{
      outline: none;
    }
    &:active,
    &:hover {
      outline: 0;
    }
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5rem;
  }
  sub {
    bottom: -0.25rem;
  }
  img {
    border: 0;
  }
  figure {
    margin: 1rem 40px;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: "Fira Code", monospace;
  }
  pre {
    overflow: auto;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }
  button {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  input {
    line-height: normal;
  }
  textarea {
    overflow: auto;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  td,
  th {
    padding: 0;
  }
  ul{
    list-style:none;
  }

  .gatsby-resp-image-wrapper{
    margin:5rem 0 1rem;
  }
  .gatsby-resp-image-image{
    padding: 0 3rem;
  }
`;
