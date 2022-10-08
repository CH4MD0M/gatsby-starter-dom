import React from "react";
import { Link } from "gatsby";

// CSS
import * as S from "./style";

const Links = ({ styleClass, children }) => {
  return (
    <S.Wrapper>
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
    </S.Wrapper>
  );
};

export default Links;
