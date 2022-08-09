import styled from "styled-components";

export const Wrapper = styled.div`
  .category-text {
    display: inline-block;
    background: ${(props) => props.color};
    padding: 0.4rem 1rem;
    line-height: 1.7rem;
    font-size: 1.7rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.background};
    border-radius: 4px;

    @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
      font-size: 1.2rem;
      padding: 0.1rem 0.5rem;
    }
  }
`;
