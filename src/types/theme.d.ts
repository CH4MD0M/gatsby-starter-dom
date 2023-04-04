type ThemeMode = 'default' | 'dark' | 'light';
type SystemTheme = 'not-ready' | 'dark' | 'light';

type SetSystemThemeAction = (theme: 'dark' | 'light') => void;

interface DarkModeState {
  systemTheme: SystemTheme;
  themeMode: ThemeMode;
}

interface RootState {
  darkMode: DarkModeState;
}
