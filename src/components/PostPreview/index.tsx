import React from 'react';
import { Link } from 'gatsby';

import TagLabel from '@components/TagLabel';
import Divider from '@components/Divider';

// CSS
import * as S from './style';

interface PostPreviewProps {
  post: Queries.IndexPageQuery['allMdx']['nodes'][0];
}

const PostPreview = ({ post }: PostPreviewProps) => {
  const { id, excerpt } = post;
  const { slug } = post.fields;
  const { title, date, tags } = post.frontmatter;

  return (
    <>
      <S.Wrapper id={id}>
        <Link to={`${slug}`}>
          <S.PostTitle>{title}</S.PostTitle>
        </Link>
        <S.PostDescription>{excerpt}</S.PostDescription>
        <TagLabel tagList={tags} />
        <S.Date>{date}</S.Date>
      </S.Wrapper>
      <Divider mt="0" mb="0" />
    </>
  );
};

export default PostPreview;
