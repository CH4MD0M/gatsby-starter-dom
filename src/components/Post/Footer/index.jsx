import React from 'react';

import Divider from '../../Divider';
import PostNavigator from './PostNavigator';
import Bio from '../../Bio';
import Comments from './Comments';

const Footer = ({ pageContext }) => {
  return (
    <>
      <Bio />
      <Divider mt="0" />
      <PostNavigator pageContext={pageContext} />
      <Comments />
    </>
  );
};

export default Footer;
