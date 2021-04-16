import { checkPropTypes } from 'prop-types';
import React from 'react';

const Display = ({ value }) => (
  <div>{value}</div>
);

Display.defaultProps = {
  value: '0',
};

Display.propTypes = {
  value: checkPropTypes.string,
};

export default Display;
