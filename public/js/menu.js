'use strict';

/*----------------------------- MENU HAMBURGER -----------------------------*/

/* search in the DOM my elements */
const menu = document.getElementById('menu');
const hamburger = document.getElementById('menu_hamburger');
const close_menu = document.getElementById('close_menu');


hamburger.addEventListener('click', function(){
    /* for the element "menu", addition/delete of the class 'hide_menu' */
    menu.classList.toggle('hide_menu');
    menu.classList.toggle('bounce');

})

close_menu.addEventListener('click', function(){
    menu.classList.toggle('hide_menu');
    menu.classList.toggle('bounce');

})




