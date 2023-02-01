import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { AnimatePresence, useCycle } from 'framer-motion';

import ToggleMenu from '../ToggleMenu';

// CSS
import * as S from './style';
import { FaBars } from 'react-icons/fa';

const Nav = ({ title }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [hidden, setHidden] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const detectScroll = () => {
    if (window.scrollY <= scrollY) {
      setHidden(false);
    } else if (scrollY < window.scrollY && 400 <= window.scrollY) {
      setHidden(true);
    }

    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', detectScroll);
    return () => {
      window.removeEventListener('scroll', detectScroll);
    };
  }, [scrollY]);

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
            <S.MenuIcon onClick={toggleOpen}>
              <FaBars />
            </S.MenuIcon>
          </S.Menu>
        </S.NavWrapper>
      </S.FixedWrapper>
      <AnimatePresence>{isOpen && <ToggleMenu />}</AnimatePresence>
      {isOpen && <S.Background onClick={toggleOpen} />}
    </>
  );
};

export default Nav;
