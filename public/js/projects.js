'use strict';

/* TODO private to public HOME SAFE */

const project1 = document.getElementById('project1');
const project2 = document.getElementById('project2');
const homeSafe = document.getElementById('homeSafe');
const logo = document.getElementById('Groupe_10900');
const microphone = document.getElementById('microphone');
const hackathon = document.getElementById('hackathon');



//creation of a match function
function mediaQueryLarge(x){
  if (x.matches){
    //document.body.style.backgroundColor="yellow";

   project1.addEventListener('mouseover', showHideProject);
   project2.addEventListener('mouseover', showHideProject2);
  
  }
  else{
    project1.addEventListener('click', showHideProject);
    project2.addEventListener('click', showHideProject2);
  }
}

//creation of my mediaQUery list
const min960 = window.matchMedia("(min-width: 960px)")

//call of the function to be run 
mediaQueryLarge(min960);

//Add the match function as a listener for state changes:
min960.addListener(mediaQueryLarge);

/* all the functions show/hide */
function showHideProject(){
 
  logo.classList.toggle('hideProject')
  homeSafe.classList.toggle('hideProject')
  homeSafe.classList.toggle('txtProject')

}


function showHideProject2(){
 
  microphone.classList.toggle('hideProject')
  hackathon.classList.toggle('hideProject')
  hackathon.classList.toggle('txtProject')

}

