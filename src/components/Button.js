import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ name, clickHandler }) => (
  <button type="button" onClick={() => clickHandler(name)}>{name}</button>
);

Button.defaultProps = {
  name: '',
};

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
