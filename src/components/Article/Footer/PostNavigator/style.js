import styled from "styled-components";

export const NavigatorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem 0;

  @media screen and (max-width: ${(props) => props.theme.responsive.md}) {
    margin-bottom: 80px;
    padding: 0 12.8px;
    flex-direction: column;

    & > div:first-child {
      margin-bottom: 12.8px;
    }
  }
`;

export const PostCardWrapper = styled.div`
  background: var(--postNavButtonBackground);
  max-width: 30rem;
  flex-basis: 30rem;
  border-radius: 8px;
  padding: 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  a {
    color: var(--textColor);
    font-weight: 500;
  }
  transition: background 0.2s;

  &:hover {
    background: var(--hoveredPostNavButtonBackground);
  }
`;
