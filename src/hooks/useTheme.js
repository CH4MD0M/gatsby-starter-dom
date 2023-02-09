import { useSelector } from 'react-redux';

export function useTheme() {
  const { systemTheme, themeMode } = useSelector(state => state.darkMode);

  const theme = (() => {
    if (systemTheme === 'not-ready') return 'light';
    if (themeMode !== 'default') return themeMode;
    return systemTheme;
  })();

  return theme;
}
