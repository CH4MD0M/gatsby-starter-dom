import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

// CSS
const PostWrapper = styled.article`
  font-size: 17.6px;
  line-height: 1.7;
`;

interface PostProps {
  children: React.ReactNode;
}

const Post = ({ children }: PostProps) => {
  return <PostWrapper>{children}</PostWrapper>;
};

Post.Header = Header;
Post.Body = Body;
Post.Footer = Footer;

export default Post;
