import styled, { css } from 'styled-components';

interface TocItemProps {
  ml: string;
  active: boolean;
}

export const TocItem = styled.div<TocItemProps>`
  display: block;
  margin-top: 0.4rem;
  padding: 0.2rem 0;
  padding-left: ${props => props.ml};
  font-weight: 400;
  color: var(--tocTextColor);
  border-left: 3px solid transparent;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.125s ease-in;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      background: var(--activeTocBgColor);
      border-left: 3px solid var(--activeTocBdColor);
      color: var(--hoveredTocTextColor);
    `}

  &:hover {
    color: var(--hoveredTocTextColor);
  }
`;
