import React from "react";
import { Link } from "gatsby";

// CSS
import * as S from "./style";

const PostCard = ({ right, node }) => {
  const { slug } = node;
  const { title } = node?.frontmatter;

  return (
    <S.PostCardWrapper>
      <Link to={`/${slug}`}>{title}</Link>
    </S.PostCardWrapper>
  );
};

const PostNavigator = ({ pageContext }) => {
  const { previous, next } = pageContext;

  return (
    <S.NavigatorWrapper>
      {previous ? <PostCard node={previous} /> : <div></div>}
      {next && <PostCard right node={next} />}
    </S.NavigatorWrapper>
  );
};

export default PostNavigator;
