import { useState } from "react";

const useTheme = () => {
  const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";

  const localStorageTheme = localStorage.getItem("theme");
  const initialTheme = localStorageTheme || prefersColorScheme;

  const [theme, setTheme] = useState(initialTheme);

  const setThemeMode = (mode) => {
    localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggleHandler = () => {
    theme === "light" ? setThemeMode("dark") : setThemeMode("light");
  };

  return [theme, themeToggleHandler];
};

export default useTheme;
