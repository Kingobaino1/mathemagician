import Big from 'big.js';

const operates = (numberOne, numberTwo, operation) => {
  const firstInput = Big(numberOne);
  const secondInput = Big(numberTwo);
  let result;

  switch (operation) {
    case '+':
      result = +firstInput.plus(+secondInput);
      break;

    case '-':
      result = +secondInput.minus(+firstInput);
      break;

    case 'x':
      result = +firstInput.times(+secondInput);
      break;

    case '÷':
      if (numberOne !== 0) {
        result = +secondInput.div(+firstInput);
      } else {
        result = 'Maths Error';
      }
      break;

    case '%':
      result = +secondInput.div(100);
      break;

    case 'AC':
      result = '0';
      break;

    default:
      break;
  }
  return (result.toString());
};

export default operates;
