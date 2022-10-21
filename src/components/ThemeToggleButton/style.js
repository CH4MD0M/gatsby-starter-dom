import styled from "styled-components";
import { motion } from "framer-motion";

export const ToggleWrapper = styled(motion.div)`
  & > div {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    transition: fill 0.3s;
  }
  svg {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
  svg path {
    fill: var(--iconColor);
    transition: fill 0.3s;
  }
  svg:hover path {
    fill: var(--textColor);
  }
`;
