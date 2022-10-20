import styled from "styled-components";

export const NavigatorWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    flex-direction: column;

    & > div:first-child {
      margin-bottom: 1.3rem;
    }
  }
`;

export const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    flex-direction: column-reverse;
  }
`;

export const ButtonTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Icon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  font-size: 3rem;
  transition: transform 0.3s;
`;

export const PostCardWrapper = styled.div`
  display: flex;
  align-items: ${(props) => (props.right ? "flex-end" : "flex-start")};
  padding: 1rem 2rem;
  max-width: 30rem;
  flex-basis: 30rem;
  background: var(--postNavButtonBackground);
  border-radius: 8px;
  font-weight: 500;
  color: var(--textColor);
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: var(--hoveredPostNavButtonBackground);
  }

  ${FlexWrapper} {
    flex-direction: ${(props) => (props.right ? "row-reverse" : "row")};
  }

  ${ButtonTextWrapper} {
    align-items: ${(props) => (props.right ? "flex-end" : "flex-start")};
  }

  ${Icon} {
    ${(props) => (props.right ? "margin-left: 2rem" : "margin-right: 2rem")};
  }

  &:hover ${Icon} {
    transform: ${(props) =>
      props.right ? "translateX(3px)" : "translateX(-3px)"};
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    max-width: inherit;
    flex-basis: inherit;
    padding: 1rem;
  }
`;

export const ButtonLabel = styled.div`
  font-size: 1.2rem;
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    font-size: 1rem;
  }
`;

export const ButtonTitle = styled.div`
  padding: 0.3rem 0 1rem;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;

  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    font-size: 1.4rem;
  }
`;
