import React from 'react';
import { PageProps } from 'gatsby';
import { AnimatePresence } from 'framer-motion';

import { useSiteMetaData } from '@hooks/useSiteMetaData';
import { useSysThemeEffect } from '@hooks/useSysThemeEffect';
import { pageVariants } from '@utils/framer';

import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import ThemeToggleButton from '@components/ThemeToggleButton';

// CSS
import * as S from './style';

interface LayoutProps {
  children: React.ReactNode;
  location?: PageProps['location'];
}

const Layout = ({ children, location }: LayoutProps) => {
  useSysThemeEffect();

  const data = useSiteMetaData();
  const { title, author } = data.site.siteMetadata;

  return (
    <>
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
    </>
  );
};

export default Layout;
