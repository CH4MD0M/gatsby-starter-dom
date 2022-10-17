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
  }
`;
