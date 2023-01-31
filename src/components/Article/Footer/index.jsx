import React from 'react';

import Divider from '../../Divider';
import PostNavigator from './PostNavigator';
import Bio from '../../Bio';
import Comments from './Comments';

const Footer = ({ pageContext }) => {
  return (
    <>
      <Divider mt="10rem" />
      <Bio />
      <PostNavigator pageContext={pageContext} />
      <Comments />
    </>
  );
};

export default Footer;
