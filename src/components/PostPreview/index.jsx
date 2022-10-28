import React from "react";
import { Link } from "gatsby";
import Divider from "../Divider";
// CSS
import * as S from "./style";

const PostPreview = ({ post }) => {
  const { id, excerpt } = post;
  const { slug } = post.fields;
  const { title, date } = post.frontmatter;

  return (
    <>
      <S.Wrapper id={id}>
        <Link to={`${slug}`}>
          <S.PostTitle>{title}</S.PostTitle>
        </Link>
        <S.Date>{date}</S.Date>
        <S.PostDescription>{excerpt}</S.PostDescription>
      </S.Wrapper>
      <Divider mt="0" mb="2rem" />
    </>
  );
};

export default PostPreview;
