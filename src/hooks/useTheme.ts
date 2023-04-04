import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSystemTheme } from '@store/modules/darkMode';

export function useTheme(): DarkModeState['themeMode'] {
  const { systemTheme, themeMode } = useSelector(
    (state: RootState) => state.darkMode,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const isSystemDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    dispatch(setSystemTheme(isSystemDark ? 'dark' : 'light'));
  }, [dispatch]);

  const theme = (() => {
    if (systemTheme === 'not-ready') return 'light';
    if (themeMode !== 'default') return themeMode;
    return systemTheme;
  })();

  document.documentElement.setAttribute('data-theme', theme);

  return theme;
}
