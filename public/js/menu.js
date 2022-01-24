'use strict';


/*----------------------------- MENU HAMBURGER -----------------------------*/

/* search in the DOM my elements */
const menu = document.getElementById('menu');
const hamburger = document.getElementById('menu_hamburger');
const closeCross = document.getElementById('close_menu');
const menuBack = document.getElementById('menu_back');


hamburger.addEventListener('click', openMenu);
closeCross.addEventListener('click', closeMenu);
const linksMenu = menu.querySelectorAll('.link_menu');
linksMenu.forEach( (linkMenu) => {
    linkMenu.addEventListener('click', closeMenu);
});
menuBack.addEventListener('click', closeMenu);


 function openMenu(){
    //on click on the hamburger add class to the menu to show it
   
        menu.classList.add('bounce');
        menu.classList.remove('hide_menu');
    
        menuBack.classList.remove('menu_back_hide');
}


function closeMenu(){
    //close the menu when click on the cross
  
        //add the hide class
        menu.classList.add('hide_menu');
        //remove the bounce effect
        menu.classList.remove('bounce');

        menuBack.classList.add('menu_back_hide');
    
} 



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



//hamburger.addEventListener('click', function () {

    /* for the element "menu", addition/delete of the class 'hide_menu' */
    //remove the hide class
    //menu.classList.toggle('hide_menu');
    //add the bounce effect
    //menu.classList.toggle('bounce');

//})

 //closeCross.addEventListener('click', function () {

    //add the hide class
  //  menu.classList.toggle('hide_menu');
    //remove the bounce effect
    //menu.classList.toggle('bounce');

//})

