import styled from "styled-components";

export const Wrapper = styled.article`
  border-bottom: 1px solid ${(props) => props.theme.colors.primary2};

  .post-container {
    display: flex;
    align-items: center;
    padding: 2rem 0;

    transition: 0.2s linear;
    &:hover {
      background-color: ${(props) => props.theme.colors.primary2};
    }
  }
  .info {
    text-align: center;
  }
  .img {
    border-radius: 4px;
    height: 10rem;
    width: 10rem;
  }

  .category {
    display: inline-block;
    margin-bottom: 1rem;
    background: var(--clr-primary-8);
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 0.4rem;
    letter-spacing: ${(props) => props.theme.text.spacing};
    color: ${(props) => props.theme.colors.primary5};
    font-size: 1.6rem;
  }
  /*
  h3 {
    color: var(--clr-white);
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
    text-transform: initial;
  }

  footer {
    padding-top: 1rem;
    border-top: 1px solid var(--clr-primary-6);
    color: var(--clr-primary-6);
  } */
`;
