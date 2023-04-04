import styled from 'styled-components';

interface DividerProps {
  mt?: string;
  mb?: string;
}

const Divider = styled.hr<DividerProps>`
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
  border: none;
  border-bottom: 1px solid var(--divider);
`;

Divider.defaultProps = {
  mt: '2rem',
  mb: '2rem',
};

export default Divider;
