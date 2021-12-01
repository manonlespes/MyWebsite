'use strict';

const moreBack1 = document.getElementById("moreBack1");
const detailsBack1 = document.getElementById("detailsBack1");

moreBack1.addEventListener("click", function (e) {
    e.preventDefault;
    
    /* remove the hide class */
    detailsBack1.classList.toggle("hide");
    /* add the visibleBack class */
    detailsBack1.classList.toggle("visibleBack");
    
    /*write back see more + */

    /* change the text */
    if (this.innerHTML === "SEE LESS -") {
        this.innerHTML = "SEE MORE +"
    }
    else{
        this.innerHTML = "SEE LESS -"
    }
})

const moreBack2 = document.getElementById("moreBack2");
const detailsBack2 = document.getElementById("detailsBack2");

moreBack2.addEventListener("click", function (e) {
    e.preventDefault;
   
    /* remove the hide class */
    detailsBack2.classList.toggle("hide");
    /* add the visibleBack class */
    detailsBack2.classList.toggle("visibleBack");
    /*write back see more + */

    /* change the text */
    if (this.innerHTML === "SEE LESS -") {
        this.innerHTML = "SEE MORE +"
    }
    else{
        this.innerHTML = "SEE LESS -"
    }
})

const moreBack3 = document.getElementById("moreBack3");
const detailsBack3 = document.getElementById("detailsBack3");

moreBack3.addEventListener("click", function (e) {
    e.preventDefault;
   /* change the text */
    if (this.innerHTML === "SEE LESS -") {
        this.innerHTML = "SEE MORE +"
    }
    else{
        this.innerHTML = "SEE LESS -"
    }

    /* remove the hide class */
    detailsBack3.classList.toggle("hide");
    /* add the visibleBack class */
    detailsBack3.classList.toggle("visibleBack");

    /*write back see more + */
})

const moreBack4 = document.getElementById("moreBack4");
const detailsBack4 = document.getElementById("detailsBack4");

moreBack4.addEventListener("click", function (e) {
    e.preventDefault;
   /* change the text */
    if (this.innerHTML === "SEE LESS -") {
        this.innerHTML = "SEE MORE +"
    }
    else{
        this.innerHTML = "SEE LESS -"
    }

    /* remove the hide class */
    detailsBack4.classList.toggle("hide");
    /* add the visibleBack class */
    detailsBack4.classList.toggle("visibleBack");

    /*write back see more + */
})

const moreBack5 = document.getElementById("moreBack5");
const detailsBack5 = document.getElementById("detailsBack5");


moreBack5.addEventListener("click", function (e) {
    e.preventDefault;
   /* change the text */
    if (this.innerHTML === "SEE LESS -") {
        this.innerHTML = "SEE MORE +"
    }
    else{
        this.innerHTML = "SEE LESS -"
    }

    /* remove the hide class */
    detailsBack5.classList.toggle("hide");
    /* add the visibleBack class */
    detailsBack5.classList.toggle("visibleBack");

    /*write back see more + */
})

const moreBack6 = document.getElementById("moreBack6");
const detailsBack6 = document.getElementById("detailsBack6");


moreBack6.addEventListener("click", function (e) {
    e.preventDefault;
   /* change the text */
    if (this.innerHTML === "SEE LESS -") {
        this.innerHTML = "SEE MORE +"
    }
    else{
        this.innerHTML = "SEE LESS -"
    }

    /* remove the hide class */
    detailsBack6.classList.toggle("hide");
    /* add the visibleBack class */
    detailsBack6.classList.toggle("visibleBack");

    /*write back see more + */
})



/* à faire avec un call back ou alors créer une fonctione particulière */
