'use strict';
const calculateBtn = document.getElementById('start');

calculateBtn.addEventListener('click', () => {
  const input = document.getElementById('calculation').value;
  let res = '';

  if (input.includes('+')) {
    const nums = input.split('+');
    res = Number(nums[0]) + Number(nums[1]);
  } else if (input.includes('-')) {
    const nums = input.split('-');
    res = Number(nums[0]) - Number(nums[1]);
  } else if (input.includes('*')) {
    const nums = input.split('*');
    res = Number(nums[0]) * Number(nums[1]);
  } else if (input.includes('/')) {
    const nums = input.split('/');
    res = Number(nums[0]) / Number(nums[1]);
  } else {
    res = 'Wrong input';
  }

  const resultEl = document.getElementById('result');
  resultEl.innerHTML = res;
});