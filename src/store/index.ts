import { configureStore, combineReducers } from '@reduxjs/toolkit';

import darkModeSlice from './modules/darkMode';
import { themeMiddleware } from './modules/themeMiddleware';

const rootReducer = combineReducers({ darkMode: darkModeSlice });

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(themeMiddleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
