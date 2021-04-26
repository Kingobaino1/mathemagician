import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ handleClick }) => (
  <>
    <div className="w-25 mx-auto buttonPanel">
      <div className="row mx-auto w-100 mt-2">
        <div className="col-12">
          <Button color="button" clickHandler={handleClick} name="AC" />
          <Button color="button" clickHandler={handleClick} name="+/-" />
          <Button color="button" clickHandler={handleClick} name="%" />
          <Button color="button" clickHandler={handleClick} name="÷" />
        </div>
        <div className="col-12">
          <Button clickHandler={handleClick} name="7" />
          <Button clickHandler={handleClick} name="8" />
          <Button clickHandler={handleClick} name="9" />
          <Button clickHandler={handleClick} name="x" />
        </div>
        <div className="col-12">
          <Button clickHandler={handleClick} name="4" />
          <Button clickHandler={handleClick} name="5" />
          <Button clickHandler={handleClick} name="6" />
          <Button clickHandler={handleClick} name="-" />
        </div>
        <div className="col-12">
          <Button clickHandler={handleClick} name="1" />
          <Button clickHandler={handleClick} name="2" />
          <Button clickHandler={handleClick} name="3" />
          <Button clickHandler={handleClick} name="+" />
        </div>
        <div className="col-12">
          <Button clickHandler={handleClick} name="0" />
          <Button clickHandler={handleClick} name="." />
          <Button clickHandler={handleClick} name="=" />
        </div>
      </div>
    </div>
  </>
);

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
