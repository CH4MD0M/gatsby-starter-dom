import { createSlice } from "@reduxjs/toolkit";

import {
  getValueFromLocalStorage,
  setValueToLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  darkMode: getValueFromLocalStorage("darkMode") || false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMode(state) {
      state.darkMode = !state.darkMode;
      setValueToLocalStorage("darkMode", state.darkMode);
    },
  },
});

export const { toggleMode } = uiSlice.actions;
export default uiSlice.reducer;
