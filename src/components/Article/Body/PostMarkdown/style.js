import styled from "styled-components";

export const MDWrapper = styled.div`
  & {
    font-size: 1.7rem;
    color: var(--textColor);
    line-height: 1.7;
  }

  /* headings */
  & h1,
  & h2,
  & h3,
  & h4 {
    margin: 6rem 0 2.5rem 0;
    font-weight: 700;
    word-break: break-all;
  }
  & h1 {
    font-size: 3.5rem;
    &::before {
      content: "";
      border-left: 4px solid ${(props) => props.theme.colors.primary4};
      margin-right: 1rem;
    }
  }
  & h2 {
    font-size: 2.8rem;
  }
  & h3 {
    margin-top: 48px;
    font-size: 2.2rem;
  }
  & h4 {
    margin-top: 32px;
    font-size: 1.7rem;
  }

  & a {
    color: var(--textColor);
    text-decoration: underline;
  }

  & b,
  strong {
    font-weight: 600;
    .kaatex {
      font-weight: 600;
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
    border: 0.5px solid var(--textColor);
  }
  & td {
    padding: 1rem 1.8rem;
    border: 0.5px solid var(--textColor);
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
    margin: 1.2rem 0 2rem;
    padding-left: 3rem;
    & ul {
      padding-left: 2rem;
    }
    & ul ul {
      list-style: square;
    }
  }

  /* paragraph */
  & p {
    word-break: break-all;
    margin: 1.3rem 0;
    font-weight: 400;

    a {
      color: rgb(32, 168, 234);
    }
  }

  /* code */
  & code,
  & pre {
    font-family: "Fira Code", monospace;
  }

  & code {
    margin: 0 0.1rem;
    padding: 0.1rem 0.3rem;
    background-color: var(--inlineCodeBackground);
    font-size: 1.7rem;
    line-height: 1.7;
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
    padding: 0.1rem 0.3rem;
    border-radius: 4px;
    color: rgb(125, 107, 113);
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
`;
