import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <>
    <div className="w-50 mx-auto">
      <div className="w-50 mx-auto">
        <Button className="" name="AC" />
        <Button className="" name="+/-" />
        <Button className="" name="%" />
        <Button className="" name="/" />
      </div>
      <div className="w-50 mx-auto">
        <Button className="" name="7" />
        <Button className="" name="8" />
        <Button className="" name="9" />
        <Button className="" name="*" />
      </div>
      <div className="w-50 mx-auto">
        <Button className="" name="4" />
        <Button className="" name="5" />
        <Button className="" name="6" />
        <Button className="" name="-" />
      </div>
      <div className="w-50 mx-auto">
        <Button className="" name="1" />
        <Button className="" name="2" />
        <Button className="" name="3" />
        <Button className="" name="+" />
      </div>
      <div className="w-50 mx-auto">
        <Button className="" name="0" />
        <Button className="" name="." />
        <Button className="" name="=" />
      </div>
    </div>
  </>
);

export default ButtonPanel;
