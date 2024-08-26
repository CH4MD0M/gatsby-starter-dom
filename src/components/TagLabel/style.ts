import styled from 'styled-components';

export const TagListWrapper = styled.div`
  width: 100%;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
`;

export const TagItem = styled.div`
  display: inline-block;
  margin: 0.5rem;
  margin-left: 0;
  padding: 0.5rem 1rem;
  max-width: 150px;

  background: var(--tagBgColor);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.25s;

  &:hover {
    background: var(--hoveredTagBgColor);
  }
  a {
    color: inherit;
  }
`;
