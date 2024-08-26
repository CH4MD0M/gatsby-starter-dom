import React, { useState, useEffect, useRef, useCallback } from 'react';

import { useInfiniteScroll } from '@hooks/useInfiniteScroll';
import PostPreview from '@components/PostPreview';

type PostListProps = {
  postList:
    | Queries.TagsPageQuery['allMdx']['nodes']
    | Queries.CategoryPageQuery['allMdx']['nodes']
    | Queries.SearchPageQuery['allMdx']['nodes'];
};

const PostList = ({ postList }: PostListProps) => {
  const [count, setCount] = useState(10);

  const loadMorePosts = useCallback(() => {
    setCount(prev => Math.min(prev + 4, postList.length));
  }, [postList.length]);

  const targetRef = useInfiniteScroll(loadMorePosts);

  useEffect(() => {
    setCount(10);
  }, [postList]);

  return (
    <>
      {postList.slice(0, count).map(post => {
        return <PostPreview key={post.id} post={post} />;
      })}
      <div ref={targetRef} />
    </>
  );
};

export default PostList;
