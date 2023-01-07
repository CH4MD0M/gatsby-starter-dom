import React from "react";

import { motion } from "framer-motion";

// CSS
import * as S from "./style";
import { Link } from "gatsby";

const menuVariants = {
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.2, staggerDirection: -1, delay: 0.6 },
  },
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.2, staggerDirection: 1 },
  },
};

const itemVariants = {
  closed: { opacity: 0, x: -10, transition: { duration: 0.2 } },
  open: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

const ToggleMenu = () => {
  return (
    <S.ToggleMenuWrapper
      initial="closed"
      animate="open"
      exit="closed"
      variants={menuVariants}
    >
      <Link to="/categories">
        <motion.div variants={itemVariants}>categories</motion.div>
      </Link>
      <Link to="/tags">
        <motion.div variants={itemVariants}>tags</motion.div>
      </Link>
      <Link to="/about">
        <motion.div variants={itemVariants}>about</motion.div>
      </Link>
    </S.ToggleMenuWrapper>
  );
};

export default ToggleMenu;
