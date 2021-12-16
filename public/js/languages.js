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
    h3.setAttribute("id","closeLanguage");
    
    textLanguage.appendChild(h3);
    h3.innerHTML = 'English';
    
    const p = document.createElement('p');  
    textLanguage.appendChild(p);
    p.innerHTML = `Hello there! <br> My English is pretty good. According to the Common European Framework of Reference for Languages, my level is C1.`;
    
});

/* const closeLanguage = document.getElementById("closeLanguage");

closeLanguage.addEventListener("click", function(){
    hideBubble.classList.toggle("hide-bubble");

   if ((french && german && spanish && english).classList.contains("hide-bubble")) {
        english.classList.remove("hide-bubble")
        french.classList.remove("hide-bubble")
        german.classList.remove("hide-bubble")
        spanish.classList.remove("hide-bubble")
    }

}) */


french.addEventListener("click", function () {
    hideBubble.classList.toggle("hide-bubble");

    if (!(french && german && spanish && english).classList.contains("hide-bubble")) {
        english.classList.add("hide-bubble")
        french.classList.add("hide-bubble")
        german.classList.add("hide-bubble")
        spanish.classList.add("hide-bubble")
    }

    /* french.innerHTML = 'X' */

    const h3 = document.createElement('h3');
    textLanguage.appendChild(h3);
    h3.setAttribute("id","closeLanguage");
    const closeLanguage = document.getElementById("closeLanguage");

    h3.innerHTML = 'French';

    const p = document.createElement('p');  
    textLanguage.appendChild(p);
    p.innerHTML = `Bonjour ! <br> French is my mother tongue. Je peux donc facilement m'adapter à différents environnements linguistiques.`;

});

german.addEventListener("click", function () {
    hideBubble.classList.toggle("hide-bubble");

    if (!(french && german && spanish && english).classList.contains("hide-bubble")) {
        english.classList.add("hide-bubble")
        french.classList.add("hide-bubble")
        german.classList.add("hide-bubble")
        spanish.classList.add("hide-bubble")
    }

    /* german.innerHTML = 'X' */

    const h3 = document.createElement('h3');
    textLanguage.appendChild(h3);
    h3.setAttribute("id","closeLanguage");
    const closeLanguage = document.getElementById("closeLanguage");

    h3.innerHTML = 'German';

    const p = document.createElement('p');  
    textLanguage.appendChild(p);
    p.innerHTML = `Hallo! <br> Deutsch ist meine Lieblingssprache. Ich würde gerne mehr auf Deutsch sprechen, aber in einem beruflichen Kontext hatte ich noch nie die Gelegenheit, es zu verwenden (level B1/B2).`;

});

spanish.addEventListener("click", function () {
    hideBubble.classList.toggle("hide-bubble");

    if (!(french && german && spanish && english).classList.contains("hide-bubble")) {
        english.classList.add("hide-bubble")
        french.classList.add("hide-bubble")
        german.classList.add("hide-bubble")
        spanish.classList.add("hide-bubble")
    }

    /* spanish.innerHTML = 'X' */

    const h3 = document.createElement('h3');
    textLanguage.appendChild(h3);
    h3.setAttribute("id","closeLanguage");
    const closeLanguage = document.getElementById("closeLanguage");

    h3.innerHTML = 'Spanish';

    const p = document.createElement('p');  
    textLanguage.appendChild(p);
    p.innerHTML = `Porque aprendí español en la universidad y en México. Lo entiendo/leo más que lo hablo, pero si es necesario estoy lista a practicar más el idioma (level A2/B1).`;

});


