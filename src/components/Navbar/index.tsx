import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { AnimatePresence, useCycle } from 'framer-motion';

import ToggleMenu from '@components/ToggleMenu';

// CSS
import * as S from './style';
import { FaBars } from 'react-icons/fa';

interface NavbarProps {
  title: string;
}

const Navbar = ({ title }: NavbarProps) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isScrollDown, setIsScrollDown] = useState(false);

  const triggerRef = useRef();
  const navbarRef = useRef();

  const handleIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setIsScrollDown(false);
      } else {
        setIsScrollDown(true);
      }
    },
    [],
  );

  useEffect(() => {
    const triggerEl = triggerRef.current;
    const observer = new IntersectionObserver(handleIntersect);
    observer.observe(triggerEl);

    return () => {
      triggerEl && observer.unobserve(triggerEl);
    };
  });

  return (
    <>
      <S.Trgger ref={triggerRef} />
      <S.StickyWrapper ref={navbarRef} isScrollDown={isScrollDown}>
        <S.NavWrapper isScrollDown={isScrollDown}>
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
      </S.StickyWrapper>
      <AnimatePresence>{isOpen && <ToggleMenu />}</AnimatePresence>
      {isOpen && <S.Background onClick={() => toggleOpen()} />}
    </>
  );
};

export default Navbar;
