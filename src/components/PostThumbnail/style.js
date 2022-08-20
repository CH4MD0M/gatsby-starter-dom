import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9rem;
  height: 9rem;
  background: ${(props) => props.theme.colors.contentBgColor};

  svg {
    width: 6rem;
    height: 6rem;
    border-radius: 2px;
    color: ${(props) => props.color};
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    width: 7rem;
    height: 7rem;
    svg {
      width: 4.5rem;
      height: 4.5rem;
    }
  }
`;
