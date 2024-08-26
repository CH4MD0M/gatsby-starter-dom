import { Middleware } from '@reduxjs/toolkit';
import { setLocalStorage } from '@utils/storage';

export const themeMiddleware: Middleware = () => next => action => {
  if (action.type === 'darkMode/setTheme') {
    const { themeMode, saveToLocalStorage } = action.payload;
    if (saveToLocalStorage) {
      setLocalStorage('themeMode', themeMode);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.dataset.theme = themeMode;
    }
  }
  next(action);
};
