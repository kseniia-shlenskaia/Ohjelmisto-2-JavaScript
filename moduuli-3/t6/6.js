'use strict';
const button = document.querySelector('button');

const onClickShowAlert = () => {
    alert('Button Clicked');
};

button.addEventListener('click', onClickShowAlert);
