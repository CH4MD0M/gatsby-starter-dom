import styled from "styled-components";

export const Wrapper = styled.nav`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  height: 6rem;
  background: var(--headerBackground);
  backdrop-filter: blur(10px);
  transition: opacity 0.35s;
  z-index: 200;
`;

export const Inner = styled.div`
  max-width: ${(props) => props.theme.sizes.maxWidth};
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.sideSpace.sm};

  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    padding: 0 1.5rem;
  }
`;

export const NavTitle = styled.div`
  font-family: "Damion", cursive;
  font-size: 2.7rem;
  font-weight: 600;
  letter-spacing: ${(props) => props.theme.text.spacing};
  animation: var(--animation) 1.5s infinite;
  a {
    color: var(--textColor);
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    transition: 0.3s;
  }
  svg {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
  svg path {
    fill: var(--icon);
    transition: fill 0.3s;
  }
  svg:hover path {
    fill: var(--textColor);
  }
`;

export const MenuIcon = styled.div``;
