import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 8rem;

  .Typewriter {
    min-height: 16rem;
    font-size: 3.5rem;
    font-weight: 200;
    width: 50rem;
    flex-basis: 50rem;
  }

  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    margin: 14rem 0 6rem;
    .Typewriter {
      font-size: 2.8rem;
    }
  }
`;

export const Profile = styled.div`
  display: block;
  width: 256px;
  height: 256px;
  background-image: url(${props => props.profileImageRoot}/profile.gif);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 999px;

  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    display: none;
  }
`;
