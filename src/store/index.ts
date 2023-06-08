import { configureStore, combineReducers } from '@reduxjs/toolkit';

import darkModeSlice from './modules/darkMode';

const rootReducer = combineReducers({ darkMode: darkModeSlice });

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
