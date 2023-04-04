import styled from 'styled-components';
import { TagListWrapper } from '@components/TagLabel/style';

export const PostTitle = styled.h2`
  color: var(--textColor);
  font-size: 3rem;
  font-weight: 600;
  word-break: keep-all;

  &:hover {
    text-decoration: underline;
  }
`;

export const PostDescription = styled.p`
  margin: 2rem 0;
  font-size: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Date = styled.p`
  margin-top: 2rem;
  font-size: 1.4rem;
  color: var(--postDateColor);
`;

export const Wrapper = styled.article`
  display: block;
  padding: 3rem 0 2rem;
  line-height: 1.5;
  border-radius: 6px;

  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    ${PostTitle} {
      font-size: 2.3rem;
    }

    ${PostDescription},${Date} {
      font-size: 1.3rem;
    }

    ${TagListWrapper} {
      font-size: 1.3rem;
    }
  }
`;
