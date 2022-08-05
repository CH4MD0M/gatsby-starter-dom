import styled from "styled-components";

export const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin: 2rem auto 4rem;

  padding: 20px ${(props) => props.theme.sideSpace.large} 0;
  max-width: ${(props) => props.theme.sizes.maxWidth};

  @media screen and (max-width: ${({ theme }) => theme.responsive.medium}) {
    max-width: 76rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    padding: 10px ${(props) => props.theme.sideSpace.small} 0;
  }
`;

export const NavTitle = styled.div`
  font-family: "Nunito", sans-serif;
  font-size: 3.5rem;
  font-weight: 500;
  letter-spacing: ${(props) => props.theme.text.spacing};
  color: ${(props) => props.theme.colors.darkWhite};
  a {
    color: inherit;
  }
  &:hover {
    animation: ${(props) => props.theme.animation.logoAnimation} 2s infinite;
  }

  @media screen and (max-width: ${({ theme }) => theme.responsive.medium}) {
    font-size: 3rem;
    margin-left: 0;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    font-size: 2.5rem;
  }
`;

export const ToggleContainer = styled.div`
  .toggle-btn {
    font-size: 2.5rem;
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: ${(props) => props.theme.colors.primary5};
    }
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    .toggle-btn {
      font-size: 2rem;
    }
  }
`;
