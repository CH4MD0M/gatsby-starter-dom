export const pageVariants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

export const menuVariants = {
  closed: {
    opacity: 0,
    transition: { staggerChildren: 0.2, staggerDirection: -1, delay: 0.6 },
  },
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.2, staggerDirection: 1 },
  },
};

export const menuItemVariants = {
  closed: { opacity: 0, x: -10, transition: { duration: 0.2 } },
  open: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};
