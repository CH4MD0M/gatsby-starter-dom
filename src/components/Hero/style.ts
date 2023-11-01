import styled from 'styled-components';

export const HeroWrapper = styled.div`
  width: 100%;
  margin-bottom: 8rem;

  .Typewriter {
    padding-top: 4rem;
    min-height: 26rem;
    font-size: 3.5rem;
    font-weight: 200;
    width: 50rem;
    flex-basis: 50rem;
  }

  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    margin: 14rem 0 6rem;
    .Typewriter {
      font-size: 2.8rem;
      width: 100%;
    }
  }
`;
