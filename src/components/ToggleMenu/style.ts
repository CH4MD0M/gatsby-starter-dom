import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ToggleMenuWrapper = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: start;
  top: 0;
  height: 100vh;
  width: 50%;
  right: 0;
  padding: 1.4rem 0.8rem;
  background: var(--bgColor);
  font-size: 3.6rem;
  text-transform: capitalize;
  overflow: hidden;
  box-shadow: 0px 5px 5px 0px rgba(100, 100, 100, 0.85);
  z-index: 400;

  a {
    margin: 0.2rem 0;
    padding: 0.8rem 1rem;
    width: 100%;
    color: var(--textColor);

    &:hover {
      color: var(--activeMenuTextColor);
    }
  }

  @media screen and (min-width: ${props => props.theme.responsive.sm}) {
    display: none;
  }
`;
