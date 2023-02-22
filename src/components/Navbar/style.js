import styled from 'styled-components';

export const FixedWrapper = styled.nav`
  display: block;
  position: fixed;
  top: ${props => (props.isHidden ? '-100px' : '0px')};
  left: 0;
  right: 0;
  padding: 1rem;
  background: var(--headerBgColor);
  backdrop-filter: blur(10px);
  transition: top 0.5s ease-in-out;
  z-index: 400;
  box-shadow: var(--headerShadow);

  a {
    color: var(--textColor);
  }
`;

export const NavWrapper = styled.div`
  max-width: 1300px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    padding: 0 1.5rem;
  }
`;

export const NavTitle = styled.div`
  font-family: 'Damion', cursive;
  font-size: 2.7rem;
  font-weight: 600;
  letter-spacing: 0.15rem;
  animation: var(--animation) 1.5s infinite;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
`;

export const LinksWrapper = styled.div`
  font-size: 1.6rem;

  a {
    text-transform: uppercase;
    margin: 0 1rem;
  }
  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    display: none;
  }
`;

export const MenuIcon = styled.div`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  transition: fill 0.3s;

  svg {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
  svg path {
    fill: var(--iconColor);
    transition: fill 0.3s;
  }
  svg:hover path {
    fill: var(--textColor);
  }

  @media screen and (min-width: ${props => props.theme.responsive.sm}) {
    &:last-child {
      display: none;
    }
  }
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  z-index: 300;

  @media screen and (min-width: ${props => props.theme.responsive.sm}) {
    display: none;
  }
`;
