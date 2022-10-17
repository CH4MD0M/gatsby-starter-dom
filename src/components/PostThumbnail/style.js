import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9rem;
  height: 9rem;
  border-radius: 10px;
  background: var(--contentBgColor);
  svg {
    width: 6rem;
    height: 6rem;
    border-radius: 2px;
    color: ${(props) => props.color};
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.lg}) {
    width: 7.3rem;
    height: 7.3rem;
    svg {
      width: 4.8rem;
      height: 4.8rem;
    }
  }
`;
