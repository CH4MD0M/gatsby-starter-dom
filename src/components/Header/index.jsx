import React from "react";
import { Link } from "gatsby";

import ThemeToggleButton from "../ThemeToggleButton";
import { title } from "../../../blog-config";

// CSS
import * as S from "./style";
import { FaBars } from "react-icons/fa";

const Header = ({ menuToggle }) => {
  return (
    <S.Wrapper>
      <S.Inner>
        <S.NavTitle>
          <Link to="/">{title}</Link>
        </S.NavTitle>
        <S.LinksWrapper>
          <ThemeToggleButton />
          <S.MenuIcon onClick={menuToggle}>
            <FaBars />
          </S.MenuIcon>
        </S.LinksWrapper>
      </S.Inner>
    </S.Wrapper>
  );
};

export default Header;
