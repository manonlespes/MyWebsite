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