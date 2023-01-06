import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import PrismSetup from "../../../Element/PrismSetup";

// CSS
import * as S from "./style";

const components = {
  code: PrismSetup,
};

const PostMarkdown = ({ body }) => {
  return (
    <S.MDWrapper id="post-contents">
      <MDXProvider components={components}>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXProvider>
    </S.MDWrapper>
  );
};

export default PostMarkdown;
