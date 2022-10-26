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
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 62.5%;
}
html {
  --bgColor: ${(props) => props.theme.colors.primary0};
  --textColor: ${(props) => props.theme.colors.primary9};
  --divider: ${(props) => props.theme.colors.primary3};
  --headerBgColor: hsla(0, 0%, 100%, 0.8);
  --toggleBdColor: ${(props) => props.theme.colors.blue0};
  --iconBgColor: ${(props) => props.theme.colors.primary3};
  --iconColor: ${(props) => props.theme.colors.primary4};
  --hoveredIconColor: ${(props) => props.theme.colors.primary9};
  --pageTitleBgColor: ${(props) => props.theme.colors.blue0};
  --categoryTextColor: ${(props) => props.theme.colors.blue0};
  --postTitleColor: ${(props) => props.theme.colors.blue0};
  --postDateColor: ${(props) => props.theme.colors.primary6};
  --linkColor: ${(props) => props.theme.colors.blue0};
  --postNavBtnBgColor: ${(props) => props.theme.colors.primary2};
  --hoveredPostNavBtnBgColor: ${(props) => props.theme.colors.primary3};
  --tocTextColor: ${(props) => props.theme.colors.primary5};
  --hoveredTocTextColor: ${(props) => props.theme.colors.primary9};
  --scrollBdColor: ${(props) => props.theme.colors.primary3};
  --scrollThumb: ${(props) => props.theme.colors.primary5};
  --scrollTrack: ${(props) => props.theme.colors.primary3};
  --headingBdColor: ${(props) => props.theme.colors.primary6};
  --tableBgColor: ${(props) => props.theme.colors.primary2};
  --tableBdColor: ${(props) => props.theme.colors.primary4};
  --blockQuoteBorder: ${(props) => props.theme.colors.primary5};
  --blockQuoteBgColor: ${(props) => props.theme.colors.primary3};
  --inlineCodeBgColor: ${(props) => props.theme.colors.primary4};
}

html[data-theme='dark'] {
    --bgColor: ${(props) => props.theme.colors.primary9};
    --textColor: ${(props) => props.theme.colors.primary0};
    --divider: ${(props) => props.theme.colors.primary8};
    --headerBgColor: hsla(210, 20%, 15%, 0.8);
    --toggleBdColor: ${(props) => props.theme.colors.blue1};
    --iconBgColor: ${(props) => props.theme.colors.primary7};
    --iconColor: ${(props) => props.theme.colors.primary5};
    --hoveredIconColor: ${(props) => props.theme.colors.primary0};
    --pageTitleBgColor: ${(props) => props.theme.colors.blue1};
    --categoryTextColor: ${(props) => props.theme.colors.blue1};
    --postTitleColor: ${(props) => props.theme.colors.blue1};
    --postDateColor: ${(props) => props.theme.colors.primary5};
    --linkColor: ${(props) => props.theme.colors.blue1};
    --postNavBtnBgColor: ${(props) => props.theme.colors.primary7};
    --hoveredPostNavBtnBgColor: ${(props) => props.theme.colors.primary8};
    --tocTextColor: ${(props) => props.theme.colors.primary6};
    --hoveredTocTextColor: ${(props) => props.theme.colors.primary0};
    --scrollBdColor: ${(props) => props.theme.colors.primary8};
    --scrollThumb: ${(props) => props.theme.colors.primary7};
    --scrollTrack: ${(props) => props.theme.colors.primary8};
    --headingBdColor: ${(props) => props.theme.colors.primary6};
    --tableBgColor: ${(props) => props.theme.colors.primary7};
    --tableBdColor: ${(props) => props.theme.colors.primary6};
    --blockQuoteBorder: ${(props) => props.theme.colors.primary6};
    --blockQuoteBgColor: ${(props) => props.theme.colors.primary8};
    --inlineCodeBgColor: ${(props) => props.theme.colors.gray};    
  }
  
  body {
    background: var(--bgColor) !important;
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
