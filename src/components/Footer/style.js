import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10rem;
  text-align: center;

  p {
    font-size: 1.5rem;
    font-weight: 300;

    @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
      font-size: 1.3rem;
    }
  }
`;
