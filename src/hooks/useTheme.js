import { useState, useEffect } from "react";

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
