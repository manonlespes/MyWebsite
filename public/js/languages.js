'use strict';

const languages = document.querySelectorAll('.languages_bubble');
const titleLanguages = document.getElementById('title_languages');
const closeLanguage = document.querySelectorAll('.close_language');
const bubble = document.getElementById('hideshowbubble');

// for each Lg selected, there is an event on click
languages.forEach(language => {

    language.addEventListener('click', () => {

        //on the id of my element, a split will be done after the - and I keep in memory the second element splited -> index 1
        let elementId = language.id.split('-')[1];
        //console.log(elementId);

        // so that it corresponds to the text I want to appear
        let activeElId = `#text-${elementId}`;

        //when clicked the text-(1) will appear and the div title-languages will be hidden
        const activeLanguage = document.querySelector(activeElId);
        /* console.log(activeLanguage) */
        activeLanguage.classList.remove('hide-text');
        titleLanguages.classList.add('hide-text');
        bubble.classList.remove('hide-bubble');


        closeLanguage.forEach(element => {

            element.addEventListener('click', () => {
              /*   console.log("element clické") */

                activeLanguage.classList.add('hide-text')
                titleLanguages.classList.remove('hide-text')
                bubble.classList.add('hide-bubble');

            });
        });
    });
});

