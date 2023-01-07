import React from "react";
import { Link } from "gatsby";

// CSS
import * as S from "./style";

const Tag = ({ title, count, selectedTag }) => {
  return (
    <Link to={selectedTag === title ? "/tags" : `/tags?q=${title}`}>
      <S.TagItem active={selectedTag === title}>
        {title} ({count})
      </S.TagItem>
    </Link>
  );
};

const TagList = ({ selectedTag, tags }) => {
  return (
    <S.TagListWrapper>
      {tags.map((item, idx) => (
        <Tag
          key={idx}
          title={item.fieldValue}
          count={item.totalCount}
          selectedTag={selectedTag}
        />
      ))}
    </S.TagListWrapper>
  );
};

export default TagList;
