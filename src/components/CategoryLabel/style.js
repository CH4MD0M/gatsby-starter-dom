import styled from "styled-components";

export const Wrapper = styled.div`
  width: fit-content;
  font-size: 1.4rem;
  border: 2px solid ${(props) => props.color};
  padding: 0.6rem 1rem;
  border-radius: 4px;

  a {
    color: ${(props) => props.color};
    font-weight: 500;
  }
`;
