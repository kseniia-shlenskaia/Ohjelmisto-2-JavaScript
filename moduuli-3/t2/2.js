'use strict';
const target = document.getElementById('target');

const firstItem = document.createElement('li');
firstItem.innerHTML = 'First item';

const secondItem = document.createElement('li');
secondItem.innerHTML = 'Second item';
secondItem.classList.add('my-item');

const thirdItem = document.createElement('li');
thirdItem.innerHTML = 'Third item';

target.appendChild(firstItem);
target.appendChild(secondItem);
target.appendChild(thirdItem);