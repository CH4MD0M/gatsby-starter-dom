import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 23rem;
  padding: 3rem;
  position: sticky;
  top: 15px;
  background: ${(props) => props.theme.colors.primary2};
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.effect.shadow};
  letter-spacing: ${(props) => props.theme.text.spacing};

  h2 {
    margin: 0 0 2.5rem;
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
    text-shadow: ${(props) => props.theme.effect.shadow};
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    display: block;
    width: auto;
    margin: 6rem 0;
    padding: 0.5rem 1.5rem;
    top: 0;
    background: ${(props) => props.theme.colors.background};
    border: solid ${(props) => props.theme.colors.primary4};
    border-width: 1px 6px;
    border-radius: 2px;
    z-index: 200;

    h2 {
      display: none;
    }

    &:hover {
      box-shadow: ${(props) => props.theme.effect.shadow};
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
  font-weight: 600;
  margin: 1.2rem 0;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  color: #fff;
  background: #2196f3;
  color: ${(props) => props.theme.colors.primary2};
  box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;

  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    margin: 0.8rem;
    font-size: 1.5rem;
    box-shadow: 0 0 5px #2196f3, 0 0 10px #2196f3;
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
  color: #fff;
  font-size: 1.7rem;
  font-weight: 600;
  border-radius: 10px;
  padding-left: 1rem;
  cursor: pointer;
  transition: 0.25s;

  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    margin: 0.8rem;
    font-size: 1.5rem;
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    font-size: 1.2rem;
  }

  &:hover {
    color: #fff;
    background: #2196f3;
    font-weight: 600;
    color: ${(props) => props.theme.colors.primary2};
    box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;

    @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
      box-shadow: 0 0 5px #2196f3, 0 0 10px #2196f3;
    }
  }
`;
