'use strict';

const gaugeFill = document.getElementById("gaugeFill");

// events for skills estimated at 90% - fill comfortable with
const html = document.getElementById("html");
const illustrator = document.getElementById("illustrator");
const xd = document.getElementById("xd");
const vsCode = document.getElementById("vsCode");

const comfortable = document.querySelectorAll(".comfortable");
/* TODO continue to add the class to all the programmes wanted not finished */
// use of a forEach

html.addEventListener("click", function (){

    if (gaugeFill.classList.contains("gaugeFillHidden")) {
        gaugeFill.classList.toggle("gaugeFillHidden")
        gaugeFill.classList.add("gaugeFill90")
    }

    else if (gaugeFill.classList.contains("gaugeFill70") ){
        gaugeFill.classList.remove("gaugeFill70")
        gaugeFill.classList.add("gaugeFill90")
    }

    else{
        gaugeFill.classList.add("gaugeFill90")
    }

});

illustrator.addEventListener("click", function (){
    gaugeFill.classList.toggle("gaugeFillHidden");
    
    if (!(gaugeFill).classList.contains("gaugeFill90")){
        gaugeFill.classList.add("gaugeFill90")
    }
});

xd.addEventListener("click", function (){
    gaugeFill.classList.toggle("gaugeFillHidden");
    
    if (!(gaugeFill).classList.contains("gaugeFill90")){
        gaugeFill.classList.add("gaugeFill90")
    }
});

vsCode.addEventListener("click", function (){
    gaugeFill.classList.toggle("gaugeFillHidden");
    
    if (!(gaugeFill).classList.contains("gaugeFill90")){
        gaugeFill.classList.add("gaugeFill90")
    }
});



// events for skills estimated at 70% - fill quite comfortable with

const css = document.getElementById("css");
const sass = document.getElementById("sass");
const bootstrap = document.getElementById("bootstrap");
const wordpress = document.getElementById("wordpress");

css.addEventListener("click", function (){
    gaugeFill.classList.toggle("gaugeFillHidden");
    
    if (!(gaugeFill).classList.contains("gaugeFill70") ){
        gaugeFill.classList.add("gaugeFill70")
    }
});

bootstrap.addEventListener("click", function (){
    gaugeFill.classList.toggle("gaugeFillHidden");
    
    if (!(gaugeFill).classList.contains("gaugeFill70")){
        gaugeFill.classList.add("gaugeFill70")
    }
});

wordpress.addEventListener("click", function (){
    gaugeFill.classList.toggle("gaugeFillHidden");
    
    if (!(gaugeFill).classList.contains("gaugeFill70")){
        gaugeFill.classList.add("gaugeFill70")
    }
});

sass.addEventListener("click", function (){
    gaugeFill.classList.toggle("gaugeFillHidden");
    
    if (!(gaugeFill).classList.contains("gaugeFill70")){
        gaugeFill.classList.add("gaugeFill70")
    }
});


