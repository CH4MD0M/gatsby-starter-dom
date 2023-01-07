import React from "react";
import { Link } from "gatsby";
import { AnimatePresence, useCycle } from "framer-motion";

import ThemeToggleButton from "../ThemeToggleButton";
import ToggleMenu from "../ToggleMenu";

// CSS
import * as S from "./style";
import { FaBars } from "react-icons/fa";

const Header = ({ title }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <S.FixedWrapper>
        <S.HeaderWrapper>
          <S.NavTitle>
            <Link to="/">{title}</Link>
          </S.NavTitle>

          <S.Menu>
            <S.LinksWrapper>
              <Link to="/categories">categories</Link>
              <Link to="/tags">tags</Link>
              <Link to="/about">about</Link>
            </S.LinksWrapper>
            <ThemeToggleButton />
            <S.MenuIcon onClick={toggleOpen}>
              <FaBars />
            </S.MenuIcon>
          </S.Menu>
        </S.HeaderWrapper>
      </S.FixedWrapper>

      <AnimatePresence>{isOpen && <ToggleMenu />}</AnimatePresence>
      {isOpen && <S.Background onClick={toggleOpen} />}
    </>
  );
};

export default Header;
