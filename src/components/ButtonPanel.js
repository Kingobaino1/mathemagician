import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ handleClick }) => (
  <>
    <div className="buttonPanel">
      <div className="row mt-2 btnPanel">
        <div className="col-12">
          <Button color="button" clickHandler={handleClick} name="AC" />
          <Button color="button" clickHandler={handleClick} name="+/-" />
          <Button color="button" clickHandler={handleClick} name="%" />
          <Button color="button" clickHandler={handleClick} name="÷" />
        </div>
        <div className="col-12">
          <Button color="number" clickHandler={handleClick} name="7" />
          <Button color="number" clickHandler={handleClick} name="8" />
          <Button color="number" clickHandler={handleClick} name="9" />
          <Button color="button" clickHandler={handleClick} name="x" />
        </div>
        <div className="col-12">
          <Button color="number" clickHandler={handleClick} name="4" />
          <Button color="number" clickHandler={handleClick} name="5" />
          <Button color="number" clickHandler={handleClick} name="6" />
          <Button color="button" clickHandler={handleClick} name="-" />
        </div>
        <div className="col-12">
          <Button color="number" clickHandler={handleClick} name="1" />
          <Button color="number" clickHandler={handleClick} name="2" />
          <Button color="number" clickHandler={handleClick} name="3" />
          <Button color="button" clickHandler={handleClick} name="+" />
        </div>
        <div className="col-12">
          <Button color="number" clickHandler={handleClick} name="0" />
          <Button color="number" clickHandler={handleClick} name="." />
          <Button big clickHandler={handleClick} name="=" />
        </div>
      </div>
    </div>
  </>
);

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
