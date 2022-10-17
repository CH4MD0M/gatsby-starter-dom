import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

// CSS
import * as S from "./style";

const PostMarkdown = ({ body }) => {
  return (
    <S.MDWrapper id="post-contents">
      <MDXRenderer>{body}</MDXRenderer>
    </S.MDWrapper>
  );
};

export default PostMarkdown;
