import React from "react";
import { Link } from "gatsby";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

import Links from "../Links";

// CSS
import { Wrapper, NavTitle, ToggleContainer } from "./style";
import { FaBars } from "react-icons/fa";

const Header = ({ title, toggle }) => {
  const breakpoints = useBreakpoint();
  return (
    <Wrapper>
      <NavTitle>
        <Link to="/">{title}</Link>
      </NavTitle>

      {breakpoints.sm ? (
        <ToggleContainer>
          <button className="toggle-btn" onClick={toggle}>
            <FaBars />
          </button>
        </ToggleContainer>
      ) : (
        <Links styleClass="nav-links" />
      )}
    </Wrapper>
  );
};

export default Header;
