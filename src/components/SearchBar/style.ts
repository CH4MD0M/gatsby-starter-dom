import styled from 'styled-components';

export const Input = styled.input.attrs({ type: 'text' })`
  width: 100%;
  padding: 1rem 1.6rem;
  font-size: 16px;
  background: transparent;
  box-sizing: border-box;
  outline: none;
  border: 2px solid var(--searchBdColor);
  border-radius: 50px;
  transition: border 0.3s ease-in-out;
  color: var(--textColor);

  &:focus {
    border: 2px solid var(--focusedSearchBdColor);
  }
`;
