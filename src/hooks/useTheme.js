import { useState, useEffect } from "react";

const getCurrentTheme = () => {
  let initTheme = "light";

  if (typeof window !== "undefined") {
    const isBrowserDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const localSettingTheme = window.localStorage.getItem("theme");

    if (isBrowserDarkMode && !localSettingTheme) initTheme = "dark";
    else if (localSettingTheme) initTheme = localSettingTheme;
  }

  return initTheme;
};

const useTheme = () => {
  let websiteTheme;
  if (typeof window !== "undefined") {
    websiteTheme = window.__theme;
  }

  const [theme, setTheme] = useState(websiteTheme);

  useEffect(() => {
    setTheme(window.__theme);
    window.__onThemeChange = () => {
      setTheme(window.__theme);
    };
  }, []);

  const themeToggleHandler = () => {
    window.__setPreferredTheme(websiteTheme === "dark" ? "light" : "dark");
  };

  return [theme, themeToggleHandler];
};

export default useTheme;
