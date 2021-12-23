'use strict';

const english = document.getElementById("english");
const french = document.getElementById("french");
const german = document.getElementById("german");
const spanish = document.getElementById("spanish");
const hideBubble = document.getElementById("hideshowbubble");
const textLanguage = document.getElementById("text-language");
const meAndChatshimi = document.getElementById("manonSpeaking");


english.addEventListener("click", function () {

    hideBubble.classList.toggle("hide-bubble");

    if (!(french && german && spanish && english).classList.contains("hide-bubble")) {
        english.classList.add("hide-bubble")
        french.classList.add("hide-bubble")
        german.classList.add("hide-bubble")
        spanish.classList.add("hide-bubble")
    }

    const h3 = document.createElement('h3');
    //addition of an id on the element that will close the bubble when active
    h3.setAttribute("id", "closeLanguage");

    textLanguage.appendChild(h3);
    h3.innerHTML = "English";

    const p = document.createElement('p');


    textLanguage.appendChild(p);
    p.innerHTML = `Hello there! <br> My English is pretty good. According to the Common European Framework of Reference for Languages, my level is C1.`;


    //closing the bubble when the h3 is selected 
    const closeLanguage = document.getElementById("closeLanguage");

    closeLanguage.addEventListener("click", function () {
        //coming back to the normal div
        hideBubble.classList.toggle("hide-bubble");

        //deleting the text created 
        if ((french && german && spanish && english).classList.contains("hide-bubble")) {
            english.classList.remove("hide-bubble")
            french.classList.remove("hide-bubble")
            german.classList.remove("hide-bubble")
            spanish.classList.remove("hide-bubble")
            h3.setAttribute("class", "hide-bubble")
            p.setAttribute("class", "hide-bubble")
        }
    })

});


french.addEventListener("click", function () {
    hideBubble.classList.toggle("hide-bubble");

    if (!(french && german && spanish && english).classList.contains("hide-bubble")) {
        english.classList.add("hide-bubble")
        french.classList.add("hide-bubble")
        german.classList.add("hide-bubble")
        spanish.classList.add("hide-bubble")
    }

    const h3 = document.createElement('h3');
    textLanguage.appendChild(h3);
    h3.setAttribute("id", "closeLanguageFrench");
    const closeLanguageFrench = document.getElementById("closeLanguageFrench");

    h3.innerHTML = "French";

    const p = document.createElement('p');
    textLanguage.appendChild(p);
    p.innerHTML = `Bonjour ! <br> French is my mother tongue. Je peux donc facilement m'adapter à différents environnements linguistiques.`;

    closeLanguageFrench.addEventListener("click", function () {
        hideBubble.classList.toggle("hide-bubble");

        if ((french && german && spanish && english).classList.contains("hide-bubble")) {
            english.classList.remove("hide-bubble")
            french.classList.remove("hide-bubble")
            german.classList.remove("hide-bubble")
            spanish.classList.remove("hide-bubble")
            h3.setAttribute("class", "hide-bubble");
            p.setAttribute("class", "hide-bubble");
        }
    })

});

german.addEventListener("click", function () {
    hideBubble.classList.toggle("hide-bubble");

    if (!(french && german && spanish && english).classList.contains("hide-bubble")) {
        english.classList.add("hide-bubble")
        french.classList.add("hide-bubble")
        german.classList.add("hide-bubble")
        spanish.classList.add("hide-bubble")
    }

    const h3 = document.createElement('h3');
    textLanguage.appendChild(h3);
    h3.setAttribute("id", "closeLanguageGerman");
    const closeLanguageGerman = document.getElementById("closeLanguageGerman");

    h3.innerHTML = "German";

    const p = document.createElement('p');
    textLanguage.appendChild(p);
    p.innerHTML = `Hallo! <br> Deutsch ist meine Lieblingssprache. Ich würde gerne mehr auf Deutsch sprechen, aber in einem beruflichen Kontext hatte ich noch nie die Gelegenheit, es zu verwenden (level B1/B2).`;

    closeLanguageGerman.addEventListener("click", function () {
        hideBubble.classList.toggle("hide-bubble");

        if ((french && german && spanish && english).classList.contains("hide-bubble")) {
            english.classList.remove("hide-bubble")
            french.classList.remove("hide-bubble")
            german.classList.remove("hide-bubble")
            spanish.classList.remove("hide-bubble")
            h3.setAttribute("class", "hide-bubble");
            p.setAttribute("class", "hide-bubble");
        }
    })

});

spanish.addEventListener("click", function () {
    hideBubble.classList.toggle("hide-bubble");

    if (!(french && german && spanish && english).classList.contains("hide-bubble")) {
        english.classList.add("hide-bubble")
        french.classList.add("hide-bubble")
        german.classList.add("hide-bubble")
        spanish.classList.add("hide-bubble")
    }

    const h3 = document.createElement('h3');
    textLanguage.appendChild(h3);
    h3.setAttribute("id", "closeLanguageSpanish");
    const closeLanguageSpanish = document.getElementById("closeLanguageSpanish");

    h3.innerHTML = "Spanish";

    const p = document.createElement('p');
    textLanguage.appendChild(p);
    p.innerHTML = `Porque aprendí español en la universidad y en México. Lo entiendo/leo más que lo hablo, pero si es necesario estoy lista a practicar más el idioma (level A2/B1).`;

    closeLanguageSpanish.addEventListener("click", function () {
        hideBubble.classList.toggle("hide-bubble");

        if ((french && german && spanish && english).classList.contains("hide-bubble")) {
            english.classList.remove("hide-bubble")
            french.classList.remove("hide-bubble")
            german.classList.remove("hide-bubble")
            spanish.classList.remove("hide-bubble")
            h3.setAttribute("class", "hide-bubble");
            p.setAttribute("class", "hide-bubble");
        }
    })

});

