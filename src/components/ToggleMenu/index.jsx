import React from "react";
import { motion } from "framer-motion";

// CSS
import * as S from "./style";

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
      <motion.a href="/categories" variants={itemVariants}>
        categories
      </motion.a>

      <motion.a href="/about" variants={itemVariants}>
        about
      </motion.a>
    </S.ToggleMenuWrapper>
  );
};

export default ToggleMenu;
