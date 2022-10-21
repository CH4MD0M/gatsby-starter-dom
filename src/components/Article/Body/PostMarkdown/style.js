import styled from "styled-components";

export const MDWrapper = styled.div`
  & {
    font-size: 1.7rem;
    color: var(--textColor);
    line-height: 1.7;
  }

  & > p,
  & > ul,
  & > ol,
  & table,
  & blockquote,
  & pre {
    margin-top: 0;
    margin-bottom: 1.8rem;
  }

  & p {
    overflow-x: scroll;
    word-break: break-all;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  /* headings */
  & h1,
  & h2,
  & h3,
  & h4 {
    margin: 1.1rem 0 2rem 0;
    font-weight: 700;
  }

  & h1 {
    margin-top: 8rem;
    font-size: 3.2rem;
    &::before {
      content: "";
      border-left: 4px solid var(--headingBdColor);
      margin-right: 1rem;
    }
  }
  & h2 {
    margin-top: 6.4rem;
    margin-bottom: 2.4rem;
    font-size: 2.8rem;
  }
  & h3 {
    margin-top: 4.8rem;
    margin-bottom: 2.4rem;
    font-size: 2.2rem;
  }
  & h4 {
    margin-top: 3.2rem;
    margin-bottom: 2.4rem;
    font-size: 1.76rem;
  }

  & a {
    color: var(--textColor);
    text-decoration: underline;
  }

  & b,
  strong {
    font-weight: 500;
    .kaatex {
      font-weight: 500;
    }
  }

  /* table */
  & table {
    margin: 5rem auto;
    font-weight: 400;
    border-collapse: collapse;
  }
  & th {
    padding: 1rem;
    background-color: var(--tableBgColor);
    border: 0.5px solid var(--tableBdColor);
  }
  & td {
    padding: 1rem 1.8rem;
    border: 0.5px solid var(--tableBdColor);
  }
  & td:first-child {
    text-align: center;
  }
  & th:first-child,
  td:first-child {
    border-left: none;
  }
  & th:last-child,
  & td:last-child {
    border-right: none;
  }

  /* list */
  & ul,
  & ol {
    padding-left: 3rem;
    & ul {
      padding-left: 2rem;
      list-style: circle;

      ul {
        list-style: square;
      }
    }
  }
  & li {
    margin-bottom: 1.2rem;
    p {
      margin-top: 0.8rem;
    }
  }

  /* paragraph */
  & p {
    word-break: break-all;

    a {
      color: var(--linkColor);
    }
  }

  /* code */
  & code,
  & pre {
    font-family: "Fira Code", monospace;
  }

  & pre {
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
    font-size: 1.5rem;
    border-radius: 4px;
  }

  /* blockquote */
  & blockquote {
    margin: 4rem 0;
    padding: 1rem 2rem;
    color: var(--textColor);
    background: var(--blockQuoteBgColor);
    border-left: 4px solid var(--blockQuoteBorder);
  }

  /* em */
  & em {
    background-color: ${(props) => props.theme.colors.lightOrange};
    padding: 0.16rem 0.48rem;
    border-radius: 4px;
    font-size: 1.6rem;
    font-style: italic;
    color: ${(props) => props.theme.colors.darkOrange};
  }

  /* image */
  & img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }

  .katex {
    font-size: inherit;
  }

  .gatsby-resp-image-wrapper {
    margin-top: 0;
  }
`;
