import React from "react";
import { Link } from "gatsby";
import { Wrapper } from "./style";

const Links = ({ styleClass, children }) => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default Links;
