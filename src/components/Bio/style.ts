import styled from 'styled-components';

interface ProfileProps {
  profileImageRoot: string;
}

export const Profile = styled.div<ProfileProps>`
  margin-right: 3rem;
  width: 120px;
  height: 120px;
  background-image: url(${props => props.profileImageRoot}/profile.png);
  background-position: center;
  background-size: cover;
  border-radius: 999px;

  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    width: 90px;
    height: 90px;
  }
`;

export const Author = styled.div`
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  font-weight: 700;
`;

export const Description = styled.div`
  margin-bottom: 1rem;
  font-size: 1.6rem;
  line-height: 1.5;
`;

export const LinksWrapper = styled.div`
  a {
    margin-right: 1rem;
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
    fill: var(--iconColor);
    cursor: pointer;
    transition: fill 0.2s;
  }

  a:hover svg {
    fill: var(--hoveredIconColor);
  }
`;

export const BioWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 5rem 0 2rem;
  padding: 1.2rem;
  color: var(--textColor);

  @media screen and (max-width: ${props => props.theme.responsive.lg}) {
    ${Author} {
      font-size: 2rem;
    }

    ${Description} {
      font-size: 1.2rem;
    }
  }
`;
