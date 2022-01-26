'use strict';

/***************** Fade-in from top to down */

const faders = document.querySelectorAll(".fade-in");

/* creation of an observer */
const appearOptions = {
    threshold: 0.85,
    rootMargin: "0px 0px -120px 0px" /* when the scroll down reaches -150px */
};

//creation of the callback function
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {

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

/***************** Fade-in from left to center */

const fadersLeft = document.querySelectorAll(".fade-sideLeft");

/* creation of an observer */
const appearOptionsLeft = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px" /* when the scroll down reaches -100px */
};

//creation of the callback function
const appearOnScroll2 = new IntersectionObserver((entries, appearOnScroll2) => {

    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        else {
            entry.target.classList.add('appearSideLeft');
            appearOnScroll2.unobserve(entry.target);
        }
    })
    
},

    appearOptionsLeft);

// application of the function
fadersLeft.forEach(faderLeft => {
    appearOnScroll2.observe(faderLeft);
});


/***************** Fade-in from right to center */

const fadersRight = document.querySelectorAll(".fade-sideRight");

/* creation of an observer */
const appearOptionsRight = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px" /* when the scroll down reaches -150px */
};

//creation of the callback function
const appearOnScroll3 = new IntersectionObserver((entries, appearOnScroll3) =>{

    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        else {
            entry.target.classList.add('appearSideRight');
            appearOnScroll3.unobserve(entry.target);
        }
    })
    
},

    appearOptionsRight);

// application of the function
fadersRight.forEach(faderRight => {
    appearOnScroll3.observe(faderRight);
});



