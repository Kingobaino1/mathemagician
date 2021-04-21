import Big from 'big.js';

const operates = (numberOne, numberTwo, operation) => {
  const firstInput = Big(+numberOne);
  const secondInput = Big(+numberTwo);
  let result;

  switch (operation) {
    case '+':
      result = firstInput.plus(secondInput);
      break;

    case '-':
      result = firstInput.minus(secondInput);
      break;

    case 'x':
      result = firstInput.times(secondInput);
      break;

    case '÷':
      result = firstInput.div(secondInput);
      break;

    case '%':
      result = secondInput.times(0.01);
      break;

    case 'AC':
      result = '';
      break;

    default:
      break;
  }
  return result.toString;
};

export default operates;
