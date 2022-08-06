import styled from "styled-components";

export const Wrapper = styled.ul`
  width: 23rem;
  padding: 3rem;
  position: sticky;
  display: flex;
  flex-direction: column;
  top: 15px;
  background: ${(props) => props.theme.colors.primary2};
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.effect.shadow};
  transition: 0.1s linear;
  &:hover {
    box-shadow: 0 0 5px #ff1867, 0 0 10px #ff1867, 0 0 20px #ff1867;
  }
  h2 {
    margin: 0 0 2.5rem;
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 0 0 10px #ff1867, 0 0 20px #ff1867;
  }

  li {
    color: ${(props) => props.theme.colors.primary5};
    transition: 0.1s;
    &:hover {
      color: #fff;
      text-shadow: 0 0 10px #2196f3, 0 0 20px #2196f3, 0 0 40px #2196f3,
        0 0 80px #2196f3, 0 0 160px #2196f3;
    }
  }
  .category {
    display: block;
    margin: 1rem 0;
    font-size: 2.2rem;
    font-weight: 500;
    padding-left: 1rem;
    text-transform: capitalize;
    cursor: pointer;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    position: relative;
    flex-direction: row;
    align-items: center;
    width: auto;
    padding: 1.5rem;
    margin-bottom: 6rem;

    .category {
      font-size: 1.6rem;
      margin: 0 1rem;
      &:hover {
        text-shadow: none;
        transform: skewY(-10deg);
      }
    }
  }
`;
