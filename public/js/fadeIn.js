'use strict';

const faders = document.querySelectorAll(".fade-in");

/* creation of an observer */

const appearOptions = {
    threshold: 1,
    rootMargin: "0px 0px -150px 0px" /* when the scroll down reaches -150px */
};

//creation of the callback fucntion
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


// creation of another class with another way of apperaing on screen /* TODO */