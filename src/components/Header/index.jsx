import React from "react";
import { Link } from "gatsby";

import ThemeToggleButton from "../ThemeToggleButton";
import { title } from "../../../blog-config";

// CSS
import * as S from "./style";
import { FaBars } from "react-icons/fa";

const Header = ({ menuToggle }) => {
  return (
    <S.FixedWrapper>
      <S.HeaderWrapper>
        <S.NavTitle>
          <Link to="/">{title}</Link>
        </S.NavTitle>

        <S.Menu>
          <S.LinksWrapper>
            <Link to="/categories">categories</Link>
            <Link to="/about">about</Link>
          </S.LinksWrapper>
          <ThemeToggleButton />
          <S.MenuIcon onClick={menuToggle}>
            <FaBars />
          </S.MenuIcon>
        </S.Menu>
      </S.HeaderWrapper>
    </S.FixedWrapper>
  );
};

export default Header;
