import React from "react";

import PostNavigator from "./PostNavigator";
import Bio from "../../Bio";
import Comments from "./Comments";

// CSS
import * as S from "./style";

const Footer = ({ pageContext }) => {
  return (
    <S.FooterWrapper>
      <PostNavigator pageContext={pageContext} />
      <Bio path="post" />
      <Comments />
    </S.FooterWrapper>
  );
};

export default Footer;
