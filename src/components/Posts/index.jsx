import React from "react";
import PostPreview from "../PostPreview";

const Posts = ({ category, posts, count }) => {
  const filteredPosts = posts
    .filter(
      (post) => category === "all" || post.frontmatter.category === category
    )
    .slice(0, count);

  return (
    <div>
      {filteredPosts.map((post) => {
        return <PostPreview key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Posts;
