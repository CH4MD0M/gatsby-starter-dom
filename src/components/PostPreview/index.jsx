import React from "react";
import { Link } from "gatsby";

import CategoryLabel from "../CategoryLabel";

// CSS
import * as S from "./style";

const PostPreview = ({ post }) => {
  const { excerpt } = post;
  const { title, date, category } = post.frontmatter;

  return (
    <S.Wrapper>
      <Link to={`/${post.slug}`}>
        <S.PostTitle>{title}</S.PostTitle>
      </Link>
      <S.Date>{date}</S.Date>
      <S.PostDescription>{excerpt}</S.PostDescription>
    </S.Wrapper>
  );
};

export default PostPreview;
