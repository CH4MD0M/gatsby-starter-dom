import { useEffect } from 'react';

import { useAppDispatch } from './reduxHooks';
import { setLoading, setTheme } from '@store/modules/darkMode';
import { StorageType, getValue } from '@utils/storage';

export const useThemeEffect = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoading(true));

    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersColorScheme = colorSchemeQuery.matches ? 'dark' : 'light';
    const localTheme = getValue(StorageType.LOCAL, 'themeMode');
    const initialTheme = localTheme || prefersColorScheme;

    const changeTheme = (e: MediaQueryListEvent) => {
      const newPrefersColorScheme = e.matches ? 'dark' : 'light';
      const newTheme =
        getValue(StorageType.LOCAL, 'themeMode') || newPrefersColorScheme;
      dispatch(setTheme(newTheme));
    };

    dispatch(setTheme(initialTheme));
    dispatch(setLoading(false));

    colorSchemeQuery.addEventListener('change', changeTheme);
    return () => colorSchemeQuery.removeEventListener('change', changeTheme);
  }, [dispatch]);
};
