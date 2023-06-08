export const StorageType = {
  LOCAL: 'localStorage',
  SESSION: 'sessionStorage',
} as const;

export type StorageKeyType = (typeof StorageType)[keyof typeof StorageType];

const setValue = (storageType: StorageKeyType, key: string, value: any) => {
  const serializedValue = JSON.stringify(value);
  if (storageType === StorageType.LOCAL) {
    localStorage.setItem(key, serializedValue);
  } else if (storageType === StorageType.SESSION) {
    sessionStorage.setItem(key, serializedValue);
  }
};

const getValue = (storageType: StorageKeyType, key: string): any => {
  let value;
  if (storageType === StorageType.LOCAL) {
    value = localStorage.getItem(key);
  } else if (storageType === StorageType.SESSION) {
    value = sessionStorage.getItem(key);
  }
  return value ? JSON.parse(value) : null;
};

const removeValue = (storageType: StorageKeyType, key: string) => {
  if (storageType === StorageType.LOCAL) {
    localStorage.removeItem(key);
  } else if (storageType === StorageType.SESSION) {
    sessionStorage.removeItem(key);
  }
};

export { setValue, getValue, removeValue };
