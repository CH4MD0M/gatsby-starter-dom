import React from "react";
import { FaBars } from "react-icons/fa";

import Links from "../Links";
import SocialLinks from "../../components/SocialLinks";

import "./style.scss";
import { Link } from "gatsby";

const Header = ({ title, toggle }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-title">
          <Link to="/">{title}</Link>
        </div>
        <div className="nav-header">
          <button className="toggle-btn" onClick={toggle}>
            <FaBars />
          </button>
        </div>
        <Links styleClass="nav-links" />
      </div>
    </nav>
  );
};

export default Header;
