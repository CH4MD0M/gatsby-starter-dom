import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: DarkModeState = {
  themeMode: 'default',
  systemTheme: 'not-ready',
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeMode>) {
      state.themeMode = action.payload;
    },

    setSystemTheme(state, action: PayloadAction<SystemTheme>) {
      state.systemTheme = action.payload;
    },
  },
});

export const { setTheme, setSystemTheme } = darkModeSlice.actions;
export default darkModeSlice.reducer;
