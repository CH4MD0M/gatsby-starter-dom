import React from 'react';
import { navigate } from 'gatsby';

// CSS
import * as S from './style';
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs';

interface PostNavigatorProps {
  pageContext: PostContextProps;
}

interface PostCardProps {
  right?: boolean;
  node: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
}

const PostCard = ({ right, node }: PostCardProps) => {
  const { slug } = node.fields;
  const { title } = node.frontmatter;

  return (
    <S.PostCardWrapper right={right} onClick={() => navigate(slug)}>
      <S.FlexWrapper>
        <S.Icon>
          {right ? <BsArrowRightCircle /> : <BsArrowLeftCircle />}
        </S.Icon>
        <S.ButtonTextWrapper>
          <S.ButtonLabel>{right ? '다음 포스트' : '이전 포스트'}</S.ButtonLabel>
          <S.ButtonTitle>{title}</S.ButtonTitle>
        </S.ButtonTextWrapper>
      </S.FlexWrapper>
    </S.PostCardWrapper>
  );
};

const PostNavigator = ({ pageContext }: PostNavigatorProps) => {
  const { previous: newerPost, next: olderPost } = pageContext;

  return (
    <S.NavigatorWrapper>
      {olderPost ? <PostCard node={olderPost} /> : <div />}
      {newerPost && <PostCard right node={newerPost} />}
    </S.NavigatorWrapper>
  );
};

export default PostNavigator;
