import React from 'react';
import { motion } from 'framer-motion';

import { menuVariants, menuItemVariants } from '@utils/framer';

// CSS
import * as S from './style';
import { Link } from 'gatsby';

const ToggleMenu = () => {
  return (
    <S.ToggleMenuWrapper
      initial="closed"
      animate="open"
      exit="closed"
      variants={menuVariants}
    >
      <Link to="/categories">
        <motion.div variants={menuItemVariants}>categories</motion.div>
      </Link>
      <Link to="/tags">
        <motion.div variants={menuItemVariants}>tags</motion.div>
      </Link>
      <Link to="/search">
        <motion.div variants={menuItemVariants}>search</motion.div>
      </Link>
    </S.ToggleMenuWrapper>
  );
};

export default ToggleMenu;
