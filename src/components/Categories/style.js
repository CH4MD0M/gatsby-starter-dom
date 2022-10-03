import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 15px;
  margin-top: 5rem;
  width: 23rem;
  padding: 3rem;
  background: var(--contentBgColor);
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.effect.shadow};
  letter-spacing: ${(props) => props.theme.text.spacing};

  h2 {
    margin: 0 0 2.5rem;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    text-shadow: ${(props) => props.theme.colors.textShadow};
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    display: block;
    width: auto;
    margin: 7rem 0 4rem;
    padding: 0.5rem 0;
    top: 10px;
    border: 1px solid var(--categoryBorderColor);
    border-radius: 2px;
    z-index: 200;

    h2 {
      display: none;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    margin: 4rem 0 3rem;
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
  margin: 1.2rem 0;
  padding: 0.5rem 1rem;
  width: fit-content;
  background: var(--linkColor);
  color: #fff;
  font-size: 1.7rem;
  font-weight: 400;
  border-radius: 10px;
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
  padding-left: 1rem;
  font-size: 1.7rem;
  font-weight: 400;
  border-radius: 10px;
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
