import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import PostPreview from "../PostPreview";
import { variants } from "../../utils/framer";

const Posts = ({ category, posts, count }) => {
  const filteredPosts = posts
    .filter(
      (post) => category === "all" || post.frontmatter.category === category
    )
    .slice(0, count);

  return (
    <Wrapper
      key={window.location.href}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      {filteredPosts.map((post) => {
        return <PostPreview key={post.id} post={post} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  display: block;
  width: 100%;
`;

export default Posts;
