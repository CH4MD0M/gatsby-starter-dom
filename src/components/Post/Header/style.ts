import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  margin: 2rem 0 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CategoryLabel = styled.div`
  width: fit-content;
  padding: 0 1.5rem;

  a {
    color: var(--linkColor);
    font-weight: 500;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin: 1.5rem 0;
  font-size: 4.5rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--textColor);

  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    font-size: 3.5rem;
  }
`;

export const Information = styled.div`
  font-size: 1.7rem;
  display: flex;
  margin: 2rem 0;

  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 400;
`;

export const TagLabelWrapper = styled.div`
  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    font-size: 1.2rem;
  }
`;
