import React, { useState } from "react";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { graphql, useStaticQuery } from "gatsby";
import useTheme from "../hooks/useTheme";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

// CSS
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../style/theme";
import GlobalStyle from "../style/globalStyle";

const Layout = ({ children }) => {
  const [themeMode, themeToggleHandler] = useTheme();
  const theme = themeMode === "dark" ? darkTheme : lightTheme;

  const breakpoints = useBreakpoint();
  const data = useStaticQuery(query);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header
        title={data.site.siteMetadata.title}
        toggle={toggle}
        themeMode={themeMode}
        toggleTheme={themeToggleHandler}
      />

      <Wrapper>
        {breakpoints.md && <Sidebar isOpen={isOpen} toggle={toggle} />}
        <main>{children}</main>
      </Wrapper>
      <Footer />

      <GlobalStyle />
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  min-height: calc(100vh - 10rem - 250px);
  margin: 10rem auto 0;
  padding: 0 ${({ theme }) => theme.sideSpace.large};

  @media screen and (max-width: ${({ theme }) => theme.responsive.large}) {
    max-width: 760px;
    margin-top: 2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.responsive.small}) {
    padding: 0 ${({ theme }) => theme.sideSpace.small};
  }
`;

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Layout;
