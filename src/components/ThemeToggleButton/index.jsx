import React from 'react';
import { useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';

import { setTheme } from '../../store/modules/darkMode';

// CSS
import * as S from './style';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggleButton = () => {
  const dispatch = useDispatch();
  const themeMode = useTheme();

  const themeToggleHandler = () => {
    if (!themeMode) return;
    dispatch(themeMode === 'light' ? setTheme('dark') : setTheme('light'));
  };

  return (
    <S.ToggleWrapper onClick={themeToggleHandler}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          key={themeMode}
          initial={{ rotate: -180, opacity: 1 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {themeMode === 'dark' ? <FaSun /> : <FaMoon />}
        </motion.div>
      </AnimatePresence>
    </S.ToggleWrapper>
  );
};

export default ThemeToggleButton;
