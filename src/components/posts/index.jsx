import React from "react";
import PostPreview from "../PostPreview";
import { Wrapper } from "./style";

const Posts = ({ category, posts }) => {
  const filteredPosts = posts.filter(
    (post) => category === "all" || post.frontmatter.category === category
  );

  return (
    <Wrapper>
      <article>
        {filteredPosts.map((post) => {
          return <PostPreview key={post.id} post={post} />;
        })}
      </article>
    </Wrapper>
  );
};

export default Posts;
