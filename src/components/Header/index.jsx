import React from "react";
import { Link } from "gatsby";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

import Links from "../Links";
import ToggleButton from "../ToggleButton";

// CSS
import { Wrapper, NavTitle, ToggleContainer, ThemeToggleButton } from "./style";
import { FaBars } from "react-icons/fa";

const Header = ({ title, toggle, themeMode, toggleTheme }) => {
  const breakpoints = useBreakpoint();

  return (
    <Wrapper>
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
