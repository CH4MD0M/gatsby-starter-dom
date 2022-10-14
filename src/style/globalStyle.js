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
  --regularFontWeight: ${(props) => props.theme.text.fontWeight3};
  --boldFontWeight: ${(props) => props.theme.text.fontWeight4};
  --headerBackground: ${(props) => props.theme.colors.primary9};
  --headerShadow: hsla(0, 0%, 0%, 0.08);
  --blockQuoteBorder: ${(props) => props.theme.colors.gray4};
  --blockQuoteBackground: ${(props) => props.theme.colors.gray5};
  --inlineCodeBackground: ${(props) => props.theme.colors.gray4};
  --postNavButtonBackground: ${(props) => props.theme.colors.gray6};
  --hoveredPostNavButtonBackground: ${(props) => props.theme.colors.primary9};
  --tocTextColor: ${(props) => props.theme.colors.gray3};
  --hoveredTocTextColor: ${(props) => props.theme.colors.gray1};
  --scrollBdColor: ${(props) => props.theme.colors.gray5};
  --scrollThumb: ${(props) => props.theme.colors.gray1};
  --scrollTrack: ${(props) => props.theme.colors.gray5};

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
    --boxShadow: ${(props) => props.theme.colors.boxShadow};
    --smallBoxShadow: ${(props) => props.theme.colors.smallBoxShadow};
    --animation: ${(props) => props.theme.animation.logoAnimation};
    --regularFontWeight: ${(props) => props.theme.text.fontWeight1};
    --boldFontWeight: ${(props) => props.theme.text.fontWeight3};
    --headerBackground: ${(props) => props.theme.colors.primary0};
    --headerShadow: hsla(218, 25%, 12%, 0.08)
    --blockQuoteBorder: ${(props) => props.theme.colors.gray3};
    --blockQuoteBackground: ${(props) => props.theme.colors.primary1};
    --inlineCodeBackground: ${(props) => props.theme.colors.gray2};
    --postNavButtonBackground: ${(props) => props.theme.colors.primary2};
    --hoveredPostNavButtonBackground: ${(props) => props.theme.colors.primary3};
    --tocTextColor: ${(props) => props.theme.colors.gray4};
    --hoveredTocTextColor: ${(props) => props.theme.colors.gray6};
    --scrollBdColor: ${(props) => props.theme.colors.primary2};
    --scrollThumb: ${(props) => props.theme.colors.primary0};
    --scrollTrack: ${(props) => props.theme.colors.gray1};
    

    background: var(--bgColor);
    font-family: "Noto Sans KR";
    color: var(--textColor);
    margin: 0;
    
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
  code,
  pre {
    font-family: "Fira Code", monospace;
  }
  pre {
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
  

  .gatsby-resp-image-wrapper{
    margin:5rem 0 1rem;
  }
  .gatsby-resp-image-image{
    padding: 0 3rem;
  }
`;
