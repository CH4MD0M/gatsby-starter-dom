import styled from "styled-components";

export const Wrapper = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  top: 15px;
  width: 23rem;
  padding: 3rem;
  background: var(--contentBgColor);
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.effect.shadow};
  letter-spacing: ${(props) => props.theme.text.spacing};

  h2 {
    margin: 0 0 2.5rem;
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
    text-shadow: ${(props) => props.theme.colors.textShadow};
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    display: block;
    width: auto;
    margin: 6rem 0 2rem;
    padding: 0.5rem 1.5rem;
    top: 0;
    border: solid var(--categoryBorderColor);
    border-width: 1px 6px;
    border-radius: 2px;
    z-index: 200;

    h2 {
      display: none;
    }
  }
`;

export const CategoriesWrapper = styled.ul`
  display: block;

  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    display: flex;
    align-items: center;
    margin: 0 1rem;
    overflow-x: auto;
    white-space: nowrap;
    &::-webkit-scrollbar {
      display: none !important;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const Active = styled.li`
  width: fit-content;
  font-size: 1.7rem;
  font-weight: 400;
  margin: 1.2rem 0;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  color: #fff;
  background: var(--linkColor);
  box-shadow: var(--boxShadow);
  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    margin: 0.6rem 0.3rem;
    font-size: 1.5rem;
    box-shadow: var(--smallBoxShadow);
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    font-size: 1.2rem;
  }
`;

export const Disabled = styled.li`
  display: block;
  width: fit-content;
  margin: 1.2rem 0;
  padding: 0.5rem 1rem;

  font-size: 1.7rem;
  font-weight: 400;
  border-radius: 10px;
  padding-left: 1rem;
  cursor: pointer;
  transition: 0.25s;

  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    margin: 0.6rem 0.3rem;
    font-size: 1.5rem;
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    font-size: 1.2rem;
  }

  &:hover {
    color: #fff;
    background: var(--linkColor);
    font-weight: 400;
    color: var(--contentBgColor);
    box-shadow: var(--boxShadow);

    @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
      box-shadow: var(--smallBoxShadow);
    }
  }
`;