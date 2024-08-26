import { isBrowser } from './isBrowser';

const setLocalStorage = <T>(key: string, value: T): void => {
  if (isBrowser) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

const getLocalStorage = <T>(key: string): T | null => {
  if (isBrowser) {
    const value = window.localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  }
};

export { setLocalStorage, getLocalStorage };
