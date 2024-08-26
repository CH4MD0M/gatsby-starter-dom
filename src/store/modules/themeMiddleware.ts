import { Middleware } from '@reduxjs/toolkit';
import { setValue } from '@utils/storage';

export const themeMiddleware: Middleware = () => next => action => {
  if (action.type === 'darkMode/setTheme') {
    const { themeMode, saveToLocalStorage } = action.payload;
    if (saveToLocalStorage) {
      setValue('themeMode', themeMode);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.dataset.theme = themeMode;
    }
  }
  next(action);
};
