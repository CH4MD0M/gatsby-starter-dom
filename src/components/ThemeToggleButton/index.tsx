import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { setTheme } from '@store/modules/darkMode';
import { StorageType, setValue } from '@utils/storage';

// CSS
import * as S from './style';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggleButton = () => {
  const { themeMode } = useAppSelector(state => state.darkMode);
  const dispatch = useAppDispatch();

  const themeToggleHandler = () => {
    const nextTheme = themeMode === 'dark' ? 'light' : 'dark';
    dispatch(nextTheme === 'light' ? setTheme('light') : setTheme('dark'));
    setValue(StorageType.LOCAL, 'themeMode', nextTheme);
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
