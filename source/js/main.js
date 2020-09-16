'use strict';

var body = document.body;
var nav = document.querySelector('.main-nav');
var toggle = document.querySelector('.main-nav__toggle');

body.classList.remove('no-js');

toggle.addEventListener('click', function () {
  nav.classList.toggle('main-nav--opened');
});
