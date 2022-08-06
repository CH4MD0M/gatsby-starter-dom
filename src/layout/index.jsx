import React, { useState } from "react";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { graphql, useStaticQuery } from "gatsby";

import Header from "../components/header";
import Sidebar from "../components/Sidebar";
import Categories from "../components/categories";
import Footer from "../components/footer";

// CSS
import styled, { ThemeProvider } from "styled-components";
import theme from "../style/theme";
import GlobalStyle from "../style/globalStyle";

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
        <main>{children}</main>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        {!breakpoints.md && <Categories />}
      </Wrapper>
      <Footer />

      <GlobalStyle />
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  margin: 5rem auto 0;
  padding: 0 ${({ theme }) => theme.sideSpace.large};

  @media screen and (max-width: ${({ theme }) => theme.responsive.large}) {
    max-width: 760px;
    margin-top: 1em;
  }
  @media screen and (max-width: ${({ theme }) => theme.responsive.medium}) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: ${({ theme }) => theme.responsive.small}) {
    padding: 0 ${({ theme }) => theme.sideSpace.small};
  }
`;

export default Layout;
