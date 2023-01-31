import { createSlice } from '@reduxjs/toolkit';

import {
  setValueToLocalStorage,
  getValueFromLocalStorage,
} from '../../utils/localStorage';

const initialState = {
  themeMode: getValueFromLocalStorage('themeMode') || 'light',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.themeMode = action.payload;
      setValueToLocalStorage('themeMode', action.payload);
    },
  },
});

export const { setTheme } = uiSlice.actions;
export default uiSlice.reducer;
