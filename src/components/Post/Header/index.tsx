import React from 'react';
import { Link } from 'gatsby';
import { FaCalendarAlt } from 'react-icons/fa';

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
  return (
    <S.HeaderWrapper>
      <S.Title>{title}</S.Title>
      <S.Information>
        <S.Date>
          <FaCalendarAlt /> {date}
        </S.Date>
        {category && (
          <S.CategoryLabel>
            <Link to={`/categories?q=${category}`}>{category}</Link>
          </S.CategoryLabel>
        )}
      </S.Information>
      <S.TagLabelWrapper>
        {tags && <TagLabel tagList={tags} />}
      </S.TagLabelWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
