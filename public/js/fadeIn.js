'use strict';

/***************** Fade-in from top to down */

const faders = document.querySelectorAll(".fade-in");

/* creation of an observer */
const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -150px 0px" /* when the scroll down reaches -150px */
};

//creation of the callback function
const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {

    //for each entry, you'll do the code below
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
},

    appearOptions);

//
faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

/***************** Fade-in from right/left to center */

const faders2 = document.querySelectorAll(".fade-side");

/* creation of an observer */
const appearOptions2 = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px" /* when the scroll down reaches -150px */
};

//creation of the callback function
const appearOnScroll2 = new IntersectionObserver(function (entries, appearOnScroll2) {

    //for each entry, you'll do the code below
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appearSide');
            appearOnScroll2.unobserve(entry.target);
        }
    })
},

    appearOptions2);

//
faders2.forEach(fader2 => {
    appearOnScroll2.observe(fader2);
});



