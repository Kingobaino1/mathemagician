import operates from './operate';

const calculate = (calcData, btnName) => {
  let {
    total,
    next,
    operate,
  } = calcData;

  const operators = ['+', '-', 'x', '÷'];
  const numbers = ['0', '1', '3', '4', '5', '6', '7', '8', '9'];

  switch (btnName) {
    case 'AC':
      total = null;
      next = null;
      operate = null;
      break;

    case '+/-':
      if (total) {
        total *= -1;
      }
      if (next) {
        next *= -1;
      }
      break;

    case '%':
      if (total) {
        next = (total * 0.01).toString;
      }
      break;

    case '=':
      if (total && next && operate) {
        total = operates(total, next, operate);
        next = null;
        operate = null;
      }
      break;

    case '.':
      if (total) {
        if (total.includes('.')) {
          total = '0.';
        }
      }
      break;

    default:
      break;
  }

  if (numbers.includes(btnName)) {
    if (total) {
      total = total.concat(btnName);
    } else if (next) {
      next = next.concat(btnName);
    } else {
      return btnName;
    }
  } else if (operators.includes(btnName)) {
    operate = btnName;
  }

  return { total, next, operate };
};

export default calculate;
