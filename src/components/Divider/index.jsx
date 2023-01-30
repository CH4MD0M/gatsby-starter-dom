import PropTypes from 'prop-types';
import styled from 'styled-components';

const Divider = styled.hr`
  margin-top: ${props => props.mt};
  margin-bottom: ${props => props.mb};
  border: none;
  border-bottom: 1px solid var(--divider);
`;

Divider.propTypes = {
  mt: PropTypes.string,
  mb: PropTypes.string,
};

Divider.defaultProps = {
  mt: '2rem',
  mb: '2rem',
};

export default Divider;
