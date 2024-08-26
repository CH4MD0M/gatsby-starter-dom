import styled from 'styled-components';

export const Trgger = styled.div`
  height: 4rem;
`;

export const NavWrapper = styled.nav<{ isScrollDown: boolean }>`
  max-width: ${({ isScrollDown }) => (isScrollDown ? '100%' : '72rem')};
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  transition: all 0.5s ease-in-out;
`;

export const NavTitle = styled.div`
  font-family: 'Damion', cursive;
  font-size: 2.7rem;
  font-weight: 600;
  letter-spacing: 0.15rem;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
`;

export const LinksWrapper = styled.div`
  font-size: 1.8rem;

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
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: transparent;
  z-index: 300;
`;

export const StickyWrapper = styled.div<{ isScrollDown: boolean }>`
  position: sticky;
  top: 0;
  padding: 1rem 4rem;
  background: var(--headerBgColor);
  backdrop-filter: blur(10px);
  z-index: 400;
  box-shadow: ${({ isScrollDown }) =>
    isScrollDown ? 'var(--headerShadow);' : '0'};

  transition: all 0.5s ease-in-out;
  a {
    color: var(--textColor);
  }

  @media screen and (min-width: ${props => props.theme.responsive.sm}) {
    ${MenuIcon} {
      &:last-child {
        display: none;
      }
    }

    ${Background} {
      display: none;
    }
  }
`;
