const setValue = (key: string, value: any) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
};

const getValue = (key: string): any => {
  if (typeof window !== 'undefined') {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
};

export { setValue, getValue };
