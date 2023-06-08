type ThemeMode = 'default' | 'dark' | 'light';

interface DarkModeState {
  themeMode: ThemeMode;
  loading: boolean;
}

interface RootState {
  darkMode: DarkModeState;
}
