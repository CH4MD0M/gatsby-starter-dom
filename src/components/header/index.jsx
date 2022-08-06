import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "gatsby";

import Links from "../Links";

import { Wrapper, NavTitle, ToggleContainer } from "./style";
import { FaBars } from "react-icons/fa";

const Header = ({ title, toggle }) => {
  const isMediumSize = useMediaQuery({ query: "(max-width: 768px" });
  const isDesktopSize = useMediaQuery({ query: "(min-width: 768px" });
  return (
    <Wrapper>
      <NavTitle>
        <Link to="/">{title}</Link>
      </NavTitle>

      {isMediumSize && (
        <ToggleContainer>
          <button className="toggle-btn" onClick={toggle}>
            <FaBars />
          </button>
        </ToggleContainer>
      )}
      {isDesktopSize && <Links styleClass="nav-links" />}
    </Wrapper>
  );
};

export default Header;
