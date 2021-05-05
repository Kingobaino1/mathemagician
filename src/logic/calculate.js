import operates from './operate';

const calculate = (calcData, btnName) => {
  let {
    total,
    next,
    operate,
  } = calcData;

  const operators = ['+', '-', 'x', '÷', '%'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  switch (btnName) {
    case 'AC':
      total = '0';
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
      operate = null;
      break;

    case '=':
      if (total && next && operate) {
        total = operates(total, next, operate);
        next = null;
        operate = null;
      } else {
        total = '0';
      }

      break;

    case '.':
      if (total) {
        if (!total.includes('.')) {
          total = (total.concat('.'));
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
      total = btnName;
    }
  } else if (operators.includes(btnName) && btnName !== '%') {
    next = total;
    total = '0';
    operate = btnName;
  } else if (operators.includes(btnName) && btnName === '%') {
    next = total;
    total = next;
    operate = btnName;
  }

  return { total, next, operate };
};

export default calculate;
