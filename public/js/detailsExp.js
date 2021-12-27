'use strict';

const moreExp1 = document.getElementById("moreExp1");
const detailsExp1 = document.getElementById("detailsExp1");
/* const moreExperiences = Array.from(document.querySelectorAll(".more"));

moreExperiences.forEach(moreExperience => {

    moreExperience.addEventListener("click", () => {
        const activeElements = Array.from(document.querySelectorAll(".visibleExp"))

        activeElements.forEach(activeElement => {
            activeElement.classList.remove("visibleExp");
            activeElement.classList.add("hide");
        });
        moreExperience.parentElement.classList.add("visibleExp");

    });
}); */


/* const buttonElements = Array.from(document.querySelectorAll('.button'));
buttonElements.forEach(buttonElement => {
    buttonElement.addEventListener('click', () => {
        const activeElements = Array.from(document.querySelectorAll('.is-active'));
        activeElements.forEach(activeElement => {
            activeElement.classList.remove('is-active');
        });
        buttonElement.parentElement.classList.add('is-active');
    });
}); */


moreExp1.addEventListener("click", function (e) {
  e.preventDefault;

    /* remove the hide class */
    detailsExp1.classList.toggle("hide");
    /* add the visibleExp class */
    detailsExp1.classList.toggle("visibleExp");

    /*write back see more + */

    /* change the text */
    if (this.innerHTML === "SEE LESS -") {
        this.innerHTML = "SEE MORE +"
   }
   else {
        this.innerHTML = "SEE LESS -"
   }
 })

const moreExp2 = document.getElementById("moreExp2");
const detailsExp2 = document.getElementById("detailsExp2");

moreExp2.addEventListener("click", function (e) {
    e.preventDefault;

    /* remove the hide class */
    detailsExp2.classList.toggle("hide");
    /* add the visibleExp class */
    detailsExp2.classList.toggle("visibleExp");
    /*write back see more + */

    /* change the text */
    if (this.innerHTML == "SEE LESS -") {
        this.innerHTML = "SEE MORE +"
    }
    else {
        this.innerHTML = "SEE LESS -"
    }
})

const moreExp3 = document.getElementById("moreExp3");
const detailsExp3 = document.getElementById("detailsExp3");

moreExp3.addEventListener("click", function (e) {
    e.preventDefault;
    /* change the text */
    if (this.innerHTML == "SEE LESS -") {
        this.innerHTML = "SEE MORE +"
    }
    else {
        this.innerHTML = "SEE LESS -"
    }

    /* remove the hide class */
    detailsExp3.classList.toggle("hide");
    /* add the visibleExp class */
    detailsExp3.classList.toggle("visibleExp");

    /*write back see more + */
})

const moreExp4 = document.getElementById("moreExp4");
const detailsExp4 = document.getElementById("detailsExp4");

moreExp4.addEventListener("click", function (e) {
    e.preventDefault;
    /* change the text */
    if (this.innerHTML == "SEE LESS -") {
        this.innerHTML = "SEE MORE +"
    }
    else {
        this.innerHTML = "SEE LESS -"
    }

    /* remove the hide class */
    detailsExp4.classList.toggle("hide");
    /* add the visibleExp class */
    detailsExp4.classList.toggle("visibleExp");

    /*write back see more + */
})

const moreExp5 = document.getElementById("moreExp5");
const detailsExp5 = document.getElementById("detailsExp5");




/* à faire avec un call back ou alors créer une fonctione particulière */
