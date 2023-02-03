import styled from 'styled-components';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Post = styled.article`
  font-size: 17.6px;
  line-height: 1.7;
`;

Post.Header = Header;
Post.Body = Body;
Post.Footer = Footer;

export default Post;
