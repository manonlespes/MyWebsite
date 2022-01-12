'use strict';

const moreBackgrounds = document.querySelectorAll(".moreBack");
// moreBackS : [moreBack-1, moreBack-2, moreBack-3, moreBack-4]


moreBackgrounds.forEach(moreBackground=>{

    moreBackground.addEventListener("click", () => {

        //split and take the second element after the - which will be the number (index 1)
        let elementId = moreBackground.id.split("-")[1];

        let activeElId = `#detailsBack-${elementId}`;

        //dev only the content of to the element selected
        const selectedEl = document.querySelector(activeElId)
        selectedEl.classList.toggle("hide")
        selectedEl.classList.toggle("visibleBack")


        //write back see more + 
        // change the text 
        if (moreBackground.innerHTML === "SEE LESS -") {
            moreBackground.innerHTML = "SEE MORE +"
        }
        else {
            moreBackground.innerHTML = "SEE LESS -"}

    });
})

