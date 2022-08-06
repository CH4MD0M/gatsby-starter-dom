import React from "react";
import { Link } from "gatsby";
import { Wrapper } from "./style";

const Links = ({ children }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Links;
