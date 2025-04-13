'use strict';
const calculateBtn = document.getElementById('start');

calculateBtn.addEventListener('click', () => {
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  const operationName = document.getElementById('operation').value;

  let result = '';

  switch (operationName) {
    case 'add':
      result = num1 + num2;
      break;
    case 'sub':
      result = num1 - num2;
      break;
    case 'multi':
      result = num1 * num2;
      break;
    case 'div':
      result = num1 / num2;
      break;
    default:
      result = 'Wrong input';
  }

  const resultEl = document.getElementById('result');
  resultEl.innerHTML = result;
});
