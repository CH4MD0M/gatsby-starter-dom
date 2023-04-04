import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'gatsby';
import { AnimatePresence, useCycle } from 'framer-motion';

import ToggleMenu from '../ToggleMenu';

// CSS
import * as S from './style';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ title }: { title: string }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [hidden, setHidden] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const detectScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setHidden(currentScrollY > 400 && currentScrollY > scrollY);
    setScrollY(currentScrollY);
  }, [scrollY]);

  useEffect(() => {
    window.addEventListener('scroll', detectScroll);
    return () => {
      window.removeEventListener('scroll', detectScroll);
    };
  }, [detectScroll]);

  return (
    <>
      <S.FixedWrapper isHidden={hidden}>
        <S.NavWrapper>
          <S.NavTitle>
            <Link to="/">{title}</Link>
          </S.NavTitle>

          <S.Menu>
            <S.LinksWrapper>
              <Link to="/categories">categories</Link>
              <Link to="/tags">tags</Link>
              <Link to="/search">search</Link>
            </S.LinksWrapper>
            <S.MenuIcon onClick={() => toggleOpen()}>
              <FaBars />
            </S.MenuIcon>
          </S.Menu>
        </S.NavWrapper>
      </S.FixedWrapper>
      <AnimatePresence>{isOpen && <ToggleMenu />}</AnimatePresence>
      {isOpen && <S.Background onClick={() => toggleOpen()} />}
    </>
  );
};

export default Navbar;
