import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { graphql, useStaticQuery } from 'gatsby';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThemeToggleButton from '../components/ThemeToggleButton';
import { variants } from '../utils/framer';

// CSS
import * as S from './style';
import theme from '../style/variables';
import GlobalStyle from '../style/globalStyle';

const Layout = ({ children }) => {
  const data = useStaticQuery(pageQuery);
  const { title, author } = data.site.siteMetadata;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar title={title || `Title`} />
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
      <Footer author={author || `Author`} />
    </ThemeProvider>
  );
};

const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;

export default Layout;
