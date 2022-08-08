import React, { useState } from "react";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { graphql, useStaticQuery } from "gatsby";

import Header from "../components/header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/footer";

// CSS
import styled, { ThemeProvider } from "styled-components";
import theme from "../style/theme";
import GlobalStyle from "../style/globalStyle";
import GlobalFonts from "../font/font";

const Layout = ({ children }) => {
  const breakpoints = useBreakpoint();
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header title={data.site.siteMetadata.title} toggle={toggle} />
      <Wrapper>
        {breakpoints.md && <Sidebar isOpen={isOpen} toggle={toggle} />}
        <main>{children}</main>
      </Wrapper>
      <Footer />

      <GlobalStyle />
      <GlobalFonts />
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  min-height: calc(100vh - 10rem - 130px);
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

export default Layout;
