import styled from "styled-components";

export const Wrapper = styled.div`
  .category-text {
    display: inline-block;
    padding: 0.4rem 1rem;
    background: ${(props) => props.color};
    font-size: 1.5rem;
    font-weight: 400;
    color: var(--bgColor);
    border-radius: 4px;

    @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
      font-size: 1.2rem;
      padding: 0.1rem 0.5rem;
    }
  }
`;
