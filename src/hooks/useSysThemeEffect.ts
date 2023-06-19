import { useCallback, useEffect } from 'react';

import { useAppDispatch } from '@hooks/reduxHooks';
import { setTheme } from '@store/modules/darkMode';
import { getValue } from '@utils/storage';

export const useSysThemeEffect = () => {
  const dispatch = useAppDispatch();

  const checkSystemTheme = useCallback((e: MediaQueryListEvent) => {
    const newPrefersColorScheme = e.matches ? 'dark' : 'light';
    const newTheme = getValue('themeMode') || newPrefersColorScheme;
    dispatch(setTheme({ themeMode: newTheme, saveToLocalStorage: false }));
  }, []);

  useEffect(() => {
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQuery.addEventListener('change', checkSystemTheme);

    return () =>
      colorSchemeQuery.removeEventListener('change', checkSystemTheme);
  }, [checkSystemTheme, dispatch]);
};
