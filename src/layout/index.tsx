import React from 'react';
import { PageProps } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';

import { useSiteMetaData } from '@hooks/useSiteMetaData';
import { pageVariants } from '@utils/framer';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import ThemeToggleButton from '@components/ThemeToggleButton';

// CSS
import * as S from './style';
import theme from '../style/variables';
import GlobalStyle from '../style/globalStyle';

interface LayoutProps {
  children: React.ReactNode;
  location?: PageProps['location'];
}

const Layout = ({ children, location }: LayoutProps) => {
  const data = useSiteMetaData();
  const { title, author } = data.site.siteMetadata;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar title={title} />
      <AnimatePresence exitBeforeEnter>
        <S.Wrapper
          key={location?.pathname}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={pageVariants}
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
