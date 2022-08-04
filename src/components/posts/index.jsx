import React from "react";
import Post from "./post";

import "./style.scss";

const Posts = ({ posts, title }) => {
  return (
    <section className="posts">
      <h3 className="posts-title">{title}</h3>
      <div className="posts-center">
        <article>
          {posts.map((post) => {
            return <Post key={post.id} {...post} />;
          })}
        </article>
      </div>
    </section>
  );
};

export default Posts;
