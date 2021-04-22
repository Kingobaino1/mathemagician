import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ handleClick }) => (
  <>
    <div className="w-50 mx-auto">
      <div className="w-50 mx-auto">
        <Button clickHandler={handleClick} className="" name="AC" />
        <Button clickHandler={handleClick} className="" name="+/-" />
        <Button clickHandler={handleClick} className="" name="%" />
        <Button clickHandler={handleClick} className="" name="÷" />
      </div>
      <div className="w-50 mx-auto">
        <Button clickHandler={handleClick} className="" name="7" />
        <Button clickHandler={handleClick} className="" name="8" />
        <Button clickHandler={handleClick} className="" name="9" />
        <Button clickHandler={handleClick} className="" name="x" />
      </div>
      <div className="w-50 mx-auto">
        <Button clickHandler={handleClick} className="" name="4" />
        <Button clickHandler={handleClick} className="" name="5" />
        <Button clickHandler={handleClick} className="" name="6" />
        <Button clickHandler={handleClick} className="" name="-" />
      </div>
      <div className="w-50 mx-auto">
        <Button clickHandler={handleClick} className="" name="1" />
        <Button clickHandler={handleClick} className="" name="2" />
        <Button clickHandler={handleClick} className="" name="3" />
        <Button clickHandler={handleClick} className="" name="+" />
      </div>
      <div className="w-50 mx-auto">
        <Button clickHandler={handleClick} className="" name="0" />
        <Button clickHandler={handleClick} className="" name="." />
        <Button clickHandler={handleClick} className="" name="=" />
      </div>
    </div>
  </>
);

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
