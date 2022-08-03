import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/dracula";
import styled from "styled-components";

const PrismWrapper = (props) => {
  const className = props.children.props.className;
  const language = className.split("-")[1];

  return (
    <Highlight
      {...defaultProps}
      code={props.children.props.children.trim()}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <Container>
            <Pre className={className} style={style}>
              <div className="code-tab">{language}</div>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </Pre>
          </Container>
        );
      }}
    </Highlight>
  );
};

const Pre = styled.pre`
  padding: 1rem 1.5rem;
  box-shadow: var(--dark-shadow);
  border-radius: 7px;
  margin: 3rem 0;
  font-size: 0.9rem;
  font-family: "Fira Code", "Consolas", "Monaco", "Andale Mono", "Ubuntu Mono",
    monospace;
  overflow-x: auto;
  .token-line {
    line-height: 1.5;
  }
  .code-tab {
    position: absolute;
    top: 0;
    left: 2%;
    color: var(--clr-green-light);
    font-size: 1rem;
    font-weight: 700;
    transform: translateY(-100%);
    text-transform: uppercase;
    padding: 0.05rem 0.85rem 0;
    border-radius: 6px 6px 0 0;
    background: var(--clr-primary-5);
  }
`;
const Container = styled.article`
  position: relative;
`;

export default PrismWrapper;
