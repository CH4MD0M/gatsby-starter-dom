import React from 'react';
import { navigate } from 'gatsby';

// CSS
import * as S from './style';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';

const PostCard = ({ right, node }) => {
  const { slug } = node.fields;
  const { title } = node.frontmatter;

  return (
    <S.PostCardWrapper right={right} onClick={() => navigate(slug)}>
      <S.FlexWrapper>
        <S.Icon>{right ? <BsArrowRightCircle /> : <BsArrowLeftCircle />}</S.Icon>
        <S.ButtonTextWrapper>
          <S.ButtonLabel>{right ? '다음 포스트' : '이전 포스트'}</S.ButtonLabel>
          <S.ButtonTitle>{title}</S.ButtonTitle>
        </S.ButtonTextWrapper>
      </S.FlexWrapper>
    </S.PostCardWrapper>
  );
};

const PostNavigator = ({ pageContext }) => {
  const { previous, next } = pageContext;

  return (
    <S.NavigatorWrapper>
      {previous ? <PostCard node={previous} /> : <div />}
      {next && <PostCard right node={next} />}
    </S.NavigatorWrapper>
  );
};

export default PostNavigator;
