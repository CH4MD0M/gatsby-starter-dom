import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import { toggleMode } from "../../state/modules/uiSlice";

// CSS
import * as S from "./style";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggleButton = () => {
  const { darkMode } = useSelector((state) => state.ui);
  const theme = darkMode ? "dark" : "light";
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(toggleMode());
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <S.ToggleWrapper>
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          key={theme}
          initial={{ rotate: -180 }}
          animate={{ rotate: 0 }}
          exit={{ rotate: 180 }}
          transition={{ duration: 0.2 }}
          onClick={toggleTheme}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </motion.div>
      </AnimatePresence>
    </S.ToggleWrapper>
  );
};

export default ThemeToggleButton;
