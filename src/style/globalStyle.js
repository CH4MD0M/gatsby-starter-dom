import { createGlobalStyle } from 'styled-components';
import { lightTheme } from '../assets/prism-light-theme';
import { darkTheme } from '../assets/prism-dark-theme';

export default createGlobalStyle` 
*,
::after,
::before {
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
}
html {
  --bgColor: ${props => props.theme.colors.primary0};
  --textColor: ${props => props.theme.colors.primary9};
  --divider: ${props => props.theme.colors.primary3};
  --headerBgColor: hsla(0, 0%, 100%, 0.8);
  --toggleBdColor: ${props => props.theme.colors.blue0};
  --iconBgColor: ${props => props.theme.colors.primary3};
  --iconColor: ${props => props.theme.colors.primary4};
  --hoveredIconColor: ${props => props.theme.colors.primary9};
  --pageTitleBgColor: ${props => props.theme.colors.blue0};
  --categoryTextColor: ${props => props.theme.colors.blue0};
  --postDateColor: ${props => props.theme.colors.primary6};
  --linkColor: ${props => props.theme.colors.blue0};
  --postNavBtnBgColor: ${props => props.theme.colors.primary2};
  --hoveredPostNavBtnBgColor: ${props => props.theme.colors.primary3};
  --tocTextColor: ${props => props.theme.colors.primary5};
  --hoveredTocTextColor: ${props => props.theme.colors.primary9};
  --activeTocBgColor: ${props => props.theme.colors.primary1};
  --activeTocBdColor: ${props => props.theme.colors.blue0};
  --scrollThumb: ${props => props.theme.colors.primary5};
  --scrollTrack: ${props => props.theme.colors.primary3};
  --headingBdColor: ${props => props.theme.colors.primary6};
  --tableBgColor: ${props => props.theme.colors.primary2};
  --tableBdColor: ${props => props.theme.colors.primary4};
  --blockQuoteBorder: ${props => props.theme.colors.primary5};
  --blockQuoteBgColor: ${props => props.theme.colors.primary2};
  --italicBgColor: hsl(187, 40%, 88%);
  --inlineCodeBgColor: ${props => props.theme.colors.primary3};
  --hrColor: ${props => props.theme.colors.primary5};
  --imgBgColor: transparent;
  --tagBgColor: ${props => props.theme.colors.primary3};
  --hoveredTagBgColor: ${props => props.theme.colors.primary4};
  --activeTagBgColor: ${props => props.theme.colors.blue0};
  --hoveredActiveTagBgColor: hsl(187, 92%, 30%);
  --themeToggleIconColor: hsl(51, 89%, 66%);
  --themeToggleBtnBgColor: ${props => props.theme.colors.primary0};
  --themeToggleBtnShadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
  --hoveredThemeToggleBtnBgColor: ${props => props.theme.colors.primary7};
  ${lightTheme}
}

html[data-theme='dark'] {
    --bgColor: ${props => props.theme.colors.primary9};
    --textColor: ${props => props.theme.colors.primary0};
    --divider: ${props => props.theme.colors.primary8};
    --headerBgColor: hsla(210, 20%, 15%, 0.8);
    --toggleBdColor: ${props => props.theme.colors.blue1};
    --iconBgColor: ${props => props.theme.colors.primary7};
    --iconColor: ${props => props.theme.colors.primary5};
    --hoveredIconColor: ${props => props.theme.colors.primary0};
    --pageTitleBgColor: ${props => props.theme.colors.blue1};
    --categoryTextColor: ${props => props.theme.colors.blue1};
    --postDateColor: ${props => props.theme.colors.primary5};
    --linkColor: ${props => props.theme.colors.blue1};
    --postNavBtnBgColor: ${props => props.theme.colors.primary7};
    --hoveredPostNavBtnBgColor: ${props => props.theme.colors.primary8};
    --tocTextColor: ${props => props.theme.colors.primary6};
    --hoveredTocTextColor: ${props => props.theme.colors.primary0};
    --activeTocBgColor: ${props => props.theme.colors.primary7};
    --activeTocBdColor: ${props => props.theme.colors.blue1};
    --scrollThumb: ${props => props.theme.colors.primary7};
    --scrollTrack: ${props => props.theme.colors.primary8};
    --headingBdColor: ${props => props.theme.colors.primary6};
    --tableBgColor: ${props => props.theme.colors.primary7};
    --tableBdColor: ${props => props.theme.colors.primary6};
    --blockQuoteBorder: ${props => props.theme.colors.primary6};
    --blockQuoteBgColor: ${props => props.theme.colors.primary8};
    --italicBgColor: hsl(187, 45%, 25%);
    --inlineCodeBgColor: ${props => props.theme.colors.gray};
    --hrColor: ${props => props.theme.colors.primary6};
    --imgBgColor: ${props => props.theme.colors.primary1};
    --tagBgColor: ${props => props.theme.colors.primary8};
    --hoveredTagBgColor: ${props => props.theme.colors.primary7};
    --activeTagBgColor: ${props => props.theme.colors.blue1};
    --hoveredActiveTagBgColor: hsl(187, 56%, 77%);
    --themeToggleIconColor: hsl(0, 95%, 74%);
    --themeToggleBtnBgColor: ${props => props.theme.colors.primary7};
    --themeToggleBtnShadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.45);
    --hoveredThemeToggleBtnBgColor: ${props => props.theme.colors.primary0};\
    ${darkTheme}
  }
  
  body {
    background: var(--bgColor) !important;
    color: var(--textColor);
    font-family: 'Nanum Gothic', sans-serif;
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
`;
