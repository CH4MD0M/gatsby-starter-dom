import React, { createElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './src/store';
import GlobalStyle from './src/style/globalStyle';
import theme from './src/style/variables';

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>{element}</Provider>
);

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {element}
  </ThemeProvider>
);

const darkModeScript = `
(function() {
  const value = window.localStorage.getItem('themeMode');
  const localTheme = JSON.parse(value);
  if (localTheme) {
    document.documentElement.dataset.theme = localTheme;
    return;
  }

  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  if(systemTheme.matches) {
    document.documentElement.dataset.theme = 'dark';
  } else {
    document.documentElement.dataset.theme = 'light';
  }
})();
`;

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    createElement('script', {
      key: 'darkModeScript',
      dangerouslySetInnerHTML: {
        __html: darkModeScript,
      },
    }),
  ]);
};
