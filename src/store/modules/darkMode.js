import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  systemTheme: 'not-ready',
  themeMode: 'default',
};

const uiSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.themeMode = action.payload;
    },

    setSystemTheme(state, action) {
      state.systemTheme = action.payload;
    },
  },
});

export const { setTheme, setSystemTheme } = uiSlice.actions;
export default uiSlice.reducer;
