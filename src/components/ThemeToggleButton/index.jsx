import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import useTheme from "../../hooks/useTheme";

// CSS
import * as S from "./style";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggleButton = () => {
  const { theme, themeToggleHandler: toggleTheme } = useTheme();

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
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </motion.div>
      </AnimatePresence>
    </S.ToggleWrapper>
  );
};

export default ThemeToggleButton;
