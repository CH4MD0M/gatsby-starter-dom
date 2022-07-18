import React from "react";
import { Link } from "gatsby";

const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/posts" className="page-link">
          Posts
        </Link>
        {children}
      </li>
      <li>
        <Link to="/about" className="page-link">
          About
        </Link>
      </li>
    </ul>
  );
};

export default Links;
