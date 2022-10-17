import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 2rem 1.5rem;
  list-style: none;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  z-index: 300;
  transition: top 0.5s;
  &::-webkit-scrollbar {
    display: none !important;
  }
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
