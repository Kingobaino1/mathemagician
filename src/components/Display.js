import { PropTypes } from 'prop-types';
import React from 'react';

const Display = ({ value }) => (
  <div className="mx-auto bg-secondary mt-5 display"><h6 className="m-1 p-4">{value}</h6></div>
);

// Display.defaultProps = {
//   value: '0',
// };

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
