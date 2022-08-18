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

const Container = styled.article`
  position: relative;
  margin: 1.5rem 0 5rem;
`;

const Pre = styled.pre`
  padding: 1rem 1.5rem;
  border-radius: 5px;
  overflow-x: auto;
  box-shadow: ${(props) => props.theme.effect.shadow};

  .code-tab {
    position: absolute;
    top: 6px;
    right: 6px;
    padding: 0.05rem 0.85rem 0;
    background: ${(props) => props.theme.colors.primary5};
    color: ${(props) => props.theme.colors.primary2};
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 5px;
  }

  .token-line {
    font-size: 1.6rem;
    line-height: 1.6;
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    .token-line {
      font-size: 1.4rem;
      line-height: 1.4;
    }
  }
`;

export default PrismWrapper;
