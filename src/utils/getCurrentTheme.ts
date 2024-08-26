import { getLocalStorage } from './storage';
import { isBrowser } from './isBrowser';

export function getCurrentTheme(): ThemeMode {
  const localTheme = getLocalStorage<ThemeMode>('themeMode');
  if (localTheme) return localTheme;

  if (isBrowser) {
    const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const systemTheme = colorSchemeQuery.matches ? 'dark' : 'light';
    return systemTheme;
  }
}
