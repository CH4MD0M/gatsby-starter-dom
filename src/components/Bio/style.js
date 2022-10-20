import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5rem 0;
  padding: 1.2rem;
  color: var(--textColor);
`;

export const Profile = styled.div`
  margin-right: 3rem;
  width: 120px;
  height: 120px;
  background-image: url(${(props) => props.profileImageRoot}/profile.png);
  background-position: center;
  background-size: cover;
  border-radius: 999px;

  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    width: 90px;
    height: 90px;
  }
`;

export const Author = styled.div`
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  font-weight: 700;

  @media screen and (max-width: ${(props) => props.theme.responsive.lg}) {
    font-size: 2rem;
  }
`;

export const Description = styled.div`
  margin-bottom: 1rem;
  font-size: 1.6rem;
  line-height: 1.5;

  @media screen and (max-width: ${(props) => props.theme.responsive.lg}) {
    font-size: 1.2rem;
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
