import styled from "styled-components";

export const Wrapper = styled.article`
  .post-container {
    display: flex;
    padding: 2.3rem 0;
    color: var(--textColor);
    border-bottom: 1px solid var(--divider);
    transition: 0.2s linear;
    &:hover {
      background-color: var(--contentBgColor);
    }
  }
`;

export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: calc(100% - 9rem);
  margin-left: 2rem;
  padding: 0.4rem 0 0.2rem;
  header {
    .post-title {
      font-size: 2.5rem;
      line-height: 2.8rem;
      font-weight: 500;
    }
  }
  footer {
    display: flex;
    justify-content: space-between;
    .date {
      margin-right: 1rem;
      font-size: 1.5rem;
      font-weight: 300;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    width: calc(100% - 7rem);
    margin-left: 1.3rem;
    header {
      .post-title {
        font-size: 2rem;
        line-height: 2rem;
      }
    }
    footer {
      .date {
        font-size: 1.2rem;
      }
    }
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    padding: 0.6rem 0;
    header {
      .post-title {
        font-size: 1.5rem;
        line-height: 1.7rem;
      }
    }
  }
`;
