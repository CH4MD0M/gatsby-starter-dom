import styled, { css } from 'styled-components';

interface TagItemProps {
  active: boolean;
}

export const TagItem = styled.div<TagItemProps>`
  display: inline-block;
  border-radius: 10px;
  margin: 0 0.5rem;
  margin-bottom: 1.2rem;
  padding: 0.5rem 1rem;
  color: var(--textColor);
  background: var(--tagBgColor);
  transition: background 0.25s;
  cursor: pointer;

  &:hover {
    background: var(--hoveredTagBgColor);
  }

  ${props =>
    props.active &&
    css`
      color: var(--bgColor);
      background: var(--activeTagBgColor);

      &:hover {
        background: var(--hoveredActiveTagBgColor);
      }
    `}
`;

export const TagListWrapper = styled.div`
  padding: 1rem 0;
  list-style: none;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  z-index: 200;
`;
