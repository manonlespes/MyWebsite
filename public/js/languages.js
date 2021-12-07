'use strict';

const english = document.getElementById("english");
const french = document.getElementById("french");
const german = document.getElementById("german");
const spanish = document.getElementById("spanish");
const hideBubble = document.getElementById("hideshowbubble");
const textLanguage = document.getElementById("text-language");


english.addEventListener("click", function () {

    hideBubble.classList.toggle("hide-bubble");

    if (!(french && german && spanish && english).classList.contains("hide-bubble")) {
        english.classList.add("hide-bubble")
        french.classList.add("hide-bubble")
        german.classList.add("hide-bubble")
        spanish.classList.add("hide-bubble")
    }

    /* english.innerHTML = 'X' */

    const h3 = document.createElement('h3');
    textLanguage.appendChild(h3);
    h3.innerHTML = 'English';

    const p = document.createElement('p');  
    textLanguage.appendChild(p);
    p.innerHTML = `Hello there! <br> My English is pretty good. According to the Common European Framework of Reference for Languages, my level is C1.`;

});

french.addEventListener("click", function () {
    hideBubble.classList.toggle("hide-bubble");

});

german.addEventListener("click", function () {
    hideBubble.classList.toggle("hide-bubble");

});

spanish.addEventListener("click", function () {
    hideBubble.classList.toggle("hide-bubble");

});
