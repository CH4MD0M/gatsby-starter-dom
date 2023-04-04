import React from 'react';
import { Link } from 'gatsby';

import { useSiteMetaData } from '@hooks/useSiteMetaData';
import TagLabel from '@components/TagLabel';
import Divider from '@components/Divider';

// CSS
import * as S from './style';

interface HeaderProps {
  category: string;
  title: string;
  date: string;
  tags: readonly string[];
}

const Header = ({ category, title, date, tags }: HeaderProps) => {
  const data = useSiteMetaData();
  const { author } = data.site.siteMetadata;

  return (
    <S.HeaderWrapper>
      {category && (
        <S.CategoryLabel>
          <Link to={`/categories?q=${category}`}>{category}</Link>
        </S.CategoryLabel>
      )}
      <S.Title>{title}</S.Title>
      <S.Information>
        <S.Author> {author} </S.Author>
        <S.Date>· {date} </S.Date>
      </S.Information>
      {tags && <TagLabel tagList={tags} />}
      <Divider />
    </S.HeaderWrapper>
  );
};

export default Header;
