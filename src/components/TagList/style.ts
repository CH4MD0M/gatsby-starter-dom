import styled, { css } from 'styled-components';

interface TagItemProps {
  active: boolean;
}

export const TagItem = styled.div<TagItemProps>`
  box-sizing: border-box;
  display: inline-flex;
  max-width: 150px;
  width: fit-content;
  margin: 0 0.5rem 1.2rem;
  padding: 0.5rem 1rem;
  color: var(--textColor);
  background: var(--tagBgColor);
  border-radius: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
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

export const TagName = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  margin-right: 0.2rem;
`;

export const TagCount = styled.span`
  flex-shrink: 0;
`;

export const TagListWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
`;
