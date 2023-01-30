import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  max-width: ${({ theme }) => theme.sizes.maxWidth};
  min-height: calc(100vh - 20rem); // margin-top(10rem), footer-height(10rem)
  margin: 10rem auto 0;
  padding: 0 ${({ theme }) => theme.sideSpace.sm};

  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    padding: 0 1.5rem;
  }
`;
