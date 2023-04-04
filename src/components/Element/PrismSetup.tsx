import React from 'react';
import styled from 'styled-components';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';

interface PrismWrapperProps {
  children: string;
  className: string;
}

export const PrismWrapper = ({ children, className }: PrismWrapperProps) => {
  const language = (className.replace(/language-/, '') || '') as Language;

  return (
    <Container>
      <Highlight
        {...defaultProps}
        code={children.trim()}
        language={language}
        theme={undefined}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style }}>
            {tokens.map((line, index) => (
              <div {...getLineProps({ line, key: index })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Container>
  );
};

const Container = styled.article`
  position: relative;
  margin-bottom: 3rem;

  pre {
    padding: 1rem 1.5rem;
    overflow-x: auto;
    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.37);
  }
  .token-line {
    font-size: 1.4rem;
    line-height: 1.6;
  }
`;

export default PrismWrapper;
