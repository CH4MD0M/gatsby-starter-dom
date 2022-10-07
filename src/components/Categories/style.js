import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 100px;
  margin-top: 33rem;
  width: 23rem;
  padding: 3rem;
  background: var(--contentBgColor);
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.effect.shadow};
  letter-spacing: ${(props) => props.theme.text.spacing};

  h2 {
    margin: 0 0 2.5rem;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    text-shadow: ${(props) => props.theme.colors.textShadow};
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;

export const CategoriesWrapper = styled.ul`
  display: block;
`;

export const Active = styled.li`
  margin: 1.2rem 0;
  padding: 0.5rem 1rem;
  width: fit-content;
  background: var(--linkColor);
  color: #fff;
  font-size: 1.7rem;
  font-weight: 400;
  border-radius: 10px;
  box-shadow: var(--boxShadow);
`;

export const Disabled = styled.li`
  display: block;
  width: fit-content;
  margin: 1.2rem 0;
  padding: 0.5rem 1rem;
  padding-left: 1rem;
  font-size: 1.7rem;
  font-weight: 400;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    color: #fff;
    background: var(--linkColor);
    font-weight: 400;
    color: var(--contentBgColor);
    box-shadow: var(--boxShadow);
  }
`;
