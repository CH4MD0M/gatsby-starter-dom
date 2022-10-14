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
  const [hidden, setHidden] = useState(false);
  const { theme, themeToggleHandler: toggleTheme } = useTheme();
  const { scrollY, setScrollY } = useScroll(throttle(detectScroll, 500));

  function detectScroll() {
    if (scrollY >= window.scrollY) {
      // scroll up
      setHidden(false);
    } else {
      // scroll down
      setHidden(true);
    }
    setScrollY(window.scrollY);
  }

  return (
    <S.Wrapper isHidden={hidden}>
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
