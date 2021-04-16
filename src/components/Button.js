import { PropTypes } from 'prop-types';
import React from 'react';

const Button = ({ name }) => (
  <button type="button">{name}</button>
);

Button.defaultProps = {
  name: '',
};

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
