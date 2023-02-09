import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setSystemTheme } from '../store/modules/darkMode';
import { useTheme } from './useTheme';

export function useThemeEffect() {
  const themeMode = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    const isSystemDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    dispatch(setSystemTheme(isSystemDark ? 'dark' : 'light'));
  }, [dispatch]);

  useEffect(() => {
    if (themeMode !== 'default')
      document.documentElement.setAttribute('data-theme', themeMode);
  }, [themeMode]);
}
