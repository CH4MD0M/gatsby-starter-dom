import React from 'react';
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

const transitionDelay = 100;

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  window.history.scrollRestoration = 'manual';
  const currentPosition = getSavedScrollPosition(location);
  window.setTimeout(() => {
    window.scrollTo(...currentPosition);
  }, transitionDelay);
  return false;
};
