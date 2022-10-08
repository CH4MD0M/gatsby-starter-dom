import styled from "styled-components";

export const Wrapper = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  z-index: 400;
  transition: 0.3s linear;
`;

export const SidebarContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  padding-left: 4rem;
  background: var(--bgColor);
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.45s ease-in;

  .close-btn {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    top: 3rem;
    left: -12rem;
    background: var(--bgColor);
    border-radius: 50%;
    border: 2px solid #cacaca;
    font-size: 3rem;
    cursor: pointer;
    transition: all linear 0.2s;

    svg {
      fill: var(--textColor);
    }

    &:hover {
      transform: rotate(90deg);
      -webkit-transform: rotate(90deg);
    }
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    .close-btn {
      left: -8rem;
    }
  }
`;
