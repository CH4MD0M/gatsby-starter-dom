import React from "react";
import { Link } from "gatsby";

// CSS
import * as S from "./style";

const TagLabel = ({ tagList }) => {
  return (
    <S.TagListWrapper>
      {tagList.map((tag, idx) => (
        <S.TagItem key={idx}>
          <Link to={`/tags?q=${tag}`}>{tag}</Link>
        </S.TagItem>
      ))}
    </S.TagListWrapper>
  );
};

export default TagLabel;
