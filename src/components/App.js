import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [calData, setCalcData] = useState(
    {
      total: '0',
      next: '',
      operate: '',
    },
  );
  const handleClick = (btnName) => {
    setCalcData(calculate(calData, btnName));
  };
  return (
    <>
      <Display value={calData.total} />
      <ButtonPanel handleClick={handleClick} />
    </>
  );
};

export default App;
