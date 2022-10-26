import styled from "styled-components";
import { motion } from "framer-motion";

export const ToggleMenuWrapper = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: start;
  top: 6rem;
  right: 2.5rem;
  padding: 0.5rem 0;
  width: fit-content;
  background: var(--bgColor);
  font-size: 1.6rem;
  text-transform: capitalize;
  border: 1px solid var(--toggleBdColor);
  border-radius: 6px;
  z-index: 400;

  a {
    display: block;
    margin-right: 2rem;
    padding: 0.8rem 1.2rem;
    color: var(--textColor);
    width: 100%;

    &:hover {
      background: var(--toggleBdColor);
    }
  }

  @media screen and (min-width: ${(props) => props.theme.responsive.sm}) {
    display: none;
  }
`;
