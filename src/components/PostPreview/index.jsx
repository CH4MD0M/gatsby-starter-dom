import React from "react";
import { Link } from "gatsby";

import CategoryLabel from "../CategoryLabel";
import PostThumbnail from "../PostThumbnail";

// CSS
import * as S from "./style";

const PostPreview = ({ post }) => {
  const { title, date, category, slug } = post.frontmatter;

  return (
    <S.Wrapper>
      <Link to={`/content/${slug}`} className="post-container">
        <PostThumbnail category={category} />
        <S.PostInfo>
          <header>
            <h2 className="post-title">{title}</h2>
          </header>
          <footer>
            <CategoryLabel category={category} />
            <span className="date">{date}</span>
          </footer>
        </S.PostInfo>
      </Link>
    </S.Wrapper>
  );
};

export default PostPreview;
