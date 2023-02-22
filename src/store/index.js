import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

import storage from '../utils/storage';
import darkModeSlice from './modules/darkMode';

const rootReducer = combineReducers({ darkMode: darkModeSlice });

const persistConfig = {
  key: 'darkmode',
  storage,
  whitelist: ['darkMode'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});
