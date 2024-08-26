import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ToggleWrapper = styled(motion.div)`
  position: fixed;
  padding: 1rem;
  right: 35px;
  bottom: 30px;
  background: var(--themeToggleBtnBgColor);
  box-shadow: var(--themeToggleBtnShadow);
  border-radius: 999px;
  transition: background 0.35s;
  cursor: pointer;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
    fill: var(--themeToggleIconColor);
  }

  &:hover {
    background: var(--hoveredThemeToggleBtnBgColor);
  }

  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    right: 20px;
    bottom: 20px;
  }
`;
