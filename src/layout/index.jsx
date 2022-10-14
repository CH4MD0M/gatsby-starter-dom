import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

// CSS
import GlobalStyle from "../style/globalStyle";
import theme from "../style/theme";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header menuToggle={toggleSidebar} />
      <Wrapper>
        <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
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
  margin: 3rem auto 0;
  padding: 0 ${({ theme }) => theme.sideSpace.large};

  @media screen and (max-width: ${({ theme }) => theme.responsive.large}) {
    max-width: 760px;
  }
  @media screen and (max-width: ${({ theme }) => theme.responsive.small}) {
    padding: 0 ${({ theme }) => theme.sideSpace.small};
  }
`;

export default Layout;
