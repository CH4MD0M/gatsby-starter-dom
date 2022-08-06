import styled from "styled-components";

export const Wrapper = styled.section`
  margin-bottom: 4rem;

  .posts-title {
    width: fit-content;
    padding: 1.2rem 1.5rem;
    margin-bottom: 3.5rem;
    background-color: ${(props) => props.theme.colors.darkWhite};
    color: ${(props) => props.theme.colors.black};
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 10px;
    box-shadow: ${(props) => props.theme.effect.shadow};
  }
`;
