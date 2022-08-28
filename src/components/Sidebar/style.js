import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  padding-left: 4rem;
  background: var(--bgColor);
  transition: all ease-in 0.3s 0.2s;

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: transparent;
    font-size: 3rem;
    cursor: pointer;

    svg {
      fill: var(--textColor);
    }

    transition: 0.2s linear;

    &:hover {
      transform: scale(1.05);
      -webkit-transform: scale(1.05);
    }
  }
`;

export const Wrapper = styled.aside`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 300;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%);"};
  transition: 0.2s linear;
`;
