import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

import Links from "../Links";
import ToggleButton from "../ToggleButton";

// CSS
import { Wrapper, NavTitle, ToggleContainer } from "./style";
import { FaBars } from "react-icons/fa";

const Header = ({ title, toggle, themeMode, toggleTheme }) => {
  const breakpoints = useBreakpoint();
  const [scrollY, setScrollY] = useState();
  const [hidden, setHidden] = useState(false);

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
      <NavTitle>
        <Link to="/">{title}</Link>
      </NavTitle>

      {breakpoints.mdMin && <Links styleClass="nav-links" />}
      <ToggleButton themeMode={themeMode} toggleTheme={toggleTheme} />
      {breakpoints.md && (
        <ToggleContainer>
          <button className="toggle-btn" onClick={toggle}>
            <FaBars />
          </button>
        </ToggleContainer>
      )}
    </Wrapper>
  );
};

export default Header;
