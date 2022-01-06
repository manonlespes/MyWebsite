'use strict';


const moreExperiences = document.querySelectorAll(".more");
// moreExpS : [moreExp1, moreExp2, moreExp3, moreExp4]
console.log(moreExperiences)

moreExperiences.forEach(moreExperience => {

    moreExperience.addEventListener("click", () => {
        

        //split and take the second element after the - which will be the number (index 1)
        let elementId = moreExperience.id.split('-')[1];
        console.log(elementId);
        let activeElId = `#detailsExp-${elementId}`;
        const activeElement = document.querySelector(activeElId)
        // activeElements.forEach(activeElement => {
            activeElement.classList.toggle("hide")
            activeElement.classList.toggle("visibleExp")
        //     console.log(activeElement.classList)
        // });

        //write back see more + 

        // change the text 
        if (moreExperience.innerHTML === "SEE LESS -") {
            moreExperience.innerHTML = "SEE MORE +"
        }
        else {
            moreExperience.innerHTML = "SEE LESS -"}
        
    });
}); 



/******** the code below works but is a liiiiiitle bit too long, I think, so the one above is  */


/* const moreExp1 = document.getElementById("moreExp1");
const detailsExp1 = document.getElementById("detailsExp1");

moreExp1.addEventListener("click", function (e) {
  e.preventDefault;

   // remove the hide class 
    detailsExp1.classList.toggle("hide");
   // add the visibleExp class 
    detailsExp1.classList.toggle("visibleExp");

   //write back see more + 

   // change the text 
    if (this.innerHTML === "SEE LESS -") {
        this.innerHTML = "SEE MORE +"
   }
   else {
        this.innerHTML = "SEE LESS -"
   }
 }) 

/* const moreExp2 = document.getElementById("moreExp2");
const detailsExp2 = document.getElementById("detailsExp2"); */

//moreExp2.addEventListener("click", function (e) {
//    e.preventDefault;

    /* remove the hide class */
//    detailsExp2.classList.toggle("hide");
    /* add the visibleExp class */
//    detailsExp2.classList.toggle("visibleExp");
    /*write back see more + */

    /* change the text */
//    if (this.innerHTML == "SEE LESS -") {
//        this.innerHTML = "SEE MORE +"
//    }
//    else {
//        this.innerHTML = "SEE LESS -"
//    }
//})

/* const moreExp3 = document.getElementById("moreExp3");
const detailsExp3 = document.getElementById("detailsExp3");

moreExp3.addEventListener("click", function (e) {
    e.preventDefault;
    //change the text//
    if (this.innerHTML == "SEE LESS -") {
        this.innerHTML = "SEE MORE +"
    }
    else {
        this.innerHTML = "SEE LESS -"
    }

   // remove the hide class//
    detailsExp3.classList.toggle("hide");
   // add the visibleExp class//
    detailsExp3.classList.toggle("visibleExp");

   //write back see more +//
})

const moreExp4 = document.getElementById("moreExp4");
const detailsExp4 = document.getElementById("detailsExp4");

moreExp4.addEventListener("click", function (e) {
    e.preventDefault;
   // change the text//
    if (this.innerHTML == "SEE LESS -") {
        this.innerHTML = "SEE MORE +"
    }
    else {
        this.innerHTML = "SEE LESS -"
    }

   // remove the hide class//
    detailsExp4.classList.toggle("hide");
   // add the visibleExp class//
    detailsExp4.classList.toggle("visibleExp");

   //write back see more +//
})

const moreExp5 = document.getElementById("moreExp5");
const detailsExp5 = document.getElementById("detailsExp5"); */



