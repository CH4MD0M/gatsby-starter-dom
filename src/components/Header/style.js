import styled from "styled-components";

export const Wrapper = styled.nav`
  position: fixed;
  top: ${(props) => (props.isHidden ? -60 : 0)}px;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  margin: 0 auto 4rem;
  padding: 1.5rem 12rem;
  box-shadow: 0 0 8px var(--headerShadow);
  backdrop-filter: blur(5px);
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
  transition: top 0.5s, opacity 0.5s;
  z-index: 200;

  @media screen and (max-width: ${({ theme }) => theme.responsive.medium}) {
    max-width: 76rem;
    padding: 1.5rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    padding: 1rem 1.5rem 0 1rem;
  }
`;

export const NavTitle = styled.div`
  a {
    color: var(--textColor);
  }
  font-family: "Damion", cursive;
  font-size: 3.2rem;
  font-weight: 600;
  letter-spacing: ${(props) => props.theme.text.spacing};
  animation: var(--animation) 1.5s infinite;

  @media screen and (max-width: ${({ theme }) => theme.responsive.medium}) {
    font-size: 2.5rem;
    margin-left: 0;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    font-size: 2.2rem;
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
