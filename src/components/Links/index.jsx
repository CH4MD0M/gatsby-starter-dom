import React from "react";
import { Link } from "gatsby";

const Links = ({ styleClass, children }) => {
  return (
    <div className={styleClass}>
      <Link to="/" className="page-link">
        <span />
        <span />
        <span />
        <span />
        Posts
      </Link>
      {children}

      <Link to="/about" className="page-link">
        <span />
        <span />
        <span />
        <span />
        About
      </Link>
    </div>
  );
};

export default Links;
