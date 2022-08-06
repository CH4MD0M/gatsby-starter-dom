import React from "react";
import PostPreview from "../PostPreview";
import { Wrapper } from "./style";

const Posts = ({ posts, title }) => {
  return (
    <Wrapper>
      <h3 className="posts-title">{title}</h3>
      <article>
        {posts.map((post) => {
          return <PostPreview key={post.id} {...post} />;
        })}
      </article>
    </Wrapper>
  );
};

export default Posts;
