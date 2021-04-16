import { checkPropTypes } from 'prop-types';
import React from 'react';

const Button = ({ name }) => (
  <button type="button">{name}</button>
);

Button.propTypes = {
  name: checkPropTypes.string,
};

Button.defaultProps = {
  name: '',
};

export default Button;
