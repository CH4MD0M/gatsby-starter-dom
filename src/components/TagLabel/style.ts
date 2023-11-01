import styled from 'styled-components';

export const TagListWrapper = styled.div`
  width: 100%;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
`;

export const TagItem = styled.div`
  box-sizing: border-box;
  display: inline-block;
  margin: 0.5rem;
  margin-left: 0;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  color: var(--linkColor);
  background: var(--tagBgColor);
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  transition: background 0.25s;

  &:hover {
    background: var(--hoveredTagBgColor);
  }
  a {
    color: inherit;
  }
`;
