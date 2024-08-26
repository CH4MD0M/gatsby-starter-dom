import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.div)`
  max-width: ${({ theme }) => theme.maxWidth};
  min-height: calc(100vh - 30rem);
  margin: 10rem auto 0;

  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    padding: 0 1.5rem;
  }
`;
