import styled, { css } from 'styled-components';

export const TocWrapper = styled.div`
  position: sticky;
  top: 120px;
  margin-left: 13rem;
  padding-right: 2rem;
  min-width: 25rem;
  height: fit-content;
  max-height: 70rem;
  font-size: 1.4rem;
  line-height: 1.5;
  overflow: hidden auto;
  opacity: 1;

  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--scrollThumb);
  }
  ::-webkit-scrollbar-track {
    background: var(--scrollTrack);
  }

  @media screen and (max-width: ${({ theme }) => theme.responsive.lg}) {
    display: none;
  }
`;
