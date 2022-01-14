'use strict';



/*----------------------------- MENU HAMBURGER -----------------------------*/

/* search in the DOM my elements */
const menu = document.getElementById('menu');
const hamburger = document.getElementById('menu_hamburger');
const close_menu = document.getElementById('close_menu');
const body = document.getElementById('body');

hamburger.addEventListener('click', function (e) {

    /* for the element "menu", addition/delete of the class 'hide_menu' */
    //remove the hide class
    menu.classList.toggle('hide_menu');
    //add the bounce effect
    menu.classList.toggle('bounce');

});


close_menu.addEventListener('click', function () {

    //add the hide class
    menu.classList.toggle('hide_menu');
    //remove the bounce effect
    menu.classList.toggle('bounce');

});

/*----------------------------- SHADOW MENU -----------------------------*/


function shadowMenu() {
    const nav = document.querySelector(".permanent_nav")

   if (nav.classList.contains("shadow-menu")) {
        nav.classList.remove("shadow-menu")
    }
    else {
        nav.classList.add("shadow-menu")
    } 
    
    /* (!(nav.classList.contains("sadow-menu"))) ? nav.classList.toggle("shadow-menu"): nav.classList.remove("shadow-menu"); */
};




