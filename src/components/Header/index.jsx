import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

import Links from "../Links";
import useTheme from "../../hooks/useTheme";
import { title } from "../../../blogConfig";

// CSS
import {
  Wrapper,
  Inner,
  Menu,
  NavTitle,
  ToggleWrapper,
  IconContainer,
  MenuContainer,
} from "./style";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";

const Header = ({ menuToggle }) => {
  const breakpoints = useBreakpoint();
  const [scrollY, setScrollY] = useState();
  const [hidden, setHidden] = useState(false);
  const { theme, themeToggleHandler: toggleTheme } = useTheme();

  const detectScrollDirection = () => {
    if (scrollY >= window.scrollY) {
      // scroll up
      setHidden(false);
    } else if (scrollY < window.scrollY && 100 <= window.scrollY) {
      // scroll down
      setHidden(true);
    }

    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", detectScrollDirection);

    return () => {
      window.removeEventListener("scroll", detectScrollDirection);
    };
  }, [scrollY]);

  useEffect(() => {
    setScrollY(window.scrollY);
  }, []);

  return (
    <Wrapper isHidden={hidden}>
      <Inner>
        <NavTitle>
          <Link to="/">{title}</Link>
        </NavTitle>

        <Menu>
          {breakpoints.mdMin && <Links styleClass="nav-links" />}
          <ToggleWrapper>
            <IconContainer theme={theme}>
              <FaSun onClick={toggleTheme} />
              <FaMoon onClick={toggleTheme} />
            </IconContainer>
          </ToggleWrapper>

          {breakpoints.md && (
            <MenuContainer>
              <button className="toggle-btn" onClick={menuToggle}>
                <FaBars />
              </button>
            </MenuContainer>
          )}
        </Menu>
      </Inner>
    </Wrapper>
  );
};

export default Header;
