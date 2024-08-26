import { useState, Dispatch, SetStateAction, useEffect } from 'react';
import { useDebounce } from './useDebounce';
import { getLocalStorage, setLocalStorage } from '@utils/storage';

export const useSearchInput = <T>(
  key: string,
  defaultValue: T,
  delay: number = 500,
): [T, T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    const stickyValue = getLocalStorage<T>(key);
    return stickyValue || defaultValue;
  });

  const debouncedValue = useDebounce(value, delay);

  useEffect(() => {
    setLocalStorage(key, debouncedValue);
  }, [key, debouncedValue]);

  return [value, debouncedValue, setValue];
};
