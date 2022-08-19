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

      {breakpoints.md ? (
        <>
          <ToggleButton themeMode={themeMode} toggleTheme={toggleTheme} />
          <ToggleContainer>
            <button className="toggle-btn" onClick={toggle}>
              <FaBars />
            </button>
          </ToggleContainer>
        </>
      ) : (
        <>
          <Links styleClass="nav-links" />

          <ToggleButton themeMode={themeMode} toggleTheme={toggleTheme} />
        </>
      )}
    </Wrapper>
  );
};

export default Header;
