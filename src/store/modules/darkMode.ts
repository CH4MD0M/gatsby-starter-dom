import { createSlice } from '@reduxjs/toolkit';
import { getCurrentTheme } from '@utils/getCurrentTheme';

const initialState: DarkModeState = {
  themeMode: getCurrentTheme(),
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.themeMode = action.payload.themeMode;
    },
  },
});

export const { setTheme } = darkModeSlice.actions;
export default darkModeSlice.reducer;
