import { PropTypes } from 'prop-types';
import React from 'react';

const Display = ({ value }) => (
  <div className="w-25 mx-auto bg-secondary">{value}</div>
);

Display.defaultProps = {
  value: '0',
};

Display.propTypes = {
  value: PropTypes.string,
};

export default Display;
