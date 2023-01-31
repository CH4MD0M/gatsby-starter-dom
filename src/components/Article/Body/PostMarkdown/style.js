import styled from 'styled-components';

export const MDWrapper = styled.div`
  min-width: 100%;
  font-weight: 400;
  font-size: 1.65rem;
  line-height: 1.7;
  color: var(--textColor);

  & > p,
  & > ul,
  & > ol,
  & table,
  & blockquote,
  & pre {
    margin-top: 0;
    margin-bottom: 2.3rem;
  }

  /* headings */
  h1,
  h2,
  h3 {
    margin-bottom: 2.4rem;
  }

  h1 {
    margin-top: 7rem;
    font-size: 3.2rem;
    &::before {
      content: '';
      border-left: 4px solid var(--headingBdColor);
      margin-right: 1rem;
    }
  }
  h2 {
    margin-top: 5.2rem;
    font-size: 2.7rem;
  }
  h3 {
    margin-top: 4rem;
    font-size: 2.2rem;
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
    font-weight: bold;
    .kaatex {
      font-weight: bold;
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
    max-width: ${({ theme }) => theme.sizes.maxWidth};
    border-collapse: collapse;
    text-align: left;
    table-layout: fixed;
    word-break: break-all;
    height: auto;
  }
  th {
    padding: 1rem 2rem;
    background-color: var(--tableBgColor);
    border: 0.5px solid var(--tableBdColor);
    word-break: keep-all;
  }
  td {
    padding: 1rem 2rem;
    border: 0.5px solid var(--tableBdColor);
  }
  th:first-child,
  td:first-child {
    border-left: none;
  }
  th:last-child,
  td:last-child {
    border-right: none;
  }

  /* list */
  & ul,
  & ol {
    padding-left: 3rem;
    & ul {
      margin: 0.4rem 0 1rem;
      padding-left: 2rem;
      list-style: circle;

      ul {
        list-style: square;
      }
    }
    & li:last-child {
      margin-bottom: 0;
    }
  }

  /* paragraph */
  p {
    overflow-x: scroll;
    word-break: break-all;
    ::-webkit-scrollbar {
      display: none;
    }
    a {
      color: var(--linkColor);
    }
  }

  /* code */
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
    margin: 0 0.1rem;
    padding: 0.16rem 0.48rem;
    background-color: var(--inlineCodeBgColor);
    color: #ff7777;
    font-size: 1.5rem;
    border-radius: 4px;
  }

  /* blockquote */
  blockquote {
    margin: 4rem 0;
    padding: 1.2rem 2rem;
    color: var(--textColor);
    background: var(--blockQuoteBgColor);
    border-left: 4px solid var(--blockQuoteBorder);
    p {
      margin-bottom: 2rem;
    }
    p:last-child {
      margin-bottom: 0;
    }
  }

  /* italic */
  em {
    background-color: var(--italicBgColor);
    padding: 0.16rem 0.48rem;
    border-radius: 4px;
    font-style: italic;
  }

  /* image */
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
  .gatsby-resp-image-wrapper {
    background: var(--imgBgColor);
    border-radius: 6px;
    overflow: hidden;
  }

  /* etc */
  .katex {
    font-size: inherit;
  }

  @media screen and (max-width: ${props => props.theme.responsive.sm}) {
    font-size: 1.4rem;

    /* headings */
    h1,
    h2,
    h3 {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    h1 {
      margin-top: 6rem;

      font-size: 2.8rem;
    }
    h2 {
      font-size: 2.4rem;
    }
    h3 {
      font-size: 2rem;
    }
    /* table */
    table {
      width: 100%;
      margin: 0 auto 2rem;
    }
    th {
      padding: 0.4rem 1.2rem;
    }
    td {
      padding: 0.4rem 1.2rem;
    }

    blockquote {
      margin: 3rem 0;
    }
  }
`;
