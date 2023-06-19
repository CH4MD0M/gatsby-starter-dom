export function getCurrentTheme() {
  let currentTheme;
  if (typeof document !== 'undefined') {
    currentTheme = document.documentElement.dataset.theme;
  }
  return currentTheme as ThemeMode;
}
