import { createGlobalStyle, css } from 'styled-components';
import { lightTheme } from '@assets/prism-light-theme';
import { darkTheme } from '@assets/prism-dark-theme';

export default createGlobalStyle`${css`
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }
  :root {
    --bgColor: ${({ theme }) => theme.colors.primary0};
    --textColor: ${({ theme }) => theme.colors.primary9};
    --divider: ${({ theme }) => theme.colors.primary3};
    --headerBgColor: hsla(0, 0%, 100%, 0.8);
    --headerShadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.05);
    --toggleBdColor: ${({ theme }) => theme.colors.blue0};
    --iconBgColor: ${({ theme }) => theme.colors.primary3};
    --iconColor: ${({ theme }) => theme.colors.primary4};
    --hoveredIconColor: ${({ theme }) => theme.colors.primary9};
    --pageTitleBgColor: ${({ theme }) => theme.colors.blue0};
    --categoryTextColor: ${({ theme }) => theme.colors.blue0};
    --postDateColor: ${({ theme }) => theme.colors.primary6};
    --linkColor: ${({ theme }) => theme.colors.blue0};
    --postNavBtnBgColor: ${({ theme }) => theme.colors.primary2};
    --hoveredPostNavBtnBgColor: ${({ theme }) => theme.colors.primary3};
    --tocTextColor: ${({ theme }) => theme.colors.primary5};
    --hoveredTocTextColor: ${({ theme }) => theme.colors.primary9};
    --activeTocBgColor: ${({ theme }) => theme.colors.primary1};
    --activeTocBdColor: ${({ theme }) => theme.colors.blue0};
    --scrollThumb: ${({ theme }) => theme.colors.primary5};
    --scrollTrack: ${({ theme }) => theme.colors.primary3};
    --headingBdColor: ${({ theme }) => theme.colors.primary6};
    --tableBgColor: ${({ theme }) => theme.colors.primary2};
    --tableBdColor: ${({ theme }) => theme.colors.primary4};
    --blockQuoteBorder: ${({ theme }) => theme.colors.primary5};
    --blockQuoteBgColor: ${({ theme }) => theme.colors.primary2};
    --italicBgColor: hsl(187, 40%, 88%);
    --inlineCodeBgColor: ${({ theme }) => theme.colors.primary3};
    --hrColor: ${({ theme }) => theme.colors.primary5};
    --imgBgColor: transparent;
    --tagBgColor: ${({ theme }) => theme.colors.primary2};
    --hoveredTagBgColor: ${({ theme }) => theme.colors.primary4};
    --activeTagBgColor: ${({ theme }) => theme.colors.blue0};
    --hoveredActiveTagBgColor: hsl(187, 92%, 30%);
    --themeToggleIconColor: hsl(51, 89%, 66%);
    --themeToggleBtnBgColor: ${({ theme }) => theme.colors.primary0};
    --themeToggleBtnShadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.15);
    --hoveredThemeToggleBtnBgColor: ${({ theme }) => theme.colors.primary7};
    --searchBdColor: ${({ theme }) => theme.colors.primary2};
    --focusedSearchBdColor: ${({ theme }) => theme.colors.blue0};
    ${lightTheme}
  }

  [data-theme='dark'] {
    --bgColor: ${({ theme }) => theme.colors.primary9};
    --textColor: ${({ theme }) => theme.colors.primary0};
    --divider: ${({ theme }) => theme.colors.primary8};
    --headerBgColor: hsla(210, 20%, 15%, 0.8);
    --headerShadow: 0px 5px 5px 0px rgba(100, 100, 100, 0.15);
    --toggleBdColor: ${({ theme }) => theme.colors.blue1};
    --iconBgColor: ${({ theme }) => theme.colors.primary7};
    --iconColor: ${({ theme }) => theme.colors.primary5};
    --hoveredIconColor: ${({ theme }) => theme.colors.primary0};
    --pageTitleBgColor: ${({ theme }) => theme.colors.blue1};
    --categoryTextColor: ${({ theme }) => theme.colors.blue1};
    --postDateColor: ${({ theme }) => theme.colors.primary5};
    --linkColor: ${({ theme }) => theme.colors.blue1};
    --postNavBtnBgColor: ${({ theme }) => theme.colors.primary7};
    --hoveredPostNavBtnBgColor: ${({ theme }) => theme.colors.primary8};
    --tocTextColor: ${({ theme }) => theme.colors.primary6};
    --hoveredTocTextColor: ${({ theme }) => theme.colors.primary0};
    --activeTocBgColor: ${({ theme }) => theme.colors.primary7};
    --activeTocBdColor: ${({ theme }) => theme.colors.blue1};
    --scrollThumb: ${({ theme }) => theme.colors.primary7};
    --scrollTrack: ${({ theme }) => theme.colors.primary8};
    --headingBdColor: ${({ theme }) => theme.colors.primary6};
    --tableBgColor: ${({ theme }) => theme.colors.primary7};
    --tableBdColor: ${({ theme }) => theme.colors.primary6};
    --blockQuoteBorder: ${({ theme }) => theme.colors.primary6};
    --blockQuoteBgColor: ${({ theme }) => theme.colors.primary8};
    --italicBgColor: hsl(187, 45%, 25%);
    --inlineCodeBgColor: ${({ theme }) => theme.colors.gray};
    --hrColor: ${({ theme }) => theme.colors.primary6};
    --imgBgColor: ${({ theme }) => theme.colors.primary1};
    --tagBgColor: ${({ theme }) => theme.colors.primary8};
    --hoveredTagBgColor: ${({ theme }) => theme.colors.primary7};
    --activeTagBgColor: ${({ theme }) => theme.colors.blue1};
    --hoveredActiveTagBgColor: hsl(187, 56%, 77%);
    --themeToggleIconColor: hsl(0, 95%, 74%);
    --themeToggleBtnBgColor: ${({ theme }) => theme.colors.primary7};
    --themeToggleBtnShadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.45);
    --hoveredThemeToggleBtnBgColor: ${({ theme }) => theme.colors.primary0};
    --searchBdColor: ${({ theme }) => theme.colors.primary7};
    --focusedSearchBdColor: ${({ theme }) => theme.colors.blue1};
    ${darkTheme}
  }

  body {
    background: var(--bgColor) !important;
    color: var(--textColor);
    font-family: 'Nanum Gothic', sans-serif;
  }

  a {
    text-decoration: none;
    transition: 0.2s;

    &:focus {
      outline: none;
    }
    &:active,
    &:hover {
      outline: 0;
    }
  }
`}

`;
