import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  margin: 2rem 0;
`;

export const CategoryLabel = styled.div`
  width: fit-content;
  font-size: 1.4rem;
  border: 1px solid var(--linkColor);
  padding: 0.6rem 1rem;
  border-radius: 4px;

  a {
    color: var(--linkColor);
    font-weight: 500;
  }
`;

export const Title = styled.h2`
  margin: 1.5rem 0;
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--textColor);

  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    font-size: 3rem;
  }
`;

export const Information = styled.div`
  margin-bottom: 3rem;
  font-size: 1.7rem;

  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    font-size: 1.4rem;
  }
`;

export const Author = styled.span`
  font-weight: 500;
`;

export const Date = styled.span`
  font-weight: 300;
`;
