import React from "react";
import { FaLinkedin, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";

const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://linkedin.com">
          <FaLinkedin className="social-icon linkedin-icon"></FaLinkedin>
        </a>
      </li>
      <li>
        <a href="https://instagram.com">
          <FaInstagramSquare className="social-icon instagram-icon"></FaInstagramSquare>
        </a>
      </li>
      <li>
        <a href="https://github.com/ch4md0m">
          <FaGithubSquare className="social-icon github-icon"></FaGithubSquare>
        </a>
      </li>
    </ul>
  );
};
export default SocialLinks;
