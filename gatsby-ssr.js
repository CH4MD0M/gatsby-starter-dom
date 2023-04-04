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
