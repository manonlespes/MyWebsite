'use strict';

const project1 = document.getElementById("project1");
const project2 = document.getElementById("project2");


project1.addEventListener("click", function(){
    const logo = document.getElementById("Groupe_10900");

    logo.style.display = 'none';

    //creation of a div with a class inside the div project1
    const div1 = document.createElement('div');
    div1.setAttribute("class", "txtProject");
    project1.appendChild(div1);

    //this div.txtProject1 will contain 2 divs
    const divWord = document.createElement("div");
    const divButton = document.createElement("div");

    //additon of a class on the div that will contain a "a" element like a button
    divButton.setAttribute("class", "buttonProject");

    //addtion od a description text
    divWord.innerHTML= "first project in group"


    //where the two divs should be nested -> inside the div.txtProject1
    div1.appendChild(divWord);
    div1.appendChild(divButton);

    //creation of a link -> a element
    const a= document.createElement("a");
    a.setAttribute("href", "https://github.com/Lison-creator/home_safe");
    a.setAttribute("target", "blank");
    a.setAttribute("rel", "noopener noreferrer");

    //text of the element

    a.innerHTML = `&lt; code &gt;`

    //above element nested inside the divButton
    divButton.appendChild(a);

})

project2.addEventListener("click", function(){

    const microphone = document.getElementById("microphone");

    microphone.style.display = 'none';

    //creation of a div with a class inside the div project1
    const div1 = document.createElement('div');
    div1.setAttribute("class", "txtProject");
    project2.appendChild(div1);

    //this div.txtProject1 will contain 2 divs
    const divWord = document.createElement("div");
    const divButton = document.createElement("div");

    //additon of a class on the div that will contain a "a" element like a button
    divButton.setAttribute("class", "buttonProject");

    //addtion od a description text
    divWord.innerHTML= "first project in group"


    //where the two divs should be nested -> inside the div.txtProject1
    div1.appendChild(divWord);
    div1.appendChild(divButton);

    //creation of a link -> a element
    const a= document.createElement("a");
    a.setAttribute("href", "https://github.com/fatimaKiki/hackathon-quizz-musical");
    a.setAttribute("target", "blank");
    a.setAttribute("rel", "noopener noreferrer");

    //text of the element

    a.innerHTML = `&lt; code &gt;`

    //above element nested inside the divButton
    divButton.appendChild(a);
})

/* const buttons = document.querySelectorAll('.project');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay__inner img');

function open(e) {
  overlay.classList.add('open');
  const src= e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
}

function close() {
  overlay.classList.remove('open');
}

buttons.forEach(button => button.addEventListener('click', open));
overlay.addEventListener('click', close);
 */


//creation of a match function
function mediaQueryLarge(x){
  if (x.matches){
    document.body.style.backgroundColor="yellow";
  }
  else{
    document.body.style.backgroundColor="#F2F5F8";
  }
}

//creation of my mediaQUery list
const min960 = window.matchMedia("(max-width: 700px)")

//call of the function to be run 
mediaQueryLarge(min960);

//Add the match function as a listener for state changes:
min960.addListener(mediaQueryLarge);

