import React from "react";

import Divider from "../../Divider";
import CategoryLabel from "../../CategoryLabel";

// CSS
import * as S from "./style";

const Header = ({ category, title, author, date }) => {
  return (
    <S.HeaderWrapper>
      <CategoryLabel category={category} isLink="true" />
      <S.Title>{title}</S.Title>
      <S.Information>
        <S.Author> {author} </S.Author>
        <S.Date>· {date} </S.Date>
      </S.Information>
      <Divider />
    </S.HeaderWrapper>
  );
};

export default Header;
