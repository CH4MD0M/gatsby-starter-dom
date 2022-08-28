import styled from "styled-components";

export const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  margin: 2rem auto 4rem;
  padding: 20px ${(props) => props.theme.sideSpace.large} 0;
  max-width: ${(props) => props.theme.sizes.maxWidth};
  max-height: 70px;

  @media screen and (max-width: ${({ theme }) => theme.responsive.medium}) {
    max-width: 76rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    padding: 1rem 1.5rem 0 1rem;
  }
`;

export const NavTitle = styled.div`
  font-family: "Damion", cursive;
  font-size: 4.5rem;
  letter-spacing: ${(props) => props.theme.text.spacing};
  color: var(--textColor);
  animation: var(--animation) 1.5s infinite;

  a {
    color: inherit;
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
    background: transparent;
    border-color: transparent;
    font-size: 2.5rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      color: var(--linkColor);
    }
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    .toggle-btn {
      font-size: 2rem;
    }
  }
`;
