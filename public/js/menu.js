'use strict';

const menu = document.getElementById('menu');
const close_menu = document.getElementById('close_menu');
const hide_menu = document.querySelectorAll('.hide_menu');
const hamburger = document.querySelectorAll('.menu_hamburger');

hamburger.addEventListener('click', function(){
    menu.classList.toggle('hide_menu');
})