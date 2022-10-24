import { configureStore, combineReducers } from "@reduxjs/toolkit";
import uiSlice from "./modules/uiSlice";

const rootReducer = combineReducers({ ui: uiSlice });

export const store = configureStore({
  reducer: rootReducer,
});
