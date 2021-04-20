import operate from './operate';

const calculate = (calcData, btnName) => {
  const {
    total,
    next,
    operate,
  } = calcData;

  switch (btnName) {
    case 'AC':
      total = null;
      next = null;
      operate = null;
      break;

    case '+/-':
      if(total) {
        total *= -1;
      }
      if(next) {
        next *= -1;
      }
      break;

    case '%':
      if(total) {
        next = (total * 0.01).toString;
      }
      break;

    case '=':
      if(total && next && operate) {
        total = operate(total, next, operate);
        next = null;
        operate = null;
      }
      break;

    case '.':
      
  
    default:
      break;
  }
}