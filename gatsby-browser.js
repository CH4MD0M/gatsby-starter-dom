import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>{element}</Provider>
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
