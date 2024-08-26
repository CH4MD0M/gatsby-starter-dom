import styled from 'styled-components';

export const MDWrapper = styled.div`
  min-width: 100%;
  color: var(--textColor);

  h1,
  h2,
  h3,
  p,
  ul,
  ol,
  table,
  blockquote,
  pre {
    padding: 0.2rem 0;
  }

  /* headings */
  h1 {
    margin: 8rem 0 2rem;
    font-size: 3.2rem;
    border-bottom: 1px solid var(--divider);
  }
  h1 + h2 {
    margin-top: 1.5rem;
  }
  h2 {
    margin: 6rem 0 1rem;
    font-size: 2.7rem;
    &::before {
      content: '';
      border-left: 4px solid var(--headingBdColor);
      margin-right: 1rem;
    }
  }
  h2 + h3 {
    margin-top: 1.5rem;
  }
  h3 {
    margin-top: 4rem;
    font-size: 2.2rem;
  }
  h4 {
    margin-top: 2.3rem;
    font-size: 2rem;
  }

  /* link */
  a {
    color: var(--textColor);
    text-decoration: underline;
    word-break: break-all;
  }

  /* bold */
  b,
  strong {
    font-weight: 400;
    color: var(--linkColor);
    .katex {
      font-weight: 900;
    }
  }

  /* hr */
  hr {
    border: 0;
    background: var(--hrColor);
    height: 1px;
    width: 50%;
    margin: 2rem auto;
  }

  /* table */
  table {
    width: 100%;
    margin: 2.5rem 0;
    border-collapse: collapse;
    word-break: break-all;
    b,
    strong {
      color: inherit;
      font-weight: 500;
    }
  }
  th {
    padding: 1rem 2rem;
    background-color: var(--tableBgColor);
    word-break: keep-all;
  }
  td {
    padding: 1rem 2rem;
    border-bottom: 1px solid var(--tableBdColor);
  }
  th:first-child {
    border-radius: 10px 0 0 10px;
  }
  th:last-child {
    border-radius: 0 10px 10px 0;
  }

  .no-header {
    table {
      max-width: ${({ theme }) => theme.maxWidth};
      width: auto;
    }
    th {
      display: none;
    }
    td {
      border: 1px solid var(--tableBdColor);
    }
    th:first-child,
    td:first-child {
      border-left: 1px solid var(--tableBdColor);
    }
    th:last-child,
    td:last-child {
      border-right: 1px solid var(--tableBdColor);
    }
  }

  /* list */
  ul,
  ol {
    padding-left: 3rem;
    & ul {
      margin-bottom: 0.5rem;
      list-style: circle;

      & ul {
        list-style: square;
      }
    }
    & li:last-child {
      margin-bottom: 0;
    }
    code {
      font-size: 1.5rem;
      line-height: 1.8;
    }
  }
  li {
    padding-left: 0.8rem;
    margin: 0.5rem 0;
  }

  /* paragraph */
  p {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.8;
    overflow-x: scroll;
    word-break: break-all;
    ::-webkit-scrollbar {
      display: none;
    }
    a {
      color: var(--linkColor);
    }
    code {
      font-size: 1.4rem;
    }
  }

  /* code */
  .flex-wrapper {
    display: flex;
    justify-content: space-around;
    gap: 5rem;
    margin-bottom: 2rem;
    border: 1px solid var(--divider);
    border-radius: 6px;
    padding: 2rem;
    padding-bottom: 0;

    & > div {
      width: 100%;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  code,
  pre {
    font-family: 'Fira Code', monospace;
  }

  pre {
    ::-webkit-scrollbar {
      height: 0.4rem;
    }
    ::-webkit-scrollbar-track {
      background: var(--scrollTrack);
    }
    ::-webkit-scrollbar-thumb {
      background: var(--scrollThumb);
    }
  }

  code {
    margin: 0 0.2rem;
    padding: 0.2rem 0.5rem;
    background-color: var(--inlineCodeBgColor);
    line-height: 1.8;
    border-radius: 4px;
  }

  /* blockquote */
  blockquote {
    margin: 2rem 0 4rem;
    padding: 1.2rem 2rem;
    color: var(--textColor);
    background: var(--blockQuoteBgColor);
    border-left: 4px solid hsl(29, 90%, 62%);

    p:first-child {
      b,
      strong {
        font-weight: 700;
        color: hsl(29, 90%, 62%);
      }
      margin-bottom: 1.4rem;
    }
    p:last-child {
      margin-bottom: 0;
    }

    ul:only-of-type,
    ol:only-of-type {
      margin: 0;
    }
  }

  del {
    &:hover {
      text-decoration: none;
    }
  }

  /* italic */
  em {
    padding: 0.16rem 0.48rem;
    font-weight: 400;
    font-style: italic;
  }

  /* image */
  .resize-wrapper {
    max-width: 400px;
    margin: 0 auto;
  }

  img {
    padding: 1rem 1.7rem;
  }
  .gatsby-resp-image-wrapper {
    margin: 2rem 0 !important;
    max-width: 100% !important;
    background: var(--imgBgColor);
    border-radius: 6px;
    overflow: hidden;
  }

  /* katex */
  .katex {
    font-size: inherit;
  }

  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    /* headings */
    h1,
    h2,
    h3,
    h4 {
      margin-bottom: 1rem;
    }
    h1 {
      margin-top: 6rem;
      margin-bottom: 3rem;
      font-size: 2.8rem;
    }
    h2 {
      margin-top: 4.5rem;
      font-size: 2.4rem;
    }
    h3 {
      margin-top: 2.5rem;
      font-size: 2rem;
    }
    h4 {
      margin-top: 2rem;
      font-size: 1.8rem;
    }

    /* table */
    table {
      width: 100%;
      margin: 2rem auto;
    }
    th {
      padding: 0.4rem 1.2rem;
    }
    td {
      padding: 0.4rem 1.2rem;
    }

    /* code */
    code {
      padding: 0 0.4rem;
    }

    /* blockquote */
    blockquote {
      margin: 2rem 0;
    }

    /* paragrpah */
    p {
      font-size: 1.6rem;
    }

    .flex-wrapper {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;
