<script src="https://code.createjs.com/1.0.0/createjs.min.js"></script>
<script src="public/js/coloriage.js"></script>
<script>
var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	var comp=AdobeAn.getComposition("61DEEE75188EA0458B9D82F932470B70");
	var lib=comp.getLibrary();
	handleComplete({},comp);
}
function handleComplete(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	exportRoot = new lib.coloriage();
	stage = new lib.Stage(canvas);
	stage.enableMouseOver();	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = lib.properties.fps;
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(true,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();
}
</script>




<section class="drawings">

    <h2 class="h2"> Projects - Using Adobe programmes</h2>

    <h3>Projects done with Illustrator</h3>
    <div class="illustrator">
        <div class="border">
            <a target="_blank" href="public/images/gallery/Carte_postale_1.png">
                <img src="public/images/gallery/Carte_postale_1.png" title="Sunset" alt="image-of-a-sunset">
            </a>
            <div class="desc">Design a postal card for <a href="https://www.interface3.be/" target="_blank" rel="noopener noreferrer">Interface3</a> while on summer holidays. <br> Done with Adobe Illustrator.</div>
        </div>

        <div class="border">
            <a target="_blank" href="public/images/gallery/Carte_vacances_2.png">
                <img src="public/images/gallery/Carte_vacances_2.png" title="Chilling hard" alt="image-chilling-holidays">
            </a>
            <div class="desc">Design a postal card for <a href="https://www.interface3.be/" target="_blank" rel="noopener noreferrer">Interface3</a> while on summer holidays and as I had so much fun, I drew another one. <br> Done with Adobe Illustrator.</div>
        </div>
    </div>


    <h3>Project done with Adobe Animate</h3>

    <div class="animate">

        <div class="desc">
            <p class="text">The colouring is an original idea from our Adobe Animate course instructor. After the first exercise, I decided to take this project a step further. All the elements were first drawn on Illustrator and the colouring actions were done via Animate using some Js.</p>
            <p class="text">Altough the animation is responsive, it's best to try it on a desktop computer. Take the brush in the lower left corner and choose the colours you want to colour Chatshimi. Use the eraser above the painting box should you wish to start over.</p>
        </div>

        <div id="animation_container" class="chatshimi">
            <canvas id="canvas" style="border-radius:10px"></canvas>
            <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:900px; height:676px; position: absolute; left: 0px; top: 0px; display: block;">
            </div>
        </div>
    </div>

    <h2 class="h2">Other Projects</h2>

    <h3>Personal drawings - Dry Pastel</h3>

    <div class="pastel">

        <div class="border">
            <a target="_blank" href="public/images/gallery/leopard_small.jpg">
                <picture>
                    <source media="(min-width:700px) " srcset="public/images/gallery/leopard_medium.jpg">
                    <source media="(min-width:960px)" srcset="public/images/gallery/leopard_large.jpg">
                    <img src="public/images/gallery/leopard_small.jpg" title="The gaze of a leopard" alt="gaze-leopard">
                </picture>
            </a>
            <div class="desc"><span>The Gaze Of A Leopard</span><br> Dry pastel - 30cm X 49.5cm </div>
        </div>

        <div class="border">
            <a target="_blank" href="public/images/gallery/Eye_cat_small.jpg">
                <picture>
                    <source media="(min-width:700px) " srcset="public/images/gallery/Eye_cat_medium.jpg">
                    <source media="(min-width:960px)" srcset="public/images/gallery/Eye_cat_large.jpg">
                    <img src="public/images/gallery/Eye_cat_small.jpg" title="Eyes of Cat" alt="Eyes-of-cat">
                </picture>
            </a>
            <div class="desc"><span>Eyes Of A Cat</span> <br> Dry pastel - 23cm x 31cm </div>
        </div>

        <div class="border">
            <a target="_blank" href="public/images/gallery/fruit_small.jpg">
                <picture>
                    <source media="(min-width:700px) " srcset="public/images/gallery/fruit_medium.jpg">
                    <source media="(min-width:960px)" srcset="public/images/gallery/fruit_large.jpg">
                    <img src="public/images/gallery/fruit_small.jpg" title="Red fruits" alt="fruits">
                </picture>
            </a>
            <div class="desc"><span>Red Fruits</span><br> Dry pastel - 24cm X 24cm</div>
        </div>

        <div class="border">
            <a target="_blank" href="public/images/gallery/girl_small.jpg">
                <picture>
                    <source media="(min-width:700px) " srcset="public/images/gallery/girl_medium.jpg">
                    <source media="(min-width:960px)" srcset="public/images/gallery/girl_large.jpg">
                    <img src="public/images/gallery/girl_small.jpg" title="Little girl" alt="litte-girl">
                </picture>
            </a>
            <div class="desc"><span>Little Girl</span><br> Dry pastel - 31.5cm X 24.5cm</div>
        </div>

    </div>

</section>