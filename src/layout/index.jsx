import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import { useSiteMetaData } from '../hooks/useSiteMetaData';
import { useThemeEffect } from '../hooks/useThemeEffect';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThemeToggleButton from '../components/ThemeToggleButton';
import { variants } from '../utils/framer';

// CSS
import * as S from './style';
import theme from '../style/variables';
import GlobalStyle from '../style/globalStyle';

const Layout = ({ children }) => {
  const data = useSiteMetaData();
  const { title, author } = data.site.siteMetadata;

  useThemeEffect();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar title={title} />
      <AnimatePresence exitBeforeEnter>
        <S.Wrapper
          key={children}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          {children}
        </S.Wrapper>
      </AnimatePresence>
      <ThemeToggleButton />
      <Footer author={author} />
    </ThemeProvider>
  );
};

export default Layout;
