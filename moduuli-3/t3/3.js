'use strict';
const names = ['John', 'Paul', 'Jones'];
const target = document.getElementById('target');

let listItemsString = '';

for (let i = 0; i < names.length; i++) {
    listItemsString += `<li>${names[i]}</li>`;
}

target.innerHTML = listItemsString;
