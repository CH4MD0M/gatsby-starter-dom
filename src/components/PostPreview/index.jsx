import React from "react";
import { Link } from "gatsby";

import CategoryLabel from "../CategoryLabel";
import PostThumbnail from "../PostThumbnail";

// CSS
import { Wrapper, PostInfo } from "./style";

const PostPreview = ({ post }) => {
  const { title, date, category, slug } = post.frontmatter;

  return (
    <Wrapper>
      <Link to={`/content/${slug}`} className="post-container">
        <PostThumbnail category={category} />
        <PostInfo>
          <header>
            <h2 className="post-title">{title}</h2>
          </header>
          <footer>
            <CategoryLabel category={category} />
            <span className="date">{date}</span>
          </footer>
        </PostInfo>
      </Link>
    </Wrapper>
  );
};

export default PostPreview;
