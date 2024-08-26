import styled from 'styled-components';

export const HeroWrapper = styled.div`
  width: 100%;
  margin-top: 8rem;

  .Typewriter {
    padding-top: 10rem;
    font-size: 5.5rem;
    font-weight: 200;
    width: 70rem;
  }

  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    .Typewriter {
      font-size: 3.8rem;
      width: 100%;
    }
  }
`;
