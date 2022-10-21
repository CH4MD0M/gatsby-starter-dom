import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import { variants } from "../../utils/framer";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import Divider from "../Divider";
import PostPreview from "../PostPreview";

const PostList = ({ category = "all", postList }) => {
  const [count, setCount] = useState(10);
  const [setTarget] = useInfiniteScroll(loadPosts);

  function loadPosts() {
    setCount((prev) => {
      if (prev + 4 <= postList.length) return prev + 4;
      else return postList.length;
    });
  }

  const filteredPosts = postList
    .filter(
      (post) => category === "all" || post.frontmatter.category === category
    )
    .slice(0, count);

  useEffect(() => {
    setCount(10);
  }, [postList]);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Wrapper
        key={category}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.3 }}
      >
        {filteredPosts.map((post) => {
          return (
            <div key={post.id}>
              <PostPreview post={post} />
              <Divider mt="0" mb="2rem" />
            </div>
          );
        })}
        <div ref={setTarget} />
      </Wrapper>
    </AnimatePresence>
  );
};

const Wrapper = styled(motion.div)`
  display: block;
  width: 100%;
`;

export default PostList;
