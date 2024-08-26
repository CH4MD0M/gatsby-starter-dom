import React from 'react';
import { Link } from 'gatsby';

// CSS
import * as S from './style';

interface TagListProps {
  selectedTag: string;
  tags: {
    fieldValue: string;
    totalCount: number;
  }[];
}

interface TagProps {
  title: string;
  count: number;
  selectedTag: string;
}

const Tag = ({ title: tagName, count, selectedTag }: TagProps) => {
  return (
    <Link to={selectedTag === tagName ? '/tags' : `/tags?q=${tagName}`}>
      <S.TagItem active={selectedTag === tagName}>
        <S.TagName>{tagName}</S.TagName>
        <S.TagCount>({count})</S.TagCount>
      </S.TagItem>
    </Link>
  );
};

const TagList = ({ selectedTag, tags }: TagListProps) => {
  if (!tags) return null;

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
