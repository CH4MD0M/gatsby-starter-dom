import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5rem 0 0;
  padding: 1.2rem;

  .main {
    width: 256px;
    height: 256px;
    background-image: url(${(props) => props.profileImageRoot}/profile.gif);
    margin-right: 8rem;
  }

  .main-info {
    justify-self: end;
    padding-top: 5rem;
    div {
      margin: 1.2rem 0;
    }
  }

  .post {
    background-image: url(${(props) => props.profileImageRoot}/profile.png);
    width: 128px;
    height: 128px;
    border-radius: 999px;
  }
  @media screen and (max-width: ${({ theme }) => theme.responsive.medium}) {
    margin: 0;
    .main {
      width: 192px;
      height: 192px;
    }
    .main-info {
      justify-self: center;
      padding-top: 0;
      div {
        margin: 1rem 0;
      }
    }
  }
`;

export const Profile = styled.div`
  margin-right: 3.4rem;
  background-size: cover;
  background-position: center;

  @media screen and (max-width: ${(props) => props.theme.responsive.lg}) {
    width: 99px;
    height: 99px;
  }
`;

export const Author = styled.div`
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--textColor);

  @media screen and (max-width: ${(props) => props.theme.responsive.lg}) {
    font-size: 2rem;
  }
`;

export const Description = styled.div`
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 1.6rem;
  color: var(--textColor);

  @media screen and (max-width: ${(props) => props.theme.responsive.lg}) {
    font-size: 1.4rem;
  }
`;

export const LinksWrapper = styled.div`
  & a {
    margin-right: 1rem;
  }
  & svg {
    width: 25.6px;
    height: 25.6px;
    cursor: pointer;
  }
  & svg path {
    fill: var(--icon);
    transition: fill 0.2s;
  }
  a:hover svg path {
    fill: var(--textColor);
  }
`;
