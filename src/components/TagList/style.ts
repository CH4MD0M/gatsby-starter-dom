import styled, { css } from 'styled-components';

interface TagItemProps {
  active: boolean;
}

export const TagItem = styled.div<TagItemProps>`
  box-sizing: border-box;
  display: inline-block;
  border-radius: 15px;
  margin: 0 0.5rem;
  margin-bottom: 1.2rem;
  padding: 0.5rem 1rem;
  color: var(--textColor);
  background: var(--tagBgColor);
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  transition: background 0.25s;

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
  width: 100%;
  padding: 1rem 0;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
`;
