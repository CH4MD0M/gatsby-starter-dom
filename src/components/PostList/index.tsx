import React, { useState, useEffect } from 'react';

import useInfiniteScroll from '@hooks/useInfiniteScroll';
import PostPreview from '@components/PostPreview';

interface PostListProps {
  postList:
    | Queries.TagsPageQuery['allMdx']['nodes']
    | Queries.CategoryPageQuery['allMdx']['nodes']
    | Queries.SearchPageQuery['allMdx']['nodes'];
}

const PostList = ({ postList }: PostListProps) => {
  const [count, setCount] = useState(10);
  const [setTarget] = useInfiniteScroll(loadPosts);

  function loadPosts() {
    setCount(prev => {
      if (prev + 4 <= postList.length) return prev + 4;
      else return postList.length;
    });
  }

  useEffect(() => {
    setCount(10);
  }, [postList]);

  return (
    <>
      {postList.slice(0, count).map(post => {
        return <PostPreview key={post.id} post={post} />;
      })}
      <div ref={setTarget} />
    </>
  );
};

export default PostList;
