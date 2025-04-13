'use strict';
const triggerEl = document.getElementById('trigger');

triggerEl.addEventListener('mouseover', () => {
    document.getElementById('target').src = 'img/picB.jpg';
});

triggerEl.addEventListener('mouseleave', () => {
    document.getElementById('target').src = 'img/picA.jpg';
});
