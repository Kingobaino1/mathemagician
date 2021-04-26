import PropTypes from 'prop-types';
import React from 'react';

const Button = ({
  name, clickHandler, color, big,
}) => {
  const buttonColor = (operators) => {
    if (operators) {
      return `${color} button-eql`;
    }
    return `${color} buttons`;
  };

  return <button type="button" className={buttonColor(big)} onClick={() => clickHandler(name)}>{name}</button>;
};

Button.defaultProps = {
  name: '',
};

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string,
  big: PropTypes.bool,
};

Button.defaultProps = {
  color: 'button btn-primary',
  big: false,
};

export default Button;
