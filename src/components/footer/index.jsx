import React from "react";
import SocialLinks from "../../constants/SocialLinks";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-icons" />
        <p>
          &copy;{new Date().getFullYear()} <a>ch4md0m</a>. Built with{" "}
          <a>Gatsby-starter-blog</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
