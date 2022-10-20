import styled from "styled-components";

export const Wrapper = styled.article`
  display: block;
  margin-top: 4rem;
  padding-bottom: 4rem;
  line-height: 1.5;
`;

export const PostTitle = styled.h2`
  color: var(--textColor);
  font-size: 2.5rem;
  font-weight: 500;
  word-break: keep-all;

  &:hover {
    text-decoration: underline;
  }
`;

export const PostDescription = styled.p`
  margin-top: 2rem;
  font-size: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Date = styled.span`
  font-size: 1.4rem;
`;
