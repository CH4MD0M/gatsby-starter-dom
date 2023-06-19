import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { setTheme } from '@store/modules/darkMode';

// CSS
import * as S from './style';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeIcon = {
  dark: <FaSun />,
  light: <FaMoon />,
};

const ThemeToggleButton = () => {
  const { themeMode } = useAppSelector(state => state.darkMode);
  const dispatch = useAppDispatch();

  const themeToggleHandler = () => {
    const nextTheme = themeMode === 'dark' ? 'light' : 'dark';
    dispatch(setTheme({ themeMode: nextTheme, saveToLocalStorage: true }));
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
          {ThemeIcon[themeMode]}
        </motion.div>
      </AnimatePresence>
    </S.ToggleWrapper>
  );
};

export default ThemeToggleButton;
