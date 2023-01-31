import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 8rem;
  min-height: 46rem;

  .Typewriter {
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
