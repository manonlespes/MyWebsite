'use strict';

/*----------------------------- MENU HAMBURGER -----------------------------*/

/* search in the DOM my elements */
const menu = document.getElementById('menu');
const hamburger = document.getElementById('menu_hamburger');
const close_menu = document.getElementById('close_menu');

hamburger.addEventListener('click', function(){
    /* for the element "menu", addition/delete of the class 'hide_menu' */
    menu.classList.toggle('hide_menu');
})

close_menu.addEventListener('click', function(){
    menu.classList.toggle('hide_menu');
})


/* bounce effect */

element.addEventListener("click", function(e) {
  e.preventDefault;
  
  // -> removing the class
  element.classList.remove("bounce");
  
  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  element.offsetWidth = element.offsetWidth;
  
  // -> and re-adding the class
  element.classList.add("bounce");
}, false);


