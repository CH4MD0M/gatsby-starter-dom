import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import store from './src/store';

let persistor = persistStore(store);

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {element}
    </PersistGate>
  </Provider>
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
