import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const firstInput = Big(+numberOne);
  const secondInput = Big(+numberTwo);
  let result;

  switch (operation) {
    case '+':
      result = firstInput + secondInput;
      break;

    case '-':
      result = firstInput - secondInput;
      break;

    case 'x':
      result = firstInput * secondInput;
      break;

    case '÷':
      result = firstInput / secondInput;
      break;

    case '%':
        result = secondInput * 0.01;
      break;
    
    case 'AC':
      result = '';
      break
  
    default:
      break;
  }
  return result.toString;
};

export default operate;
