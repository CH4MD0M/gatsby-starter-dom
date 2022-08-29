import styled from "styled-components";

export const Wrapper = styled.div`
  .category-text {
    display: inline-block;
    padding: 0.4rem 1rem;
    background: ${(props) => props.color};
    color: var(--bgColor);
    font-size: 1.5rem;
    font-weight: 400;
    border-radius: 4px;

    @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
      padding: 0.1rem 0.5rem;
      font-size: 1.2rem;
    }
  }
`;
