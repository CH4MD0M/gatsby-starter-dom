import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import useTheme from "../../hooks/useTheme";
import useScroll from "../../hooks/useScroll";
import { throttle } from "../../utils/throttle";
import { title } from "../../../blog-config";

// CSS
import * as S from "./style";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";

const Header = ({ menuToggle }) => {
  const { theme, themeToggleHandler: toggleTheme } = useTheme();

  return (
    <S.Wrapper>
      <S.Inner>
        <S.NavTitle>
          <Link to="/">{title}</Link>
        </S.NavTitle>
        <S.LinksWrapper>
          <S.ToggleWrapper>
            <S.IconContainer theme={theme}>
              <FaSun onClick={toggleTheme} />
              <FaMoon onClick={toggleTheme} />
            </S.IconContainer>
          </S.ToggleWrapper>
          <S.MenuIcon onClick={menuToggle}>
            <FaBars />
          </S.MenuIcon>
        </S.LinksWrapper>
      </S.Inner>
    </S.Wrapper>
  );
};

export default Header;
