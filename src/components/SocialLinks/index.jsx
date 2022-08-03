import React from "react";
import { FaLinkedin, FaInstagramSquare, FaGithubSquare } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import "./style.scss";
const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="https://linkedin.com">
          <AiOutlineInstagram></AiOutlineInstagram>
        </a>
      </li>
      <li>
        <a href="https://instagram.com">
          <AiOutlineInstagram className="social-icon instagram-icon"></AiOutlineInstagram>
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
