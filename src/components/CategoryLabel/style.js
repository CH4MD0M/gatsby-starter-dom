import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 1.4rem;

  .category-bg {
    background: ${(props) => props.color};
    padding: 0.6rem 1rem;
    border-radius: 4px;
  }

  .category-text {
    color: var(--textColor);

    @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
      font-size: 1.2rem;
    }
  }
`;
