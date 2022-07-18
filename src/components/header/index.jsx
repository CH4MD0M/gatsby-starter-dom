import React from "react";
import { FaBars } from "react-icons/fa";

import Links from "../../constants/Links";
import SocialLinks from "../../constants/SocialLinks";

import "./style.scss";

const Header = ({ toggle }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <button className="toggle-btn" onClick={toggle}>
            <FaBars />
          </button>
        </div>
        <Links styleClass="nav-links" />
        <SocialLinks styleClass="nav-icons" />
      </div>
    </nav>
  );
};

export default Header;
