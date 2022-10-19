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
  font-family: "Noto Sans KR";
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
  --blockQuoteBorder: ${(props) => props.theme.colors.gray4};
  --blockQuoteBgColor: ${(props) => props.theme.colors.gray5};
  --inlineCodeBackground: ${(props) => props.theme.colors.gray4};
  --postNavButtonBackground: ${(props) => props.theme.colors.gray6};
  --hoveredPostNavButtonBackground: ${(props) => props.theme.colors.primary9};
  --tocTextColor: ${(props) => props.theme.colors.gray3};
  --hoveredTocTextColor: ${(props) => props.theme.colors.gray1};
  --scrollBdColor: ${(props) => props.theme.colors.gray5};
  --scrollThumb: ${(props) => props.theme.colors.gray1};
  --scrollTrack: ${(props) => props.theme.colors.gray5};
  --tableBgColor: ${(props) => props.theme.colors.gray4};
  background: var(--bgColor);
  color: var(--textColor);
  
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
    --headerBackground: ${(props) => props.theme.colors.primary1};
    --blockQuoteBorder: ${(props) => props.theme.colors.gray3};
    --blockQuoteBgColor: ${(props) => props.theme.colors.primary2};
    --inlineCodeBackground: ${(props) => props.theme.colors.gray2};
    --postNavButtonBackground: ${(props) => props.theme.colors.primary2};
    --hoveredPostNavButtonBackground: ${(props) => props.theme.colors.primary3};
    --tocTextColor: ${(props) => props.theme.colors.gray2};
    --hoveredTocTextColor: ${(props) => props.theme.colors.gray6};
    --scrollBdColor: ${(props) => props.theme.colors.primary2};
    --scrollThumb: ${(props) => props.theme.colors.primary0};
    --scrollTrack: ${(props) => props.theme.colors.gray1};
    --tableBgColor: ${(props) => props.theme.colors.gray2};
    background: var(--bgColor);
    color: var(--textColor);
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
  
  .gatsby-resp-image-wrapper{
    margin:5rem 0 1rem;
  }
  .gatsby-resp-image-image{
    padding: 0 3rem;
  }
`;
