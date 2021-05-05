import { PropTypes } from 'prop-types';
import React from 'react';

const Display = ({ value }) => {
  const removeZero = (num) => {
    if (num[0] === '0' && num.length > 1 && num[1] !== '.') {
      return num.slice(1, num.length);
    }
    return num;
  };
  return (
    <div className="bg-secondary mt-5 display"><h6 className="m-1 p-4">{removeZero(value)}</h6></div>
  );
};

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
