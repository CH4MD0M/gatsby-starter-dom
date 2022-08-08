import styled from "styled-components";

export const Wrapper = styled.aside`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-left: 4rem;
  background: ${(props) => props.theme.colors.background};
  z-index: 300;
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%);"};
  transition: 0.2s linear;

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: transparent;
    font-size: 3rem;
    cursor: pointer;
    svg {
      fill: ${(props) => props.theme.colors.white};
    }
    transition: 0.2s linear;
    &:hover {
      transform: scale(1.05);
      -webkit-transform: scale(1.05);
    }
  }

  // Post, About
  .page-link {
    font-size: 2.3rem;
    display: block;
    color: ${(props) => props.theme.colors.white};
    font-weight: 700;
    transition: 0.2s linear;
    &:hover {
      color: ${(props) => props.theme.colors.primary5};
    }
  }
  .category {
    padding-left: 0.5rem;
  }
`;
