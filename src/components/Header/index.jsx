import React from "react";
import { Link } from "gatsby";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

import Links from "../Links";

// CSS
import { Wrapper, NavTitle, ToggleContainer, ThemeToggleButton } from "./style";
import { FaBars } from "react-icons/fa";

const Header = ({ title, toggle, toggleTheme }) => {
  const breakpoints = useBreakpoint();

  return (
    <Wrapper>
      <NavTitle>
        <Link to="/">{title}</Link>
      </NavTitle>

      {breakpoints.md ? (
        <ToggleContainer>
          <button className="toggle-btn" onClick={toggle}>
            <FaBars />
          </button>
        </ToggleContainer>
      ) : (
        <Links styleClass="nav-links" />
      )}
      <ThemeToggleButton onClick={toggleTheme} />
    </Wrapper>
  );
};

export default Header;
