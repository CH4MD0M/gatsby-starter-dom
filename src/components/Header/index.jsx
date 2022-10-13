import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

import Links from "../Links";
import useTheme from "../../hooks/useTheme";
import useScroll from "../../hooks/useScroll";
import { title } from "../../../blog-config";

// CSS
import * as S from "./style";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";

const Header = ({ menuToggle }) => {
  const breakpoints = useBreakpoint();
  const { theme, themeToggleHandler: toggleTheme } = useTheme();
  const hidden = useScroll();

  return (
    <S.Wrapper isHidden={hidden}>
      <S.Inner>
        <S.NavTitle>
          <Link to="/">{title}</Link>
        </S.NavTitle>

        <S.LinksWrapper>
          {breakpoints.mdMin && <Links styleClass="nav-links" />}
          <S.ToggleWrapper>
            <S.IconContainer theme={theme}>
              <FaSun onClick={toggleTheme} />
              <FaMoon onClick={toggleTheme} />
            </S.IconContainer>
          </S.ToggleWrapper>

          {breakpoints.md && (
            <S.MenuIcon onClick={menuToggle}>
              <FaBars />
            </S.MenuIcon>
          )}
        </S.LinksWrapper>
      </S.Inner>
    </S.Wrapper>
  );
};

export default Header;
