import { createSlice } from '@reduxjs/toolkit';

const initialState: DarkModeState = {
  themeMode: 'default',
  loading: true,
};

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    setTheme(state, action) {
      state.themeMode = action.payload;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setTheme, setLoading } = darkModeSlice.actions;
export default darkModeSlice.reducer;
