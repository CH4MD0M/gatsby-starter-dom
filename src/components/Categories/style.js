import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 2rem 1.5rem;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: ${(props) => props.theme.text.spacing};
  overflow-x: auto;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none !important;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  z-index: 300;
  list-style: none;
  transition: top 0.5s;
`;

export const Active = styled.li`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--linkColor);
  color: #fff;
  border-radius: 10px;
  box-shadow: var(--boxShadow);
`;

export const Disabled = styled.li`
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  padding-left: 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background: var(--linkColor);
    color: var(--contentBgColor);
    box-shadow: var(--boxShadow);
  }
`;
