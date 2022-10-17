import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Header from "../components/Header";
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
      <Wrapper>{children}</Wrapper>
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  min-height: calc(100vh - 6rem - 10rem);
  margin: 3rem auto 0;
  padding: 0 ${({ theme }) => theme.sideSpace.sm};

  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    padding: 0 1.5rem;
  }
`;

export default Layout;
