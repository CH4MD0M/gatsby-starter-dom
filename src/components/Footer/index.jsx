import React from "react";

// CSS
import * as S from "./style";

const Footer = () => {
  return (
    <S.Wrapper>
      <p>&copy; {new Date().getFullYear()}, ch4md0m All rights reserved.</p>
    </S.Wrapper>
  );
};

export default Footer;
