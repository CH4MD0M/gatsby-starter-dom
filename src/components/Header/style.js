import styled from "styled-components";

export const Wrapper = styled.nav`
  display: block;
  position: fixed;
  top: ${(props) => (props.isHidden ? -60 : 0)}px;
  left: 0;
  right: 0;
  padding: 1rem;
  height: 6rem;
  box-shadow: 0 0 8px var(--headerShadow);
  background: var(--headerBackground);
  backdrop-filter: blur(5px);
  opacity: ${(props) => (props.isHidden ? 0 : 1)};
  transition: top 0.35s, opacity 0.35s;
  z-index: 200;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 6rem;

  @media screen and (max-width: ${({ theme }) => theme.responsive.medium}) {
    margin: 0 1.5rem;
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
  & svg {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
  & svg path {
    fill: var(--icon);
    transition: fill 0.3s;
  }
  & svg:hover path {
    fill: var(--textColor);
  }
`;

export const ToggleWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 1.5rem;
  overflow: hidden;
`;

export const IconContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 4rem;
  top: ${(props) => (props.theme === "light" ? "-2rem" : "0")};
  transition: top 0.4s;

  & > svg {
    transition: opacity 0.25s;
  }
  & > svg:first-child {
    opacity: ${(props) => (props.theme === "light" ? 0 : 1)};
  }
  & > svg:last-child {
    opacity: ${(props) => (props.theme === "dark" ? 0 : 1)};
  }
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  transition: 0.3s;
  width: 2rem;
  height: 2rem;

  &:hover {
    color: var(--linkColor);
  }
`;
