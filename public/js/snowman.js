(function (cjs, an) {

	var p; // shortcut to reference prototypes
	var lib={};var ss={};var img={};
	lib.ssMetadata = [];
	
	
	(lib.AnMovieClip = function(){
		this.actionFrames = [];
		this.ignorePause = false;
		this.gotoAndPlay = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
		}
		this.play = function(){
			cjs.MovieClip.prototype.play.call(this);
		}
		this.gotoAndStop = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		}
		this.stop = function(){
			cjs.MovieClip.prototype.stop.call(this);
		}
	}).prototype = p = new cjs.MovieClip();
	// symbols:
	// helper functions:
	
	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
		clone.gotoAndStop(this.currentFrame);
		clone.paused = this.paused;
		clone.framerate = this.framerate;
		return clone;
	}
	
	function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
		var prototype = cjs.extend(symbol, cjs.MovieClip);
		prototype.clone = mc_symbol_clone;
		prototype.nominalBounds = nominalBounds;
		prototype.frameBounds = frameBounds;
		return prototype;
		}
	
	
	(lib.pompom = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {blanc:0,rouge:4,bleu:9,jaune:14,vert:19,bleu_clair:24,orange:29};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35));
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AiyDmQgQgIgHgLQgIgNABgRQAGg7gSg/QgOgxghg/QgFgJgCgLQgCgMADgJQARg6A9grIAmArIgbgEQAFAVAYAJQAYAJAvgBQAyAAArgiQArgiAMgxIgcAEIgOgnQA1gCAwAWQApATAqAnQA6A0AKBZQAJBSgjBEQhBB/h+AiQgoALgoAAQhOAAhNgpg");
		this.shape.setTransform(27.577,27.1115);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#CC0000").s().p("AiyDmQgQgIgHgLQgIgNABgRQAGg7gSg/QgOgxghg/QgFgJgCgLQgCgMADgJQARg6A9grIAmArIgbgEQAFAVAYAJQAYAJAvgBQAyAAArgiQArgiAMgxIgcAEIgOgnQA1gCAwAWQApATAqAnQA6A0AKBZQAJBSgjBEQhBB/h+AiQgoALgoAAQhOAAhNgpg");
		this.shape_1.setTransform(27.577,27.1115);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#6699FF").s().p("AiyDmQgQgIgHgLQgIgNABgRQAGg7gSg/QgOgxghg/QgFgJgCgLQgCgMADgJQARg6A9grIAmArIgbgEQAFAVAYAJQAYAJAvgBQAyAAArgiQArgiAMgxIgcAEIgOgnQA1gCAwAWQApATAqAnQA6A0AKBZQAJBSgjBEQhBB/h+AiQgoALgoAAQhOAAhNgpg");
		this.shape_2.setTransform(27.577,27.1115);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFF00").s().p("AiyDmQgQgIgHgLQgIgNABgRQAGg7gSg/QgOgxghg/QgFgJgCgLQgCgMADgJQARg6A9grIAmArIgbgEQAFAVAYAJQAYAJAvgBQAyAAArgiQArgiAMgxIgcAEIgOgnQA1gCAwAWQApATAqAnQA6A0AKBZQAJBSgjBEQhBB/h+AiQgoALgoAAQhOAAhNgpg");
		this.shape_3.setTransform(27.577,27.1115);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#33A81A").s().p("AiyDmQgQgIgHgLQgIgNABgRQAGg7gSg/QgOgxghg/QgFgJgCgLQgCgMADgJQARg6A9grIAmArIgbgEQAFAVAYAJQAYAJAvgBQAyAAArgiQArgiAMgxIgcAEIgOgnQA1gCAwAWQApATAqAnQA6A0AKBZQAJBSgjBEQhBB/h+AiQgoALgoAAQhOAAhNgpg");
		this.shape_4.setTransform(27.577,27.1115);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#00FFFF").s().p("AiyDmQgQgIgHgLQgIgNABgRQAGg7gSg/QgOgxghg/QgFgJgCgLQgCgMADgJQARg6A9grIAmArIgbgEQAFAVAYAJQAYAJAvgBQAyAAArgiQArgiAMgxIgcAEIgOgnQA1gCAwAWQApATAqAnQA6A0AKBZQAJBSgjBEQhBB/h+AiQgoALgoAAQhOAAhNgpg");
		this.shape_5.setTransform(27.577,27.1115);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#FF510F").s().p("AiyDmQgQgIgHgLQgIgNABgRQAGg7gSg/QgOgxghg/QgFgJgCgLQgCgMADgJQARg6A9grIAmArIgbgEQAFAVAYAJQAYAJAvgBQAyAAArgiQArgiAMgxIgcAEIgOgnQA1gCAwAWQApATAqAnQA6A0AKBZQAJBSgjBEQhBB/h+AiQgoALgoAAQhOAAhNgpg");
		this.shape_6.setTransform(27.577,27.1115);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_4}]},5).to({state:[{t:this.shape_5}]},5).to({state:[{t:this.shape_6}]},5).wait(6));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,55.2,54.3);
	
	
	(lib.pinceau = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {"blanc":0,"jaune":4,"vert":9,"bleu":14,"rouge":20,"orange":27,"bleu_clair":35};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(40));
	
		// Calque_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#EE7D6C").s().p("Ag5AWQAOgRAagXIAqgoIAhAiIgnAqQgWAagSAOg");
		this.shape.setTransform(17.475,20.9);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#A0DAF4").s().p("AhNAuICAh0QAHgGAGgBQAGAAAEAEQAEAEgBAGQAAAGgGAHIhxB8IgDAEg");
		this.shape_1.setTransform(29.1091,9.2722);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#BFBDC0").s().p("AgCAVIgCgCIgDgDIgOgQIANgVIAeAeIgTANIgDAAIgCgBg");
		this.shape_2.setTransform(11.525,26.775);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#2F2E2E").s().p("AivC/IgKgCQgEgBgBgDQgCgCABgEIAGgYIAGgYQAFgTAGgLQAOgcAigDIAGgBQADgCACgDQAWgnApgkIBdhVIBehVQADgDAGgDQAFgDAGgBQAIgCAIAFQAHAEAEAHQAFAJgBAJQgBAIgHAIIgXAZIgXAZIhFBMIhFBLQgMAPgTAOIgkAZIgEAEIgCAEQgHAggaAUQgZAUghAAIgLgBgAh2BVQgQABgKAJQgLAIgEAPIgIAcIgGAdQASADARgGQAQgFAMgMQAMgKAFgNQAGgNgCgLIgfAjQgDAEgDABQgEACgDgDQgEgEACgEIAFgGIAYgdIADgFQAAgBAAAAQABgBAAgBQAAAAAAgBQAAAAgBAAIgFgHQgEgDgEAAIgCAAgAhiBMIAOAPIADADIACADIADABIADgBIATgMIgfgggAgigBQgaAWgPASIAlAkQARgOAXgbIAngqIghghIgqAogACjiwQgGABgHAFIiBB2IAgAfIADgEIByh9QAGgGAAgGQABgGgEgFQgEgDgFAAIgBAAg");
		this.shape_3.setTransform(19.2141,19.2192);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#FFFFFF").s().p("AgqAtIAHgdIAIgcQAEgPAKgIQALgIAPgCQAFAAAEADIAGAHQAAABAAAAQAAAAAAABQAAAAAAABQAAABAAABIgEAFIgXAbIgFAHQgCADAEAEQADAEAEgCQACgBAEgEIAfgiQACAKgGAMQgGANgLALQgMALgPAGQgMAEgMAAIgMgBg");
		this.shape_4.setTransform(6.05,32.2719);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#FFFF00").s().p("AgqAtIAHgdIAIgcQAEgPAKgIQALgIAPgCQAFAAAEADIAGAHQAAABAAAAQAAAAAAABQAAAAAAABQAAABAAABIgEAFIgXAbIgFAHQgCADAEAEQADAEAEgCQACgBAEgEIAfgiQACAKgGAMQgGANgLALQgMALgPAGQgMAEgMAAIgMgBg");
		this.shape_5.setTransform(6.05,32.2719);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#000000").s().p("AivC/IgKgCQgEgBgBgDQgCgCABgEIAGgYIAGgYQAFgTAGgLQAOgcAigDIAGgBQADgCACgDQAWgnApgkIBdhVIBehVQADgDAGgDQAFgDAGgBQAIgCAIAFQAHAEAEAHQAFAJgBAJQgBAIgHAIIgXAZIgXAZIhFBMIhFBLQgMAPgTAOIgkAZIgEAEIgCAEQgHAggaAUQgZAUghAAIgLgBgAh2BVQgQABgKAJQgLAIgEAPIgIAcIgGAdQASADARgGQAQgFAMgMQAMgKAFgNQAGgNgCgLIgfAjQgDAEgDABQgEACgDgDQgEgEACgEIAFgGIAYgdIADgFQAAgBAAAAQABgBAAgBQAAAAAAgBQAAAAgBAAIgFgHQgEgDgEAAIgCAAgAhiBMIAOAPIADADIACADIADABIADgBIATgMIgfgggAgigBQgaAWgPASIAlAkQARgOAXgbIAngqIghghIgqAogACjiwQgGABgHAFIiBB2IAgAfIADgEIByh9QAGgGAAgGQABgGgEgFQgEgDgFAAIgBAAg");
		this.shape_6.setTransform(19.2141,19.2192);
	
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#33A81A").s().p("AgqAtIAHgdIAIgcQAEgPAKgIQALgIAPgCQAFAAAEADIAGAHQAAABAAAAQAAAAAAABQAAAAAAABQAAABAAABIgEAFIgXAbIgFAHQgCADAEAEQADAEAEgCQACgBAEgEIAfgiQACAKgGAMQgGANgLALQgMALgPAGQgMAEgMAAIgMgBg");
		this.shape_7.setTransform(6.05,32.2719);
	
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#6699FF").s().p("AgqAtIAHgdIAIgcQAEgPAKgIQALgIAPgCQAFAAAEADIAGAHQAAABAAAAQAAAAAAABQAAAAAAABQAAABAAABIgEAFIgXAbIgFAHQgCADAEAEQADAEAEgCQACgBAEgEIAfgiQACAKgGAMQgGANgLALQgMALgPAGQgMAEgMAAIgMgBg");
		this.shape_8.setTransform(6.05,32.2719);
	
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#CC0000").s().p("AgqAtIAHgdIAIgcQAEgPAKgIQALgIAPgCQAFAAAEADIAGAHQAAABAAAAQAAAAAAABQAAAAAAABQAAABAAABIgEAFIgXAbIgFAHQgCADAEAEQADAEAEgCQACgBAEgEIAfgiQACAKgGAMQgGANgLALQgMALgPAGQgMAEgMAAIgMgBg");
		this.shape_9.setTransform(6.05,32.2719);
	
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#FF510F").s().p("AgqAtIAHgdIAIgcQAEgPAKgIQALgIAPgCQAFAAAEADIAGAHQAAABAAAAQAAAAAAABQAAAAAAABQAAABAAABIgEAFIgXAbIgFAHQgCADAEAEQADAEAEgCQACgBAEgEIAfgiQACAKgGAMQgGANgLALQgMALgPAGQgMAEgMAAIgMgBg");
		this.shape_10.setTransform(6.05,32.2719);
	
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#00FFFF").s().p("AgqAtIAHgdIAIgcQAEgPAKgIQALgIAPgCQAFAAAEADIAGAHQAAABAAAAQAAAAAAABQAAAAAAABQAAABAAABIgEAFIgXAbIgFAHQgCADAEAEQADAEAEgCQACgBAEgEIAfgiQACAKgGAMQgGANgLALQgMALgPAGQgMAEgMAAIgMgBg");
		this.shape_11.setTransform(6.05,32.2719);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_5}]},4).to({state:[{t:this.shape_6},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_7}]},5).to({state:[{t:this.shape_6},{t:this.shape_2},{t:this.shape},{t:this.shape_1},{t:this.shape_8}]},5).to({state:[{t:this.shape_1},{t:this.shape_6},{t:this.shape},{t:this.shape_2},{t:this.shape_9}]},6).to({state:[{t:this.shape_1},{t:this.shape_6},{t:this.shape},{t:this.shape_2},{t:this.shape_10}]},7).to({state:[{t:this.shape_1},{t:this.shape_6},{t:this.shape},{t:this.shape_2},{t:this.shape_11}]},8).wait(5));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,38.4,38.5);
	
	
	(lib.palette = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FADB9E").s().p("AglIgIgRgBIgVgBIgVgDIgngHQgXgFgRgFIhDgWQgsgRgigUIgEgCQgBgBAAAAQgBAAAAABQgBAAAAABQgBAAAAABIgXgRQgBgLgMAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAABQAAgEgCgCIgGgBQAAgGgFABQgBgHgGgGIgMgKQgEgEgDACIAAgBQABgGgHgFIgDgDIgCgDQgBgFgDgBIgIgBQABgGgCgDQgCgDgGAAQgBgGgFgHIgIgLIgCgDIgCgDQgBgGgHABQABgEgCgEIgEgHIgIgKQgEgGgBgFQgBgGgFgGIgJgLIgBAAIgBgJQgBgGgGgBQAAgGgCgHIgGgMQgDgHgHgWQgFgSgGgKIAAgCQAAgIgDgMIgFgUIgGggQgDgTAAgOIABgLQAAgGgBgEIgBgEIgDgWIAAgaIABgFQADgEgCgIQgBgJABgDIgDgCIABgDIADgBIABgBIABgFIAAgXIADgVIAEgWQACgRAIgbQALghACgLIABgCIABgCIAIgTQAEgLABgJIACAAQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAAAQACgFAFgJIAHgNIAFgKQAEgGgBgFQBFh2B4g+QCehSC/AcQCOAUCJA+IAhAPQA7AdAuAlQAFAEAIAIQAAAFAEAFIAHAIQAYAiAPAnQASAuACAuQABAsgHAkQgFAYgNAqQgCAJgFAMIgKAUQgNAegMAUQgPAZgTATQgPAPgVAIQgSAHgYADQgYADgKACIgJADQgNAEgKAGIgHAGQgEADgEAAIgBAAIACgEQAIgQgDgNQgDgMgPgLQgJgHgNgFIgZgHQAAgIgEgGQgDgFgHgFQgNgLgRgGQgOgEgTgCQgdgCgYADQgcADgXAMQghAQgaAbQgeAfgVAvQgRAmgIAjQgIAoACAmQADAmAVAaQAJAMAKAHQALAIANADIAIANIAJANQAcAeAuAHQAvAGAlgWIADgDIAEgBIAAACIgBACQgTAUgSAOQgWAPgXAJQguAQg5ABIgSgBgAjyE8IAIACIACABIAAAEQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAABIALAHQAHAEAFACQARAFAOgDIAMgCQAGgCADgGQAGACAFgHIAJgKIAIgLQADgFAAgGIAAgLIAAgEQABAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAIAAgEQABgPgEgVIAAgIQgBgFgEgBIAAgBQAAgPgGgHIgHgJIgHgIIgFgFQgDgCgDACQAAgDgDgCQgWgJgWgEQgCgGgGgEQgGgEgHABQgCgIgIgBQAAgJgCgCQgCgCgHABQAAgDgCgDIgFgDQgSgJgbAHIgKADQgFADgCAFQgGgCgEADQgDABgFAFIgKAKQgGAGgCAGIgCADIgCAEQABAFgDACQgEAEAAAJIAAAYQgBAVAMAWIAKARQAGAKAIAFIAGAEQAEACADABIAXAEQANADAJADIAIACQAFACACADQAFAFAHgCQAAAGADABgAE5g3QgCACgBAHQgEAAgEACIgGAFQgHAEgCADQgEAEABAHIACALQABAHAEADQAKALAJAGQALAJALADIAFACIAKAFQAJAEAHAAIAYADQANABALgCIAGgBIAGAAQAHABAGgEIAKgJIABAAQAEABADgBQAFgBAFgFIAJgGQAHgDAAgHIABgBIACgBQAGgBADgEQAEgDAAgFQAGABACgDIAAgJQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIADgDQATgdgBgpQgCgsgkgWQgXgOgkACQgEAAgBAEIgEABQgCgDgEACIgPAFQgIAEgFAEQgMAKgFAFQgIAJgEAJIgIAPQgEAJAAAHQgGgBgBAEQgBAEgDAEIgHAIQgDADABAEQgEAAgBACIgBAFIgCAAQgFAAgCACgAlrgVQAAAAAAABQAAAAABAAQAAABABAAQABAAABAAQAgABATgSIAHgGQAEgEAAgGQAFAAAHgGQAHgGAAgFQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAABAAQAAABABAAQAAAAABgBQAAAAABAAIAEgBQACgBAFgDQAEgEACgBIAYgKQAPgHAKgCQAEAAACgDQADgDgBgFQAEAAACgCQACgDAAgDQgCgMgFgQQgCgFgGgJIgIgNIgDgHQgDgCgFABQABgFgEgEQgIgJgMgIIgVgPIgCgBQgBAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAABIgDgCQAAgDgCgCIgEgDQgEgDgIgBIgLgCQgMgDgOAFQgNAFgGALIgBABIgFAFIgDAFQgEAJgHAIIgOAOIgEAEQgBADABADIgBAAQgFgCAAAGQgMADgNALIAAACIgBACQgIAAgKAIQgLAJgCAIQgDAPAAAHQAAANAFAJIABAEQAEALAFAHQAUAaAbAIIALADQAGABAFgCgACFjeQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIACAEQAKASAVAOQASAMAUgEQAKgCAIgHQAFgDAKgKIAGgFQAEgDAAgEIAAgBQAHgBAHgEIALgLIACgBQAFAAAHgCIALgFIAOgGQAIgDAGAAQAGAAAGgEIABgBIAHgIQAKgBAEgHQAEgIgDgMIAAgIIABgQQAAgJgHgGQgDgCgBgEQgBgHgFgIIgGgJIgDgFIgCgGQgBgEgDgBQgEgDgEgGIgHgJQgEgFgDgCQgEgCgFABQgCgEgEgDIgIgDQgFgDgLgCIgQgEQgFgDgFABQgGABgDAFQgXAEgPATIgNAQIgNAOQgFABgJAKQgKAJAAAFQgBAAgBAAQgBAAAAABQAAAAgBABQAAAAAAABQgFAAgEADIgHAHQgMAKgDAQQgDAMACATIABAGQABAEAGgBIABAJQACAEAFABIAAADQAAAAAAABQAAAAAAAAQAAAAABAAQAAABABAAQgCAGAGABIACADIgBABIABAAgAhOj7QgCAIAJACIAJACIAJABIAIAAQAFgBACgEQAIABAMgIQAMgJACgHIAAgBIACgBIAAgCQAMgGAHgSQAHgRABgMQADgQgFgOQgCgIgJgIQgIgHgHgBIgxgGQgCAAgFgEQgDgDgEAAQgEABgEgCIgHgEIgIgEQgEgDgFABQgBgGgHgGQgHgGgGAAIAAgCQgBAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAABQABgIgHABIgBAAQgBgIgFgFQgFgFgJgCQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAIAAABQgBgEgDgBIgGAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAIgLAAQgGgBgDAEIgDACQgHgCgEACQgEACgBAFQgHABgGAGIgIALQgDADgBAFIgDAJQgEAPABARQACAOAFARQACAFACADQADAEAEABQAAAFADAEQADAEAEACIARAHQAKAEAHACIAEAAIAEABQAKAHAPAGQAQAHARAPIAHAHQAFAFAGgCIAAABIAAgBQgBAGADACQACABAFAAg");
		this.shape.setTransform(55.7882,54.4452);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#F5BC6A").s().p("AiuHVIgVgEQgMgCgJAAIgCAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIgDgBQgGAAgKgDIgPgEIgUgGIgUgGQgWgHgMgGIgEgBQAAgBgBABQAAAAgBAAQAAAAgBAAQAAABgBAAIgDgBIgCgCQgJgIgMgBIgBAAQgBAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAIgBgBQgCgEgDgCQgDgDgEgBQgHgBgHgEIgMgIIgDgCQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABQgjgUgXgSQAAgBABgBQAAAAABgBQAAAAABAAQAAAAABAAIAEADQAiATAsARIBDAXQARAFAXAEIAnAIIAVACIAVABIARABIASABQA6AAAugRQAXgIAWgQQARgNATgUIABgCIAAgCIAAAAIACgCQAAAAABAAQABAAAAAAQAAAAABgBQAAAAAAgBIAPgPQAIgKAEgIQAUgmAMgiQAOgnAFgmQAHg2Alg4IABgCQAEgBAAgEQAEAAAEgEIAHgGQAKgGANgEIAJgCQAKgDAYgDQAYgCASgIQAVgIAPgOQATgSAPgaQAMgUANgdIAKgVQAFgMACgKQANgqAFgYQAHgjgBgsQgCgugSguQgPgngYgiIgHgIQgEgFAAgFQAEAAADAEIAGAFQBMBEAZBUQAYBNgUBWQgSBQgoBCQgOAVgNAOQgRARgVAJQgLAFgPADIgbADQg6AFgiAuIgBABQgWAegMArIgOA9QgJAkgJAYQgKAbgJARIgCADIAAAAIgCAEQgDAAgBADIAAAFQgEAAgCADIgEAFIgIANQgGAIgFAEQgHAGAAAGIgCACQgIABgEAJQAAAAgBAAQAAABAAAAQAAAAAAAAQgBAAAAABIgCAAQgBgBgBAAQAAAAgBABQAAAAgBAAQAAAAAAABQgCABgCAEQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgCACIgCAAIgBAAIgTAJQgMAGgHACQgBAAAAAAQAAAAgBABQAAAAAAABQAAABAAABIgCAAIgJABQgFABgDADQgJgBgFABQgHABgFAEIgEABQgFgCgIABIgNABIgRAAQgmAAglgFgAi2ErQgKgHgJgLQgVgagDgmQgCgnAIgnQAIgjARgnQAVgvAegeQAbgbAhgQQAXgLAcgEQAYgDAcACQATACAOAFQARAFANALQAHAGADAEQAEAHAAAHIgSgCQhhgKhDBGQg1A4gVBVQgJAngBAdQgBAkAMAfQgNgDgLgIg");
		this.shape_1.setTransform(70.0922,65.6882);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.palette, new cjs.Rectangle(0,0,117.3,113.2), null);
	
	
	(lib.neige = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {"blanc":0,"rouge":4,"bleu":9,"jaune":14,"vert":19,"bleu_clair":24,"orange":29};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35));
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AigE6IisgVIghgEIjMgbQgZgDgkgKIhBgQQAbggAMgcQAOghABgiQAAg3gagmQgZgigzgZQhjgwh6gSQhhgPiLABIAfgvQASgaAPgOQBRhLBtgaQAOgDAKADQAJADAKALIBmBwQA8BAAvArQCZCJDTBdIAKAGIgSAbIAFAFQAMgHAGgEQCThzDRgcQC6gZCLARQC/AWCzBRQAGADAJACIAQAFIAEgLIhJgjIBfg3QDsiJCcjcQAEgGAIgFQAIgFAFABQBIANAxARQA+AXAuAmQBGA7AFBUQAFBUhBBBQgoApg3AeQguAag/AVQkABUkOArQi0Adi7AKQhRAEhRAAQi0AAivgWgAy7ElIgggEQhZgMhBglQgwgbgtg2QghgnAOgzQANguArghQAxgoBDgVQAygQBPgLQCigXC4A4QA7ASA4AkQA5AlAHA4QAHA4gsA2QggAngxAWQgmARg6AKQgmAGg1AGIgJABIg/AGQhfgBg4gFg");
		this.shape.setTransform(151.3845,33.5903);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#CC0000").s().p("AigE6IisgVIghgEIjMgbQgZgDgkgKIhBgQQAbggAMgcQAOghABgiQAAg3gagmQgZgigzgZQhjgwh6gSQhhgPiLABIAfgvQASgaAPgOQBRhLBtgaQAOgDAKADQAJADAKALIBmBwQA8BAAvArQCZCJDTBdIAKAGIgSAbIAFAFQAMgHAGgEQCThzDRgcQC6gZCLARQC/AWCzBRQAGADAJACIAQAFIAEgLIhJgjIBfg3QDsiJCcjcQAEgGAIgFQAIgFAFABQBIANAxARQA+AXAuAmQBGA7AFBUQAFBUhBBBQgoApg3AeQguAag/AVQkABUkOArQi0Adi7AKQhRAEhRAAQi0AAivgWgAy7ElIgggEQhZgMhBglQgwgbgtg2QghgnAOgzQANguArghQAxgoBDgVQAygQBPgLQCigXC4A4QA7ASA4AkQA5AlAHA4QAHA4gsA2QggAngxAWQgmARg6AKQgmAGg1AGIgJABIg/AGQhfgBg4gFg");
		this.shape_1.setTransform(151.3845,33.5903);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#6699FF").s().p("AigE6IisgVIghgEIjMgbQgZgDgkgKIhBgQQAbggAMgcQAOghABgiQAAg3gagmQgZgigzgZQhjgwh6gSQhhgPiLABIAfgvQASgaAPgOQBRhLBtgaQAOgDAKADQAJADAKALIBmBwQA8BAAvArQCZCJDTBdIAKAGIgSAbIAFAFQAMgHAGgEQCThzDRgcQC6gZCLARQC/AWCzBRQAGADAJACIAQAFIAEgLIhJgjIBfg3QDsiJCcjcQAEgGAIgFQAIgFAFABQBIANAxARQA+AXAuAmQBGA7AFBUQAFBUhBBBQgoApg3AeQguAag/AVQkABUkOArQi0Adi7AKQhRAEhRAAQi0AAivgWgAy7ElIgggEQhZgMhBglQgwgbgtg2QghgnAOgzQANguArghQAxgoBDgVQAygQBPgLQCigXC4A4QA7ASA4AkQA5AlAHA4QAHA4gsA2QggAngxAWQgmARg6AKQgmAGg1AGIgJABIg/AGQhfgBg4gFg");
		this.shape_2.setTransform(151.3845,33.5903);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFF00").s().p("AigE6IisgVIghgEIjMgbQgZgDgkgKIhBgQQAbggAMgcQAOghABgiQAAg3gagmQgZgigzgZQhjgwh6gSQhhgPiLABIAfgvQASgaAPgOQBRhLBtgaQAOgDAKADQAJADAKALIBmBwQA8BAAvArQCZCJDTBdIAKAGIgSAbIAFAFQAMgHAGgEQCThzDRgcQC6gZCLARQC/AWCzBRQAGADAJACIAQAFIAEgLIhJgjIBfg3QDsiJCcjcQAEgGAIgFQAIgFAFABQBIANAxARQA+AXAuAmQBGA7AFBUQAFBUhBBBQgoApg3AeQguAag/AVQkABUkOArQi0Adi7AKQhRAEhRAAQi0AAivgWgAy7ElIgggEQhZgMhBglQgwgbgtg2QghgnAOgzQANguArghQAxgoBDgVQAygQBPgLQCigXC4A4QA7ASA4AkQA5AlAHA4QAHA4gsA2QggAngxAWQgmARg6AKQgmAGg1AGIgJABIg/AGQhfgBg4gFg");
		this.shape_3.setTransform(151.3845,33.5903);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#33A81A").s().p("AigE6IisgVIghgEIjMgbQgZgDgkgKIhBgQQAbggAMgcQAOghABgiQAAg3gagmQgZgigzgZQhjgwh6gSQhhgPiLABIAfgvQASgaAPgOQBRhLBtgaQAOgDAKADQAJADAKALIBmBwQA8BAAvArQCZCJDTBdIAKAGIgSAbIAFAFQAMgHAGgEQCThzDRgcQC6gZCLARQC/AWCzBRQAGADAJACIAQAFIAEgLIhJgjIBfg3QDsiJCcjcQAEgGAIgFQAIgFAFABQBIANAxARQA+AXAuAmQBGA7AFBUQAFBUhBBBQgoApg3AeQguAag/AVQkABUkOArQi0Adi7AKQhRAEhRAAQi0AAivgWgAy7ElIgggEQhZgMhBglQgwgbgtg2QghgnAOgzQANguArghQAxgoBDgVQAygQBPgLQCigXC4A4QA7ASA4AkQA5AlAHA4QAHA4gsA2QggAngxAWQgmARg6AKQgmAGg1AGIgJABIg/AGQhfgBg4gFg");
		this.shape_4.setTransform(151.3845,33.5903);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#00FFFF").s().p("AigE6IisgVIghgEIjMgbQgZgDgkgKIhBgQQAbggAMgcQAOghABgiQAAg3gagmQgZgigzgZQhjgwh6gSQhhgPiLABIAfgvQASgaAPgOQBRhLBtgaQAOgDAKADQAJADAKALIBmBwQA8BAAvArQCZCJDTBdIAKAGIgSAbIAFAFQAMgHAGgEQCThzDRgcQC6gZCLARQC/AWCzBRQAGADAJACIAQAFIAEgLIhJgjIBfg3QDsiJCcjcQAEgGAIgFQAIgFAFABQBIANAxARQA+AXAuAmQBGA7AFBUQAFBUhBBBQgoApg3AeQguAag/AVQkABUkOArQi0Adi7AKQhRAEhRAAQi0AAivgWgAy7ElIgggEQhZgMhBglQgwgbgtg2QghgnAOgzQANguArghQAxgoBDgVQAygQBPgLQCigXC4A4QA7ASA4AkQA5AlAHA4QAHA4gsA2QggAngxAWQgmARg6AKQgmAGg1AGIgJABIg/AGQhfgBg4gFg");
		this.shape_5.setTransform(151.3845,33.5903);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#FF510F").s().p("AigE6IisgVIghgEIjMgbQgZgDgkgKIhBgQQAbggAMgcQAOghABgiQAAg3gagmQgZgigzgZQhjgwh6gSQhhgPiLABIAfgvQASgaAPgOQBRhLBtgaQAOgDAKADQAJADAKALIBmBwQA8BAAvArQCZCJDTBdIAKAGIgSAbIAFAFQAMgHAGgEQCThzDRgcQC6gZCLARQC/AWCzBRQAGADAJACIAQAFIAEgLIhJgjIBfg3QDsiJCcjcQAEgGAIgFQAIgFAFABQBIANAxARQA+AXAuAmQBGA7AFBUQAFBUhBBBQgoApg3AeQguAag/AVQkABUkOArQi0Adi7AKQhRAEhRAAQi0AAivgWgAy7ElIgggEQhZgMhBglQgwgbgtg2QghgnAOgzQANguArghQAxgoBDgVQAygQBPgLQCigXC4A4QA7ASA4AkQA5AlAHA4QAHA4gsA2QggAngxAWQgmARg6AKQgmAGg1AGIgJABIg/AGQhfgBg4gFg");
		this.shape_6.setTransform(151.3845,33.5903);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_4}]},5).to({state:[{t:this.shape_5}]},5).to({state:[{t:this.shape_6}]},5).wait(6));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,302.8,67.2);
	
	
	(lib.haut_bonnet = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {"blanc":0,"rouge":4,"bleu":9,"jaune":14,"vert":19,"bleu_clair":24,"orange":29};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35));
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("ArDjzIAzggQAcgRATgJQBpg1BqgxQBHggBTgIQBGgIBaAIQEsAbD/CDQA6AdAtA1QAkAqAjBDQAOAZAQAmIAcA/QAOAfgcANIgUANQgjASgbgHQgagGgXghIgMgRQgngzgjgJQgjgIg7AcQgNAGgIgEQgGgCgIgLQg0hIhmgsQA2AyAhAsQAoA2AVA/IhXhLQgygpgsgMIgFAGIAMAMIANALQChB0BFC3QAaBFgCBbQnxm1qAj+g");
		this.shape.setTransform(70.7833,44.8125);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#CC0000").s().p("ArDjzIAzggQAcgRATgJQBpg1BqgxQBHggBTgIQBGgIBaAIQEsAbD/CDQA6AdAtA1QAkAqAjBDQAOAZAQAmIAcA/QAOAfgcANIgUANQgjASgbgHQgagGgXghIgMgRQgngzgjgJQgjgIg7AcQgNAGgIgEQgGgCgIgLQg0hIhmgsQA2AyAhAsQAoA2AVA/IhXhLQgygpgsgMIgFAGIAMAMIANALQChB0BFC3QAaBFgCBbQnxm1qAj+g");
		this.shape_1.setTransform(70.7833,44.8125);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#6699FF").s().p("ArDjzIAzggQAcgRATgJQBpg1BqgxQBHggBTgIQBGgIBaAIQEsAbD/CDQA6AdAtA1QAkAqAjBDQAOAZAQAmIAcA/QAOAfgcANIgUANQgjASgbgHQgagGgXghIgMgRQgngzgjgJQgjgIg7AcQgNAGgIgEQgGgCgIgLQg0hIhmgsQA2AyAhAsQAoA2AVA/IhXhLQgygpgsgMIgFAGIAMAMIANALQChB0BFC3QAaBFgCBbQnxm1qAj+g");
		this.shape_2.setTransform(70.7833,44.8125);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFF00").s().p("ArDjzIAzggQAcgRATgJQBpg1BqgxQBHggBTgIQBGgIBaAIQEsAbD/CDQA6AdAtA1QAkAqAjBDQAOAZAQAmIAcA/QAOAfgcANIgUANQgjASgbgHQgagGgXghIgMgRQgngzgjgJQgjgIg7AcQgNAGgIgEQgGgCgIgLQg0hIhmgsQA2AyAhAsQAoA2AVA/IhXhLQgygpgsgMIgFAGIAMAMIANALQChB0BFC3QAaBFgCBbQnxm1qAj+g");
		this.shape_3.setTransform(70.7833,44.8125);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#00FFFF").s().p("ArDjzIAzggQAcgRATgJQBpg1BqgxQBHggBTgIQBGgIBaAIQEsAbD/CDQA6AdAtA1QAkAqAjBDQAOAZAQAmIAcA/QAOAfgcANIgUANQgjASgbgHQgagGgXghIgMgRQgngzgjgJQgjgIg7AcQgNAGgIgEQgGgCgIgLQg0hIhmgsQA2AyAhAsQAoA2AVA/IhXhLQgygpgsgMIgFAGIAMAMIANALQChB0BFC3QAaBFgCBbQnxm1qAj+g");
		this.shape_4.setTransform(70.7833,44.8125);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#FF510F").s().p("ArDjzIAzggQAcgRATgJQBpg1BqgxQBHggBTgIQBGgIBaAIQEsAbD/CDQA6AdAtA1QAkAqAjBDQAOAZAQAmIAcA/QAOAfgcANIgUANQgjASgbgHQgagGgXghIgMgRQgngzgjgJQgjgIg7AcQgNAGgIgEQgGgCgIgLQg0hIhmgsQA2AyAhAsQAoA2AVA/IhXhLQgygpgsgMIgFAGIAMAMIANALQChB0BFC3QAaBFgCBbQnxm1qAj+g");
		this.shape_5.setTransform(70.7833,44.8125);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_4}]},5).to({state:[{t:this.shape_5}]},5).wait(6));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,141.6,89.6);
	
	
	(lib.gomme = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f().s("#333333").ss(1,1,1).p("AhUE3QgfAAgTgTQhnhlgzg0QgWgYAAgdQABgbAXgXQCsirCWiXQAYgYAdAAQAcAAAZAYQBDBDBNBNQAZAaAAAdQAAAdgaAaIk8E8QgZAZgcACgABZkIQgMACgJAKIg5A3QgGAGgBAEQgCAGAGAFQAFAFAGgCQADgBAGgGQAQgQAJgIQAOgOAJgLQAHgIAGAAQAFABAHAIQAbAbAoAnQAWAWAtAtQAFAFAEACQAGABAFgEQAGgGgCgFQgBgDgHgGIiOiOQgFgFgEgDQgFgDgGAAgAhEhZQAAgHgGgDQgIgEgIAJIihCgQgFAFgBADQgBAGAFAEQAIAJALgMICgieQADgDABgCQACgDAAgEg");
		this.shape.setTransform(31.0995,31.05);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#C6C4B9").s().p("AgIAHIgGgIIAOACQAIgBAAgLQAGADABADQABAEgFADIgIAJIgDABQgEAAgEgFg");
		this.shape_1.setTransform(46.4327,36.3057);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#8CC9E0").s().p("AhZB1QgUgBgTgVQARABAQgJQAMgGAOgPIA+g9QAjgjAZgaQATgVASgQIALgJQAFgGgBgIQAXAVABAHQAAAHgVAVIhPBOIhNBPQgVAUgTAAIgBAAg");
		this.shape_2.setTransform(31.1756,48.1256);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#F7FAFB").s().p("ABZBsIjEjCQgFgFABgEQAAgDAGgFIAGgGQAFgCAFAGIDJDLQAAAMgIABIgPgDg");
		this.shape_3.setTransform(35.9673,25.3483);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#A0DAF4").s().p("AgkDHIgEgDIhGhFIhGhGQgigkAkgjICyizIAGgFQAEgBAFAEIC2C4QAAAHgFAGIgLAJQgRAPgUAVQgYAbglAkIg+A9QgOAOgLAHQgNAHgPAAIgEAAgAAAigIigCgQgFAEgBAEQgCAGAFAEQAJAIALgLICeieIAFgFQACgEAAgDQAAgHgHgDIgEgBQgGAAgFAGg");
		this.shape_4.setTransform(22.0016,37.6712);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#EE7D6C").s().p("AA5CeQgEAAgFgGIjHjHQgGgFAAgEQAAgEAGgFIAkgkIAjgjQAVgVATAAQATAAAUAUICMCNQARARACAWQgCATgPAPIgmAmIglAmQgFAFgEAAIAAAAgAgohrQAFABAHAHIBCBDIBDBCQAFAFAEACQAGABAFgEQAGgGgCgFQgBgDgHgGIiNiOQgFgFgEgCQgFgDgGAAQgMABgJAKIg5A4QgGAGgBAEQgCAGAGAFQAFAFAGgCQADgBAGgGIAZgYIAXgZQAHgIAFAAIABAAg");
		this.shape_5.setTransform(44.075,18.0765);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#2F2E2E").s().p("Aj+CtQgFgEACgGQABgEAFgFICgifQAIgJAIAEQAHADAAAHQAAACgCAEIgFAFIifCfQgHAGgFAAQgEAAgEgDgAD0AAQgEgBgGgFIhDhDIhChDQgIgHgFgBQgFAAgHAIIgYAZIgZAYQgFAGgEABQgFACgGgFQgFgFABgGQACgEAFgGIA5g4QAKgKAMgBQAGAAAFADQAEACAEAFICPCPQAGAGABADQADAFgGAGQgEACgFAAIgCAAg");
		this.shape_6.setTransform(31.1445,22.1934);
	
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics.f("#2F2E2E").s().p("AiGEkQhnhmgzg0QgWgXAAgcQABgcAXgYIFClBQAYgYAdABQAcgBAZAYICQCQQAZAaAAAdQAAAdgaAaIk8E9QgZAYgcACQgfgBgTgSgAhTiEIgHAGIiyCxQglAlAjAjIBGBGIBGBFIADAEQATAVAUABQAUAAAVgUIBNhPIBPhPQAVgVAAgHQgBgHgXgVIi1i2QgEgEgDAAIgBAAgAgyimIgGAGQgGAFAAACQgBAFAFAEIDEDDIAHAJQAGAHAFgEIAIgIQAGgFgBgEQgCgCgGgDIjJjLQgEgFgEAAIgCABgABZkfQgTAAgVAVIgjAjIgjAkQgGAGAAADQAAAEAGAFIDHDIQAFAFAEAAQAEAAAFgFIAlglIAmgmQAPgOACgUQgCgWgRgRIiNiOQgUgUgTAAIAAAAg");
		this.shape_7.setTransform(31.0995,31.05);
	
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f().s("#333333").ss(1,1,1).p("ABZkIQgMABgJAKIg5A4QgGAGgBAEQgCAGAGAFQAFAFAGgCQADgBAGgGQAQgQAJgIQAOgOAJgLQAHgIAGAAQAFABAHAHQAbAcAoAnQAWAWAtAtQAFAFAEACQAGABAFgEQAGgGgCgFQgBgDgHgGIiOiPQgFgFgEgCQgFgDgGAAgAhUE3QgfAAgTgTQhnhlgzg1QgWgXAAgcQABgcAXgXQCsisCWiWQAYgYAdAAQAcAAAZAYQBDBDBNBNQAZAaAAAdQAAAdgaAaIk8E9QgZAYgcACgAhEhZQAAgHgGgDQgIgEgIAJIihCgQgFAFgBAEQgBAFAFAFQAIAHALgKICgifQADgEABgBQACgEAAgDg");
		this.shape_8.setTransform(31.0995,31.05);
	
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics.f("#FFFFFF").s().p("AA5CeQgEAAgFgGIjHjHQgGgFAAgEQAAgEAGgFIAkgkIAjgjQAVgVATAAQATAAAUAUICMCNQARARACAWQgCATgPAPIgmAmIglAmQgFAFgEAAIAAAAgAgohrQAFABAHAHIBCBDIBDBCQAFAFAEACQAGABAFgEQAGgGgCgFQgBgDgHgGIiNiOQgFgFgEgCQgFgDgGAAQgMABgJAKIg5A4QgGAGgBAEQgCAGAGAFQAFAFAGgCQADgBAGgGIAZgYIAXgZQAHgIAFAAIABAAg");
		this.shape_9.setTransform(44.075,18.0765);
	
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics.f("#FFFFFF").s().p("AgkDHIgEgDIhGhFIhGhGQgigkAkgjICyizIAGgFQAEgBAFAEIC2C4QAAAHgFAGIgLAJQgRAPgUAVQgYAbglAkIg+A9QgOAOgLAHQgNAHgPAAIgEAAgAAAigIigCgQgFAEgBAEQgCAGAFAEQAJAIALgLICeieIAFgFQACgEAAgDQAAgHgHgDIgEgBQgGAAgFAGg");
		this.shape_10.setTransform(22.0016,37.6712);
	
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics.f("#2F2E2E").s().p("AiGEkQhnhlgzg0QgWgYAAgdQABgbAXgYIFClAQAYgZAdAAQAcAAAZAZICQCPQAZAaAAAdQAAAdgaAaIk8E8QgZAZgcABQgfABgTgTgAhTiEIgHAFIiyCyQglAkAjAkIBGBGIBGBGIADACQATAWAUAAQAUABAVgVIBNhOIBPhPQAVgVAAgHQgBgHgXgVIi1i3QgEgDgDAAIgBAAgAgyimIgGAGQgGAEAAADQgBAFAFAEIDEDDIAHAIQAGAIAFgDIAIgJQAGgEgBgEQgCgEgGgDIjJjLQgEgEgEAAIgCABgABZkeQgTAAgVAUIgjAkIgjAjQgGAGAAADQAAAEAGAGIDHDGQAFAGAEAAQAEAAAFgFIAlglIAmglQAPgQACgSQgCgXgRgRIiNiNQgUgVgTAAIAAABg");
		this.shape_11.setTransform(31.0995,31.05);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_11},{t:this.shape_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-1,-1,64.2,64.1);
	
	
	(lib.gants = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {"blanc":0,"rouge":4,"bleu":9,"jaune":14,"vert":19,"bleu_clair":24,"orange":29};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35));
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("ARhFoQgZgLgZgbQgxg0ghhHQgcg7gUhQIgMg0QgMg/AagzQAagzA8gbIAigPQAUgJANgJQAWgOAggZIA4grQAZAIASAjQASAjAAAmQgBBShCAtQA/BFgXBYQAdgiAAgoQgBgegUgtQAqgrAKg4QAJgxgNhCQBbgTBLA0QBLAyAXBeQAYBggjBVQgfBJhOBHQg5AzhhA1QgUAKgfAGIg3AIIgRACQgWAAgUgKgA2YD6QhahNgghqQgxieB1h2QAIgIAGgDQAggVAMAEQAMAEAMAjQAEAPALAVIARAkIAOgFQgFgWgFgKQgRgpgEgiQgFgoANgmQAQgsAfgHQAegIAhAiQANANAYAdQAYAdANAOQATATAcAaIA0AwQhKBugnCDQgkB8gGCTQhsgmhHg9g");
		this.shape.setTransform(156.988,36.9758);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#CC0000").s().p("ARhFoQgZgLgZgbQgxg0ghhHQgcg7gUhQIgMg0QgMg/AagzQAagzA8gbIAigPQAUgJANgJQAWgOAggZIA4grQAZAIASAjQASAjAAAmQgBBShCAtQA/BFgXBYQAdgiAAgoQgBgegUgtQAqgrAKg4QAJgxgNhCQBbgTBLA0QBLAyAXBeQAYBggjBVQgfBJhOBHQg5AzhhA1QgUAKgfAGIg3AIIgRACQgWAAgUgKgA2YD6QhahNgghqQgxieB1h2QAIgIAGgDQAggVAMAEQAMAEAMAjQAEAPALAVIARAkIAOgFQgFgWgFgKQgRgpgEgiQgFgoANgmQAQgsAfgHQAegIAhAiQANANAYAdQAYAdANAOQATATAcAaIA0AwQhKBugnCDQgkB8gGCTQhsgmhHg9g");
		this.shape_1.setTransform(156.988,36.9758);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#6699FF").s().p("ARhFoQgZgLgZgbQgxg0ghhHQgcg7gUhQIgMg0QgMg/AagzQAagzA8gbIAigPQAUgJANgJQAWgOAggZIA4grQAZAIASAjQASAjAAAmQgBBShCAtQA/BFgXBYQAdgiAAgoQgBgegUgtQAqgrAKg4QAJgxgNhCQBbgTBLA0QBLAyAXBeQAYBggjBVQgfBJhOBHQg5AzhhA1QgUAKgfAGIg3AIIgRACQgWAAgUgKgA2YD6QhahNgghqQgxieB1h2QAIgIAGgDQAggVAMAEQAMAEAMAjQAEAPALAVIARAkIAOgFQgFgWgFgKQgRgpgEgiQgFgoANgmQAQgsAfgHQAegIAhAiQANANAYAdQAYAdANAOQATATAcAaIA0AwQhKBugnCDQgkB8gGCTQhsgmhHg9g");
		this.shape_2.setTransform(156.988,36.9758);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFF00").s().p("ARhFoQgZgLgZgbQgxg0ghhHQgcg7gUhQIgMg0QgMg/AagzQAagzA8gbIAigPQAUgJANgJQAWgOAggZIA4grQAZAIASAjQASAjAAAmQgBBShCAtQA/BFgXBYQAdgiAAgoQgBgegUgtQAqgrAKg4QAJgxgNhCQBbgTBLA0QBLAyAXBeQAYBggjBVQgfBJhOBHQg5AzhhA1QgUAKgfAGIg3AIIgRACQgWAAgUgKgA2YD6QhahNgghqQgxieB1h2QAIgIAGgDQAggVAMAEQAMAEAMAjQAEAPALAVIARAkIAOgFQgFgWgFgKQgRgpgEgiQgFgoANgmQAQgsAfgHQAegIAhAiQANANAYAdQAYAdANAOQATATAcAaIA0AwQhKBugnCDQgkB8gGCTQhsgmhHg9g");
		this.shape_3.setTransform(156.988,36.9758);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#33A81A").s().p("ARhFoQgZgLgZgbQgxg0ghhHQgcg7gUhQIgMg0QgMg/AagzQAagzA8gbIAigPQAUgJANgJQAWgOAggZIA4grQAZAIASAjQASAjAAAmQgBBShCAtQA/BFgXBYQAdgiAAgoQgBgegUgtQAqgrAKg4QAJgxgNhCQBbgTBLA0QBLAyAXBeQAYBggjBVQgfBJhOBHQg5AzhhA1QgUAKgfAGIg3AIIgRACQgWAAgUgKgA2YD6QhahNgghqQgxieB1h2QAIgIAGgDQAggVAMAEQAMAEAMAjQAEAPALAVIARAkIAOgFQgFgWgFgKQgRgpgEgiQgFgoANgmQAQgsAfgHQAegIAhAiQANANAYAdQAYAdANAOQATATAcAaIA0AwQhKBugnCDQgkB8gGCTQhsgmhHg9g");
		this.shape_4.setTransform(156.988,36.9758);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#00FFFF").s().p("ARhFoQgZgLgZgbQgxg0ghhHQgcg7gUhQIgMg0QgMg/AagzQAagzA8gbIAigPQAUgJANgJQAWgOAggZIA4grQAZAIASAjQASAjAAAmQgBBShCAtQA/BFgXBYQAdgiAAgoQgBgegUgtQAqgrAKg4QAJgxgNhCQBbgTBLA0QBLAyAXBeQAYBggjBVQgfBJhOBHQg5AzhhA1QgUAKgfAGIg3AIIgRACQgWAAgUgKgA2YD6QhahNgghqQgxieB1h2QAIgIAGgDQAggVAMAEQAMAEAMAjQAEAPALAVIARAkIAOgFQgFgWgFgKQgRgpgEgiQgFgoANgmQAQgsAfgHQAegIAhAiQANANAYAdQAYAdANAOQATATAcAaIA0AwQhKBugnCDQgkB8gGCTQhsgmhHg9g");
		this.shape_5.setTransform(156.988,36.9758);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#FF510F").s().p("ARhFoQgZgLgZgbQgxg0ghhHQgcg7gUhQIgMg0QgMg/AagzQAagzA8gbIAigPQAUgJANgJQAWgOAggZIA4grQAZAIASAjQASAjAAAmQgBBShCAtQA/BFgXBYQAdgiAAgoQgBgegUgtQAqgrAKg4QAJgxgNhCQBbgTBLA0QBLAyAXBeQAYBggjBVQgfBJhOBHQg5AzhhA1QgUAKgfAGIg3AIIgRACQgWAAgUgKgA2YD6QhahNgghqQgxieB1h2QAIgIAGgDQAggVAMAEQAMAEAMAjQAEAPALAVIARAkIAOgFQgFgWgFgKQgRgpgEgiQgFgoANgmQAQgsAfgHQAegIAhAiQANANAYAdQAYAdANAOQATATAcAaIA0AwQhKBugnCDQgkB8gGCTQhsgmhHg9g");
		this.shape_6.setTransform(156.988,36.9758);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_4}]},5).to({state:[{t:this.shape_5}]},5).to({state:[{t:this.shape_6}]},5).wait(6));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,314,74);
	
	
	(lib.echarpe_2 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {"blanc":0,"rouge":4,"bleu":9,"jaune":14,"vert":19,"bleu_clair":24,"orange":29};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35));
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("ABkMJQgDgUgGg6QgGgxgFgdQgHgjAPgbQALgWAegYQDMijEBgXQBTgIBUgMQANgCAIAEQAFADAHALQBoCnCFBxQAVASAkAVIA8AlIAdARQk8ApjCA/QkIBYi6CmQhah4gXidgAmXgEQg5gEgmgFQhCgJhhgQIiigcQgJgBgOgEQglgLgHgIQgGgIgIgoQgcinBzhuQAjggAPgzQALglADg7IAAgRIH3BPIgkBHQgUApgMAdQgfBLgKA6QgMBJAUBBQAGAYAOAjIAZA9IhhgEgAAPi/QgbheglhHQgrhTg5hAQgEgEgCgHQAAgGAAgGQAZhmBlg2QARgKAJAEQAJADAHAUQAoB0AfA7QAQAfA0AhQAVANAXgBQAZgBAUgQQA7gtAChRQAAgFgGgIIgKgMIgIAZIgBAMIgBALQgHAegGAMQgLAWgVAHQgYAJgXgLQgSgJgSgVQgXgXgTgmIgRggQgFgMABgGQABgFAngkQA+g3BNgIQAJgBALAEQALAEAHAGQA9BAAxBdQAhA/ArByQAJAVAMAmIh/AdQhLASgxANQh4AihiBjIgZhQgAMEjxQAIgiAEgWQAHgogNgkQgMgjgegbQgjgggKgjQgJgkAQgtQAahOgSg8QgBgEADgHQACgGAFgEQA1gxAZgTQAHgEALgCQALgBAHAEQAiAVAXAaQA7BEg/BFQgxA2gRAWQgcAmAXA3QACAFAGAFIANAHIAGgLQAEgGABgFQACgeACgJQAFgVAPgNQAMgKAHgBQAJgBAMAJQAoAdANA3QAMA4gXAyQgSAogiAiQgcAcgrAcQgMAJgVALIgkAUIAPg8gApSpjQg6gLgmgMQgngMgwgVIhVgoQglgSgUgoQgUgpAKgoQAFgWAQgPQAmggAhgSQApgWArgDQAGgBAJADQAIADAEAFQBjCSCxBPIACACIg0CBIhegTgAw5ujQAygtA8gYIBFgaIBHgXQAwgQANAtIAEALIAGAIIhBAcQgmARgXAQQg1AihHAMQgYADghAOIg5AZQgHADgOAHIgbAPQAug/Atgpg");
		this.shape.setTransform(117.25,105.4169);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#CC0000").s().p("ABkMJQgDgUgGg6QgGgxgFgdQgHgjAPgbQALgWAegYQDMijEBgXQBTgIBUgMQANgCAIAEQAFADAHALQBoCnCFBxQAVASAkAVIA8AlIAdARQk8ApjCA/QkIBYi6CmQhah4gXidgAmXgEQg5gEgmgFQhCgJhhgQIiigcQgJgBgOgEQglgLgHgIQgGgIgIgoQgcinBzhuQAjggAPgzQALglADg7IAAgRIH3BPIgkBHQgUApgMAdQgfBLgKA6QgMBJAUBBQAGAYAOAjIAZA9IhhgEgAAPi/QgbheglhHQgrhTg5hAQgEgEgCgHQAAgGAAgGQAZhmBlg2QARgKAJAEQAJADAHAUQAoB0AfA7QAQAfA0AhQAVANAXgBQAZgBAUgQQA7gtAChRQAAgFgGgIIgKgMIgIAZIgBAMIgBALQgHAegGAMQgLAWgVAHQgYAJgXgLQgSgJgSgVQgXgXgTgmIgRggQgFgMABgGQABgFAngkQA+g3BNgIQAJgBALAEQALAEAHAGQA9BAAxBdQAhA/ArByQAJAVAMAmIh/AdQhLASgxANQh4AihiBjIgZhQgAMEjxQAIgiAEgWQAHgogNgkQgMgjgegbQgjgggKgjQgJgkAQgtQAahOgSg8QgBgEADgHQACgGAFgEQA1gxAZgTQAHgEALgCQALgBAHAEQAiAVAXAaQA7BEg/BFQgxA2gRAWQgcAmAXA3QACAFAGAFIANAHIAGgLQAEgGABgFQACgeACgJQAFgVAPgNQAMgKAHgBQAJgBAMAJQAoAdANA3QAMA4gXAyQgSAogiAiQgcAcgrAcQgMAJgVALIgkAUIAPg8gApSpjQg6gLgmgMQgngMgwgVIhVgoQglgSgUgoQgUgpAKgoQAFgWAQgPQAmggAhgSQApgWArgDQAGgBAJADQAIADAEAFQBjCSCxBPIACACIg0CBIhegTgAw5ujQAygtA8gYIBFgaIBHgXQAwgQANAtIAEALIAGAIIhBAcQgmARgXAQQg1AihHAMQgYADghAOIg5AZQgHADgOAHIgbAPQAug/Atgpg");
		this.shape_1.setTransform(117.25,105.4169);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#6699FF").s().p("ABkMJQgDgUgGg6QgGgxgFgdQgHgjAPgbQALgWAegYQDMijEBgXQBTgIBUgMQANgCAIAEQAFADAHALQBoCnCFBxQAVASAkAVIA8AlIAdARQk8ApjCA/QkIBYi6CmQhah4gXidgAmXgEQg5gEgmgFQhCgJhhgQIiigcQgJgBgOgEQglgLgHgIQgGgIgIgoQgcinBzhuQAjggAPgzQALglADg7IAAgRIH3BPIgkBHQgUApgMAdQgfBLgKA6QgMBJAUBBQAGAYAOAjIAZA9IhhgEgAAPi/QgbheglhHQgrhTg5hAQgEgEgCgHQAAgGAAgGQAZhmBlg2QARgKAJAEQAJADAHAUQAoB0AfA7QAQAfA0AhQAVANAXgBQAZgBAUgQQA7gtAChRQAAgFgGgIIgKgMIgIAZIgBAMIgBALQgHAegGAMQgLAWgVAHQgYAJgXgLQgSgJgSgVQgXgXgTgmIgRggQgFgMABgGQABgFAngkQA+g3BNgIQAJgBALAEQALAEAHAGQA9BAAxBdQAhA/ArByQAJAVAMAmIh/AdQhLASgxANQh4AihiBjIgZhQgAMEjxQAIgiAEgWQAHgogNgkQgMgjgegbQgjgggKgjQgJgkAQgtQAahOgSg8QgBgEADgHQACgGAFgEQA1gxAZgTQAHgEALgCQALgBAHAEQAiAVAXAaQA7BEg/BFQgxA2gRAWQgcAmAXA3QACAFAGAFIANAHIAGgLQAEgGABgFQACgeACgJQAFgVAPgNQAMgKAHgBQAJgBAMAJQAoAdANA3QAMA4gXAyQgSAogiAiQgcAcgrAcQgMAJgVALIgkAUIAPg8gApSpjQg6gLgmgMQgngMgwgVIhVgoQglgSgUgoQgUgpAKgoQAFgWAQgPQAmggAhgSQApgWArgDQAGgBAJADQAIADAEAFQBjCSCxBPIACACIg0CBIhegTgAw5ujQAygtA8gYIBFgaIBHgXQAwgQANAtIAEALIAGAIIhBAcQgmARgXAQQg1AihHAMQgYADghAOIg5AZQgHADgOAHIgbAPQAug/Atgpg");
		this.shape_2.setTransform(117.25,105.4169);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFF00").s().p("ABkMJQgDgUgGg6QgGgxgFgdQgHgjAPgbQALgWAegYQDMijEBgXQBTgIBUgMQANgCAIAEQAFADAHALQBoCnCFBxQAVASAkAVIA8AlIAdARQk8ApjCA/QkIBYi6CmQhah4gXidgAmXgEQg5gEgmgFQhCgJhhgQIiigcQgJgBgOgEQglgLgHgIQgGgIgIgoQgcinBzhuQAjggAPgzQALglADg7IAAgRIH3BPIgkBHQgUApgMAdQgfBLgKA6QgMBJAUBBQAGAYAOAjIAZA9IhhgEgAAPi/QgbheglhHQgrhTg5hAQgEgEgCgHQAAgGAAgGQAZhmBlg2QARgKAJAEQAJADAHAUQAoB0AfA7QAQAfA0AhQAVANAXgBQAZgBAUgQQA7gtAChRQAAgFgGgIIgKgMIgIAZIgBAMIgBALQgHAegGAMQgLAWgVAHQgYAJgXgLQgSgJgSgVQgXgXgTgmIgRggQgFgMABgGQABgFAngkQA+g3BNgIQAJgBALAEQALAEAHAGQA9BAAxBdQAhA/ArByQAJAVAMAmIh/AdQhLASgxANQh4AihiBjIgZhQgAMEjxQAIgiAEgWQAHgogNgkQgMgjgegbQgjgggKgjQgJgkAQgtQAahOgSg8QgBgEADgHQACgGAFgEQA1gxAZgTQAHgEALgCQALgBAHAEQAiAVAXAaQA7BEg/BFQgxA2gRAWQgcAmAXA3QACAFAGAFIANAHIAGgLQAEgGABgFQACgeACgJQAFgVAPgNQAMgKAHgBQAJgBAMAJQAoAdANA3QAMA4gXAyQgSAogiAiQgcAcgrAcQgMAJgVALIgkAUIAPg8gApSpjQg6gLgmgMQgngMgwgVIhVgoQglgSgUgoQgUgpAKgoQAFgWAQgPQAmggAhgSQApgWArgDQAGgBAJADQAIADAEAFQBjCSCxBPIACACIg0CBIhegTgAw5ujQAygtA8gYIBFgaIBHgXQAwgQANAtIAEALIAGAIIhBAcQgmARgXAQQg1AihHAMQgYADghAOIg5AZQgHADgOAHIgbAPQAug/Atgpg");
		this.shape_3.setTransform(117.25,105.4169);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#33A81A").s().p("ABkMJQgDgUgGg6QgGgxgFgdQgHgjAPgbQALgWAegYQDMijEBgXQBTgIBUgMQANgCAIAEQAFADAHALQBoCnCFBxQAVASAkAVIA8AlIAdARQk8ApjCA/QkIBYi6CmQhah4gXidgAmXgEQg5gEgmgFQhCgJhhgQIiigcQgJgBgOgEQglgLgHgIQgGgIgIgoQgcinBzhuQAjggAPgzQALglADg7IAAgRIH3BPIgkBHQgUApgMAdQgfBLgKA6QgMBJAUBBQAGAYAOAjIAZA9IhhgEgAAPi/QgbheglhHQgrhTg5hAQgEgEgCgHQAAgGAAgGQAZhmBlg2QARgKAJAEQAJADAHAUQAoB0AfA7QAQAfA0AhQAVANAXgBQAZgBAUgQQA7gtAChRQAAgFgGgIIgKgMIgIAZIgBAMIgBALQgHAegGAMQgLAWgVAHQgYAJgXgLQgSgJgSgVQgXgXgTgmIgRggQgFgMABgGQABgFAngkQA+g3BNgIQAJgBALAEQALAEAHAGQA9BAAxBdQAhA/ArByQAJAVAMAmIh/AdQhLASgxANQh4AihiBjIgZhQgAMEjxQAIgiAEgWQAHgogNgkQgMgjgegbQgjgggKgjQgJgkAQgtQAahOgSg8QgBgEADgHQACgGAFgEQA1gxAZgTQAHgEALgCQALgBAHAEQAiAVAXAaQA7BEg/BFQgxA2gRAWQgcAmAXA3QACAFAGAFIANAHIAGgLQAEgGABgFQACgeACgJQAFgVAPgNQAMgKAHgBQAJgBAMAJQAoAdANA3QAMA4gXAyQgSAogiAiQgcAcgrAcQgMAJgVALIgkAUIAPg8gApSpjQg6gLgmgMQgngMgwgVIhVgoQglgSgUgoQgUgpAKgoQAFgWAQgPQAmggAhgSQApgWArgDQAGgBAJADQAIADAEAFQBjCSCxBPIACACIg0CBIhegTgAw5ujQAygtA8gYIBFgaIBHgXQAwgQANAtIAEALIAGAIIhBAcQgmARgXAQQg1AihHAMQgYADghAOIg5AZQgHADgOAHIgbAPQAug/Atgpg");
		this.shape_4.setTransform(117.25,105.4169);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#00FFFF").s().p("ABkMJQgDgUgGg6QgGgxgFgdQgHgjAPgbQALgWAegYQDMijEBgXQBTgIBUgMQANgCAIAEQAFADAHALQBoCnCFBxQAVASAkAVIA8AlIAdARQk8ApjCA/QkIBYi6CmQhah4gXidgAmXgEQg5gEgmgFQhCgJhhgQIiigcQgJgBgOgEQglgLgHgIQgGgIgIgoQgcinBzhuQAjggAPgzQALglADg7IAAgRIH3BPIgkBHQgUApgMAdQgfBLgKA6QgMBJAUBBQAGAYAOAjIAZA9IhhgEgAAPi/QgbheglhHQgrhTg5hAQgEgEgCgHQAAgGAAgGQAZhmBlg2QARgKAJAEQAJADAHAUQAoB0AfA7QAQAfA0AhQAVANAXgBQAZgBAUgQQA7gtAChRQAAgFgGgIIgKgMIgIAZIgBAMIgBALQgHAegGAMQgLAWgVAHQgYAJgXgLQgSgJgSgVQgXgXgTgmIgRggQgFgMABgGQABgFAngkQA+g3BNgIQAJgBALAEQALAEAHAGQA9BAAxBdQAhA/ArByQAJAVAMAmIh/AdQhLASgxANQh4AihiBjIgZhQgAMEjxQAIgiAEgWQAHgogNgkQgMgjgegbQgjgggKgjQgJgkAQgtQAahOgSg8QgBgEADgHQACgGAFgEQA1gxAZgTQAHgEALgCQALgBAHAEQAiAVAXAaQA7BEg/BFQgxA2gRAWQgcAmAXA3QACAFAGAFIANAHIAGgLQAEgGABgFQACgeACgJQAFgVAPgNQAMgKAHgBQAJgBAMAJQAoAdANA3QAMA4gXAyQgSAogiAiQgcAcgrAcQgMAJgVALIgkAUIAPg8gApSpjQg6gLgmgMQgngMgwgVIhVgoQglgSgUgoQgUgpAKgoQAFgWAQgPQAmggAhgSQApgWArgDQAGgBAJADQAIADAEAFQBjCSCxBPIACACIg0CBIhegTgAw5ujQAygtA8gYIBFgaIBHgXQAwgQANAtIAEALIAGAIIhBAcQgmARgXAQQg1AihHAMQgYADghAOIg5AZQgHADgOAHIgbAPQAug/Atgpg");
		this.shape_5.setTransform(117.25,105.4169);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#FF510F").s().p("ABkMJQgDgUgGg6QgGgxgFgdQgHgjAPgbQALgWAegYQDMijEBgXQBTgIBUgMQANgCAIAEQAFADAHALQBoCnCFBxQAVASAkAVIA8AlIAdARQk8ApjCA/QkIBYi6CmQhah4gXidgAmXgEQg5gEgmgFQhCgJhhgQIiigcQgJgBgOgEQglgLgHgIQgGgIgIgoQgcinBzhuQAjggAPgzQALglADg7IAAgRIH3BPIgkBHQgUApgMAdQgfBLgKA6QgMBJAUBBQAGAYAOAjIAZA9IhhgEgAAPi/QgbheglhHQgrhTg5hAQgEgEgCgHQAAgGAAgGQAZhmBlg2QARgKAJAEQAJADAHAUQAoB0AfA7QAQAfA0AhQAVANAXgBQAZgBAUgQQA7gtAChRQAAgFgGgIIgKgMIgIAZIgBAMIgBALQgHAegGAMQgLAWgVAHQgYAJgXgLQgSgJgSgVQgXgXgTgmIgRggQgFgMABgGQABgFAngkQA+g3BNgIQAJgBALAEQALAEAHAGQA9BAAxBdQAhA/ArByQAJAVAMAmIh/AdQhLASgxANQh4AihiBjIgZhQgAMEjxQAIgiAEgWQAHgogNgkQgMgjgegbQgjgggKgjQgJgkAQgtQAahOgSg8QgBgEADgHQACgGAFgEQA1gxAZgTQAHgEALgCQALgBAHAEQAiAVAXAaQA7BEg/BFQgxA2gRAWQgcAmAXA3QACAFAGAFIANAHIAGgLQAEgGABgFQACgeACgJQAFgVAPgNQAMgKAHgBQAJgBAMAJQAoAdANA3QAMA4gXAyQgSAogiAiQgcAcgrAcQgMAJgVALIgkAUIAPg8gApSpjQg6gLgmgMQgngMgwgVIhVgoQglgSgUgoQgUgpAKgoQAFgWAQgPQAmggAhgSQApgWArgDQAGgBAJADQAIADAEAFQBjCSCxBPIACACIg0CBIhegTgAw5ujQAygtA8gYIBFgaIBHgXQAwgQANAtIAEALIAGAIIhBAcQgmARgXAQQg1AihHAMQgYADghAOIg5AZQgHADgOAHIgbAPQAug/Atgpg");
		this.shape_6.setTransform(117.25,105.4169);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_4}]},5).to({state:[{t:this.shape_5}]},5).to({state:[{t:this.shape_6}]},5).wait(6));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,234.5,210.9);
	
	
	(lib.echarpe_1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {"blanc":0,"rouge":4,"bleu":9,"jaune":14,"vert":19,"bleu_clair":24,"orange":29};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35));
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AEyIxIgCiHQgBhPgDg4QgFhBgYhfQgFgYAGgRQAGgQASgQQBDg9BZgkQBOgfBmgMQAdgDA7gFQAOgBAHAFQAIAFAGAOQBUDIBpDzQAHASAOAZIAYAtQiCARhAAJQiTAWhvAvQh0AyhzBfIAAiPgAgxCuQgJgFgIgNQhjiZBCiZQARgnAbg6IAthiQAdANAZAYQASASAUAgQA7BcAkBRQAqBeAQBdIADAUIAAAbIg0AHIjTAWIgFAAQgLAAgIgEgAtbAAQhNg1gmhNQghhBAjgyIAlg0IAkg2QA1ATAkAdQAqAhAXAwIANgHIgCgaQgBgPgEgIQgPgggjgaIhCgpQgygggYgVQglgigQgpQgLgcAEgXQAEgYAVgWQBbheCCgGIAGAAIAHACQgRBKAbA5QASAmAjAbQAcAWAtATQAgANAHALQAHAMgEAhQgLBUg8A/QhhBlAHCHQABARADAaIAHAuQhmgpg3glgAKMmjID8hvQAQA6gSAmQgaA4AKAvQAKAvAuApQBJBCgjBqQgIAVgTApQgKAWgYANQgXANgrAHgAhemOQhggIgvgKQAMhdBNhBQBAg2BMgNQA8gKBAAdQA/AeAeA1Qg6AagrAzQgkAqgdBEQg0gihVgMgADkpYQA8gjBJAPQBGAOAzAzQg8ARgmAVQgyAbghAqg");
		this.shape.setTransform(99.1164,70.3417);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#CC0000").s().p("AEyIxIgCiHQgBhPgDg4QgFhBgYhfQgFgYAGgRQAGgQASgQQBDg9BZgkQBOgfBmgMQAdgDA7gFQAOgBAHAFQAIAFAGAOQBUDIBpDzQAHASAOAZIAYAtQiCARhAAJQiTAWhvAvQh0AyhzBfIAAiPgAgxCuQgJgFgIgNQhjiZBCiZQARgnAbg6IAthiQAdANAZAYQASASAUAgQA7BcAkBRQAqBeAQBdIADAUIAAAbIg0AHIjTAWIgFAAQgLAAgIgEgAtbAAQhNg1gmhNQghhBAjgyIAlg0IAkg2QA1ATAkAdQAqAhAXAwIANgHIgCgaQgBgPgEgIQgPgggjgaIhCgpQgygggYgVQglgigQgpQgLgcAEgXQAEgYAVgWQBbheCCgGIAGAAIAHACQgRBKAbA5QASAmAjAbQAcAWAtATQAgANAHALQAHAMgEAhQgLBUg8A/QhhBlAHCHQABARADAaIAHAuQhmgpg3glgAKMmjID8hvQAQA6gSAmQgaA4AKAvQAKAvAuApQBJBCgjBqQgIAVgTApQgKAWgYANQgXANgrAHgAhemOQhggIgvgKQAMhdBNhBQBAg2BMgNQA8gKBAAdQA/AeAeA1Qg6AagrAzQgkAqgdBEQg0gihVgMgADkpYQA8gjBJAPQBGAOAzAzQg8ARgmAVQgyAbghAqg");
		this.shape_1.setTransform(99.1164,70.3417);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#6699FF").s().p("AEyIxIgCiHQgBhPgDg4QgFhBgYhfQgFgYAGgRQAGgQASgQQBDg9BZgkQBOgfBmgMQAdgDA7gFQAOgBAHAFQAIAFAGAOQBUDIBpDzQAHASAOAZIAYAtQiCARhAAJQiTAWhvAvQh0AyhzBfIAAiPgAgxCuQgJgFgIgNQhjiZBCiZQARgnAbg6IAthiQAdANAZAYQASASAUAgQA7BcAkBRQAqBeAQBdIADAUIAAAbIg0AHIjTAWIgFAAQgLAAgIgEgAtbAAQhNg1gmhNQghhBAjgyIAlg0IAkg2QA1ATAkAdQAqAhAXAwIANgHIgCgaQgBgPgEgIQgPgggjgaIhCgpQgygggYgVQglgigQgpQgLgcAEgXQAEgYAVgWQBbheCCgGIAGAAIAHACQgRBKAbA5QASAmAjAbQAcAWAtATQAgANAHALQAHAMgEAhQgLBUg8A/QhhBlAHCHQABARADAaIAHAuQhmgpg3glgAKMmjID8hvQAQA6gSAmQgaA4AKAvQAKAvAuApQBJBCgjBqQgIAVgTApQgKAWgYANQgXANgrAHgAhemOQhggIgvgKQAMhdBNhBQBAg2BMgNQA8gKBAAdQA/AeAeA1Qg6AagrAzQgkAqgdBEQg0gihVgMgADkpYQA8gjBJAPQBGAOAzAzQg8ARgmAVQgyAbghAqg");
		this.shape_2.setTransform(99.1164,70.3417);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFF00").s().p("AEyIxIgCiHQgBhPgDg4QgFhBgYhfQgFgYAGgRQAGgQASgQQBDg9BZgkQBOgfBmgMQAdgDA7gFQAOgBAHAFQAIAFAGAOQBUDIBpDzQAHASAOAZIAYAtQiCARhAAJQiTAWhvAvQh0AyhzBfIAAiPgAgxCuQgJgFgIgNQhjiZBCiZQARgnAbg6IAthiQAdANAZAYQASASAUAgQA7BcAkBRQAqBeAQBdIADAUIAAAbIg0AHIjTAWIgFAAQgLAAgIgEgAtbAAQhNg1gmhNQghhBAjgyIAlg0IAkg2QA1ATAkAdQAqAhAXAwIANgHIgCgaQgBgPgEgIQgPgggjgaIhCgpQgygggYgVQglgigQgpQgLgcAEgXQAEgYAVgWQBbheCCgGIAGAAIAHACQgRBKAbA5QASAmAjAbQAcAWAtATQAgANAHALQAHAMgEAhQgLBUg8A/QhhBlAHCHQABARADAaIAHAuQhmgpg3glgAKMmjID8hvQAQA6gSAmQgaA4AKAvQAKAvAuApQBJBCgjBqQgIAVgTApQgKAWgYANQgXANgrAHgAhemOQhggIgvgKQAMhdBNhBQBAg2BMgNQA8gKBAAdQA/AeAeA1Qg6AagrAzQgkAqgdBEQg0gihVgMgADkpYQA8gjBJAPQBGAOAzAzQg8ARgmAVQgyAbghAqg");
		this.shape_3.setTransform(99.1164,70.3417);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#33A81A").s().p("AEyIxIgCiHQgBhPgDg4QgFhBgYhfQgFgYAGgRQAGgQASgQQBDg9BZgkQBOgfBmgMQAdgDA7gFQAOgBAHAFQAIAFAGAOQBUDIBpDzQAHASAOAZIAYAtQiCARhAAJQiTAWhvAvQh0AyhzBfIAAiPgAgxCuQgJgFgIgNQhjiZBCiZQARgnAbg6IAthiQAdANAZAYQASASAUAgQA7BcAkBRQAqBeAQBdIADAUIAAAbIg0AHIjTAWIgFAAQgLAAgIgEgAtbAAQhNg1gmhNQghhBAjgyIAlg0IAkg2QA1ATAkAdQAqAhAXAwIANgHIgCgaQgBgPgEgIQgPgggjgaIhCgpQgygggYgVQglgigQgpQgLgcAEgXQAEgYAVgWQBbheCCgGIAGAAIAHACQgRBKAbA5QASAmAjAbQAcAWAtATQAgANAHALQAHAMgEAhQgLBUg8A/QhhBlAHCHQABARADAaIAHAuQhmgpg3glgAKMmjID8hvQAQA6gSAmQgaA4AKAvQAKAvAuApQBJBCgjBqQgIAVgTApQgKAWgYANQgXANgrAHgAhemOQhggIgvgKQAMhdBNhBQBAg2BMgNQA8gKBAAdQA/AeAeA1Qg6AagrAzQgkAqgdBEQg0gihVgMgADkpYQA8gjBJAPQBGAOAzAzQg8ARgmAVQgyAbghAqg");
		this.shape_4.setTransform(99.1164,70.3417);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#00FFFF").s().p("AEyIxIgCiHQgBhPgDg4QgFhBgYhfQgFgYAGgRQAGgQASgQQBDg9BZgkQBOgfBmgMQAdgDA7gFQAOgBAHAFQAIAFAGAOQBUDIBpDzQAHASAOAZIAYAtQiCARhAAJQiTAWhvAvQh0AyhzBfIAAiPgAgxCuQgJgFgIgNQhjiZBCiZQARgnAbg6IAthiQAdANAZAYQASASAUAgQA7BcAkBRQAqBeAQBdIADAUIAAAbIg0AHIjTAWIgFAAQgLAAgIgEgAtbAAQhNg1gmhNQghhBAjgyIAlg0IAkg2QA1ATAkAdQAqAhAXAwIANgHIgCgaQgBgPgEgIQgPgggjgaIhCgpQgygggYgVQglgigQgpQgLgcAEgXQAEgYAVgWQBbheCCgGIAGAAIAHACQgRBKAbA5QASAmAjAbQAcAWAtATQAgANAHALQAHAMgEAhQgLBUg8A/QhhBlAHCHQABARADAaIAHAuQhmgpg3glgAKMmjID8hvQAQA6gSAmQgaA4AKAvQAKAvAuApQBJBCgjBqQgIAVgTApQgKAWgYANQgXANgrAHgAhemOQhggIgvgKQAMhdBNhBQBAg2BMgNQA8gKBAAdQA/AeAeA1Qg6AagrAzQgkAqgdBEQg0gihVgMgADkpYQA8gjBJAPQBGAOAzAzQg8ARgmAVQgyAbghAqg");
		this.shape_5.setTransform(99.1164,70.3417);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#FF510F").s().p("AEyIxIgCiHQgBhPgDg4QgFhBgYhfQgFgYAGgRQAGgQASgQQBDg9BZgkQBOgfBmgMQAdgDA7gFQAOgBAHAFQAIAFAGAOQBUDIBpDzQAHASAOAZIAYAtQiCARhAAJQiTAWhvAvQh0AyhzBfIAAiPgAgxCuQgJgFgIgNQhjiZBCiZQARgnAbg6IAthiQAdANAZAYQASASAUAgQA7BcAkBRQAqBeAQBdIADAUIAAAbIg0AHIjTAWIgFAAQgLAAgIgEgAtbAAQhNg1gmhNQghhBAjgyIAlg0IAkg2QA1ATAkAdQAqAhAXAwIANgHIgCgaQgBgPgEgIQgPgggjgaIhCgpQgygggYgVQglgigQgpQgLgcAEgXQAEgYAVgWQBbheCCgGIAGAAIAHACQgRBKAbA5QASAmAjAbQAcAWAtATQAgANAHALQAHAMgEAhQgLBUg8A/QhhBlAHCHQABARADAaIAHAuQhmgpg3glgAKMmjID8hvQAQA6gSAmQgaA4AKAvQAKAvAuApQBJBCgjBqQgIAVgTApQgKAWgYANQgXANgrAHgAhemOQhggIgvgKQAMhdBNhBQBAg2BMgNQA8gKBAAdQA/AeAeA1Qg6AagrAzQgkAqgdBEQg0gihVgMgADkpYQA8gjBJAPQBGAOAzAzQg8ARgmAVQgyAbghAqg");
		this.shape_6.setTransform(99.1164,70.3417);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_4}]},5).to({state:[{t:this.shape_5}]},5).to({state:[{t:this.shape_6}]},5).wait(6));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,198.3,140.7);
	
	
	(lib.couleur_vert = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#33A81A").s().p("AhEBdQgbgKgMgYQgNgRADgWQABgPAPgIIAWgPQAMgIAJgIQAXgUALgTQAKgUAMgEQAMgFAYAKQAeAMAaAeQAKALAHAKQAHAMADANQADAKgDAFQgDAFgLAEQggAJgZAQQgUAOgPARQgPATgWADIgLABQgPAAgQgGg");
		this.shape.setTransform(11.8792,9.9537);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.couleur_vert, new cjs.Rectangle(0,0,23.8,19.9), null);
	
	
	(lib.couleur_rouge = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#CC0000").s().p("AAtBmQgHgCgGgEIgLgJQgSgQgOgIQgTgJgVgBQgQgBgMgLQgKgIgJgRIgFgLQgLgeAJgbQAKgdAfgOQANgHAQAAQAQABAMAMQAZAeAhAJQAPADAJAGQAMAHAGAMQAHAHADALQAGATABAQQABATgFAQQgGATgSAKQgNAIgOAAIgKgBg");
		this.shape.setTransform(11.0262,10.2802);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.couleur_rouge, new cjs.Rectangle(0,0,22.1,20.6), null);
	
	
	(lib.couleur_orange = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FF510F").s().p("AhGBdQgbgZgRgtIAAgDIAAgDQgEgRAOgLQAUgSAVgWQARgSAVgaQAJgLARgBQA7gEAdAzIAJARIAFAIIAEAJIAHATQADAJgCAJQgBANgLAGIgGADIgbAJQgQAGgKAFQgeAOgZAYIgCACQgOAPgNAAQgNAAgRgPg");
		this.shape.setTransform(11.5671,10.8355);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.couleur_orange, new cjs.Rectangle(0,0,23.2,21.7), null);
	
	
	(lib.couleur_jaune = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFF00").s().p("AgbBfQgWgCgVgKQgLgGgLgHQgHgFgFgHQgGgJAAgFQAAgGAKgGQARgNANgQIAHgHQAOgTANgZQAMgZAUgMQATgMAbACQAVACAQAKQAQAKAJAUQAMAZgJAdQgIAegUAXQgVAWgbALQgVAJgXAAIgOgBg");
		this.shape.setTransform(11.1134,9.6265);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.couleur_jaune, new cjs.Rectangle(0,0,22.3,19.3), null);
	
	
	(lib.couleur_bleu_clair = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#00FFFF").s().p("Ag5DAQgzgDgcglQgJgNgGgQQgEgOgBgTIgBgIIAAgIQAFhDAUgyQAXg6AtgqQApglAwgJQAvgIA2ASQAIADAJAHQAMAJACAJQACAKgHANQgVAigIATQgKAUgGAbIgKAwQgMBBglA9QgdAvg+AAIgOgBg");
		this.shape.setTransform(15.7563,19.2425);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.couleur_bleu_clair, new cjs.Rectangle(0,0,31.5,38.5), null);
	
	
	(lib.couleur_bleu = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#6699FF").s().p("AAfBZQgvgwg+gRQgSgFgKgOQgIgKgDgUQgGgUALgWQAMgYAXgGQANgDAMAGQAJAFALANQArA0A+AFQASABAJADQAKADADAFQAJAHgCARQgIAzgqAaQgJAFgIAAQgLAAgLgKg");
		this.shape.setTransform(11.9952,9.8863);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.couleur_bleu, new cjs.Rectangle(0,0,24,19.8), null);
	
	
	(lib.contour = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {"blanc":0};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#000000").s().p("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");
		this.shape.setTransform(171.1455,223.9551);
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(5));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,342.3,448);
	
	
	(lib.carotte = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {"blanc":0,"rouge":4,"bleu":9,"jaune":14,"vert":19,"bleu_clair":24,"orange":29};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35));
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("ADUBxQAHgWADgQQACgGgFgKIgJgRIgMAOQgHAHgCAHQgUBBg7gEIgSgCIhggVIAIgbIAGgYQABgDgEgFQgEgFgDgCQgCgBgFACIgIAGQgdAegQAEQgSADgrgRQAhg+ABgbQABgcgfgGIgDAuQgFAogSAMQgTANgjgNIhNgaIhNgZIgagJIAAgJICQgfICRgdICsggICuggQAbgFAVALQAQAJAPAXQBKBzg8BsQgUAmgjABIhiAAIAOgmg");
		this.shape.setTransform(37.8009,15.1583);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#CC0000").s().p("ADUBxQAHgWADgQQACgGgFgKIgJgRIgMAOQgHAHgCAHQgUBBg7gEIgSgCIhggVIAIgbIAGgYQABgDgEgFQgEgFgDgCQgCgBgFACIgIAGQgdAegQAEQgSADgrgRQAhg+ABgbQABgcgfgGIgDAuQgFAogSAMQgTANgjgNIhNgaIhNgZIgagJIAAgJICQgfICRgdICsggICuggQAbgFAVALQAQAJAPAXQBKBzg8BsQgUAmgjABIhiAAIAOgmg");
		this.shape_1.setTransform(37.8009,15.1583);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#6E97CD").s().p("ADUBxQAHgWADgQQACgGgFgKIgJgRIgMAOQgHAHgCAHQgUBBg7gEIgSgCIhggVIAIgbIAGgYQABgDgEgFQgEgFgDgCQgCgBgFACIgIAGQgdAegQAEQgSADgrgRQAhg+ABgbQABgcgfgGIgDAuQgFAogSAMQgTANgjgNIhNgaIhNgZIgagJIAAgJICQgfICRgdICsggICuggQAbgFAVALQAQAJAPAXQBKBzg8BsQgUAmgjABIhiAAIAOgmg");
		this.shape_2.setTransform(37.8009,15.1583);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFF00").s().p("ADUBxQAHgWADgQQACgGgFgKIgJgRIgMAOQgHAHgCAHQgUBBg7gEIgSgCIhggVIAIgbIAGgYQABgDgEgFQgEgFgDgCQgCgBgFACIgIAGQgdAegQAEQgSADgrgRQAhg+ABgbQABgcgfgGIgDAuQgFAogSAMQgTANgjgNIhNgaIhNgZIgagJIAAgJICQgfICRgdICsggICuggQAbgFAVALQAQAJAPAXQBKBzg8BsQgUAmgjABIhiAAIAOgmg");
		this.shape_3.setTransform(37.8009,15.1583);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#33A81A").s().p("ADUBxQAHgWADgQQACgGgFgKIgJgRIgMAOQgHAHgCAHQgUBBg7gEIgSgCIhggVIAIgbIAGgYQABgDgEgFQgEgFgDgCQgCgBgFACIgIAGQgdAegQAEQgSADgrgRQAhg+ABgbQABgcgfgGIgDAuQgFAogSAMQgTANgjgNIhNgaIhNgZIgagJIAAgJICQgfICRgdICsggICuggQAbgFAVALQAQAJAPAXQBKBzg8BsQgUAmgjABIhiAAIAOgmg");
		this.shape_4.setTransform(37.8009,15.1583);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#00FFFF").s().p("ADUBxQAHgWADgQQACgGgFgKIgJgRIgMAOQgHAHgCAHQgUBBg7gEIgSgCIhggVIAIgbIAGgYQABgDgEgFQgEgFgDgCQgCgBgFACIgIAGQgdAegQAEQgSADgrgRQAhg+ABgbQABgcgfgGIgDAuQgFAogSAMQgTANgjgNIhNgaIhNgZIgagJIAAgJICQgfICRgdICsggICuggQAbgFAVALQAQAJAPAXQBKBzg8BsQgUAmgjABIhiAAIAOgmg");
		this.shape_5.setTransform(37.8009,15.1583);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#FF510F").s().p("ADUBxQAHgWADgQQACgGgFgKIgJgRIgMAOQgHAHgCAHQgUBBg7gEIgSgCIhggVIAIgbIAGgYQABgDgEgFQgEgFgDgCQgCgBgFACIgIAGQgdAegQAEQgSADgrgRQAhg+ABgbQABgcgfgGIgDAuQgFAogSAMQgTANgjgNIhNgaIhNgZIgagJIAAgJICQgfICRgdICsggICuggQAbgFAVALQAQAJAPAXQBKBzg8BsQgUAmgjABIhiAAIAOgmg");
		this.shape_6.setTransform(37.8009,15.1583);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_4}]},5).to({state:[{t:this.shape_5}]},5).to({state:[{t:this.shape_6}]},5).wait(6));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,75.6,30.3);
	
	
	(lib.boutons = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {"blanc":0,"rouge":4,"bleu":9,"jaune":14,"vert":19,"bleu_clair":24,"orange":29};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35));
	
		// Layer_1
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("AA8LAQhNgFgugyQgwg1AFhWQAJjCDEgCQBOgBA2BBQA0A/gDBZQgDBSg9AwQg3AshSAAIgTAAgAhRDVQhOABg+g8QhAg/AGhWQAHhSA/g0QA+gzBVABQBSACAyA9QAvA5gCBRQgBBSg7A5Qg3A1hGAAIgLgBgAi9liQhFg1gChtQgChAA5g9QA9hCBNAEQBHgBA8AuQBDA0AHBTQAGBSg8BBQg4A8hAADIgPAAQhUAAg2gpg");
		this.shape.setTransform(28.0062,70.4164);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#CC0000").s().p("AA8LAQhNgFgugyQgwg1AFhWQAJjCDEgCQBOgBA2BBQA0A/gDBZQgDBSg9AwQg3AshSAAIgTAAgAhRDVQhOABg+g8QhAg/AGhWQAHhSA/g0QA+gzBVABQBSACAyA9QAvA5gCBRQgBBSg7A5Qg3A1hGAAIgLgBgAi9liQhFg1gChtQgChAA5g9QA9hCBNAEQBHgBA8AuQBDA0AHBTQAGBSg8BBQg4A8hAADIgPAAQhUAAg2gpg");
		this.shape_1.setTransform(28.0062,70.4164);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#6699FF").s().p("AA8LAQhNgFgugyQgwg1AFhWQAJjCDEgCQBOgBA2BBQA0A/gDBZQgDBSg9AwQg3AshSAAIgTAAgAhRDVQhOABg+g8QhAg/AGhWQAHhSA/g0QA+gzBVABQBSACAyA9QAvA5gCBRQgBBSg7A5Qg3A1hGAAIgLgBgAi9liQhFg1gChtQgChAA5g9QA9hCBNAEQBHgBA8AuQBDA0AHBTQAGBSg8BBQg4A8hAADIgPAAQhUAAg2gpg");
		this.shape_2.setTransform(28.0062,70.4164);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FFFF00").s().p("AA8LAQhNgFgugyQgwg1AFhWQAJjCDEgCQBOgBA2BBQA0A/gDBZQgDBSg9AwQg3AshSAAIgTAAgAhRDVQhOABg+g8QhAg/AGhWQAHhSA/g0QA+gzBVABQBSACAyA9QAvA5gCBRQgBBSg7A5Qg3A1hGAAIgLgBgAi9liQhFg1gChtQgChAA5g9QA9hCBNAEQBHgBA8AuQBDA0AHBTQAGBSg8BBQg4A8hAADIgPAAQhUAAg2gpg");
		this.shape_3.setTransform(28.0062,70.4164);
	
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics.f("#33A81A").s().p("AA8LAQhNgFgugyQgwg1AFhWQAJjCDEgCQBOgBA2BBQA0A/gDBZQgDBSg9AwQg3AshSAAIgTAAgAhRDVQhOABg+g8QhAg/AGhWQAHhSA/g0QA+gzBVABQBSACAyA9QAvA5gCBRQgBBSg7A5Qg3A1hGAAIgLgBgAi9liQhFg1gChtQgChAA5g9QA9hCBNAEQBHgBA8AuQBDA0AHBTQAGBSg8BBQg4A8hAADIgPAAQhUAAg2gpg");
		this.shape_4.setTransform(28.0062,70.4164);
	
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics.f("#00FFFF").s().p("AA8LAQhNgFgugyQgwg1AFhWQAJjCDEgCQBOgBA2BBQA0A/gDBZQgDBSg9AwQg3AshSAAIgTAAgAhRDVQhOABg+g8QhAg/AGhWQAHhSA/g0QA+gzBVABQBSACAyA9QAvA5gCBRQgBBSg7A5Qg3A1hGAAIgLgBgAi9liQhFg1gChtQgChAA5g9QA9hCBNAEQBHgBA8AuQBDA0AHBTQAGBSg8BBQg4A8hAADIgPAAQhUAAg2gpg");
		this.shape_5.setTransform(28.0062,70.4164);
	
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics.f("#FF510F").s().p("AA8LAQhNgFgugyQgwg1AFhWQAJjCDEgCQBOgBA2BBQA0A/gDBZQgDBSg9AwQg3AshSAAIgTAAgAhRDVQhOABg+g8QhAg/AGhWQAHhSA/g0QA+gzBVABQBSACAyA9QAvA5gCBRQgBBSg7A5Qg3A1hGAAIgLgBgAi9liQhFg1gChtQgChAA5g9QA9hCBNAEQBHgBA8AuQBDA0AHBTQAGBSg8BBQg4A8hAADIgPAAQhUAAg2gpg");
		this.shape_6.setTransform(28.0062,70.4164);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).to({state:[{t:this.shape_2}]},5).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_4}]},5).to({state:[{t:this.shape_5}]},5).to({state:[{t:this.shape_6}]},5).wait(6));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,56,140.9);
	
	
	// stage content:
	(lib.bonhommedeneige = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		this.actionFrames = [0];
		this.isSingleFrame = false;
		// timeline functions:
		this.frame_0 = function() {
			if(this.isSingleFrame) {
				return;
			}
			if(this.totalFrames == 1) {
				this.isSingleFrame = true;
			}
			/* Custom Mouse Cursor
			Replaces the default mouse cursor with the specified symbol instance.
			*/
			stage.canvas.style.cursor = "none";
			this.pinceau.mouseEnabled = false;
			this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
			
			function fl_CustomMouseCursor() {
				var p = this.globalToLocal(stage.mouseX, stage.mouseY);
				this.pinceau.x = p.x;
				this.pinceau.y = p.y;
			}
			
			var _this = this;
			
			var rouge = 0;
			var vert  = 0;
			var jaune  = 0;
			var bleu  = 0;
			var bleu_clair  = 0;
			var orange  = 0;
			
			_this.couleur_vert.on('click', function(){
			
			_this.pinceau.gotoAndStop('vert');
				
			vert  = 1;
			rouge = 0;
			jaune  = 0;
			bleu  = 0;
			bleu_clair  = 0;
			orange  = 0;
			});
			
			_this.couleur_jaune.on('click', function(){
			
			_this.pinceau.gotoAndStop('jaune');
			jaune  = 1;
			rouge = 0;
			vert  = 0;
			bleu  = 0;
			bleu_clair  = 0;
			orange  = 0;
			});
			
			_this.couleur_rouge.on('click', function(){
			
			_this.pinceau.gotoAndStop('rouge');
			rouge = 1;
			jaune = 0;
			vert  = 0;
			bleu  = 0;
			bleu_clair  = 0;
			orange  = 0;
			});
			
			_this.couleur_bleu_clair.on('click', function(){
			
			_this.pinceau.gotoAndStop('bleu_clair');
			
			bleu_clair  = 1;
			jaune = 0;
			vert  = 0;
			bleu  = 0;
			rouge  = 0;
			orange  = 0;
			
			});
			
			_this.couleur_bleu.on('click', function(){
			
			_this.pinceau.gotoAndStop('bleu');
			
			bleu  = 1;
			jaune = 0;
			vert  = 0;
			bleu_clair  = 0;
			rouge  = 0;
			orange  = 0;
			
			});
			
			_this.couleur_orange.on('click', function(){
			
			_this.pinceau.gotoAndStop('orange');
			
			orange  = 1;
			jaune = 0;
			vert  = 0;
			bleu_clair  = 0;
			rouge  = 0;
			bleu  = 0;
			});
			
			
			this.zone_pompom.on("click", pompom.bind(this));
			this.zone_neige.on("click", neige.bind(this));
			this.zone_gants.on("click", gants.bind(this));
			this.zone_boutons.on("click", boutons.bind(this));
			this.zone_carotte.on("click", carotte.bind(this));
			this.zone_echarpe_1.on("click", echarpe1.bind(this));
			this.zone_echarpe_2.on("click", echarpe2.bind(this));
			this.zone_bonnet.on("click", bonnet.bind(this));
			
			function pompom(e){
				
				if (vert == 1)
				{
					this.zone_pompom.gotoAndStop('vert');
				}
			
				else if (rouge == 1)
				{
					this.zone_pompom.gotoAndStop('rouge');
				}
			
				else if (orange == 1)
				{
					this.zone_pompom.gotoAndStop('orange');
				}
			
				else if (bleu == 1)
				{
					this.zone_pompom.gotoAndStop('bleu');
				}
				
				else if (bleu_clair == 1)
				{
					this.zone_pompom.gotoAndStop('bleu_clair');
				}
			
				else if (jaune == 1)
				{
					this.zone_pompom.gotoAndStop('jaune');
				}
				
				else {
				this.zone_pompom.gotoAndStop('blanc');
				}
				
			}
			
			function neige(e){
				
				if (vert == 1)
				{
					this.zone_neige.gotoAndStop('vert');
				}
			
				else if (rouge == 1)
				{
					this.zone_neige.gotoAndStop('rouge');
				}
			
				else if (orange == 1)
				{
					this.zone_neige.gotoAndStop('orange');
				}
			
				else if (bleu == 1)
				{
					this.zone_neige.gotoAndStop('bleu');
				}
				
				else if (bleu_clair == 1)
				{
					this.zone_neige.gotoAndStop('bleu_clair');
				}
			
				else if (jaune == 1)
				{
					this.zone_neige.gotoAndStop('jaune');
				}
				
				else {
				this.zone_neige.gotoAndStop('blanc');
				}
				
			} 
			
			function gants(e){
				
				if (vert == 1)
				{
					this.zone_gants.gotoAndStop('vert');
				}
			
				else if (rouge == 1)
				{
					this.zone_gants.gotoAndStop('rouge');
				}
			
				else if (orange == 1)
				{
					this.zone_gants.gotoAndStop('orange');
				}
			
				else if (bleu == 1)
				{
					this.zone_gants.gotoAndStop('bleu');
				}
				
				else if (bleu_clair == 1)
				{
					this.zone_gants.gotoAndStop('bleu_clair');
				}
			
				else if (jaune == 1)
				{
					this.zone_gants.gotoAndStop('jaune');
				}
				
				else {
				this.zone_gants.gotoAndStop('blanc');
				}
				
			} 
			
			function boutons(e){
				
				if (vert == 1)
				{
					this.zone_boutons.gotoAndStop('vert');
				}
			
				else if (rouge == 1)
				{
					this.zone_boutons.gotoAndStop('rouge');
				}
			
				else if (orange == 1)
				{
					this.zone_boutons.gotoAndStop('orange');
				}
			
				else if (bleu == 1)
				{
					this.zone_boutons.gotoAndStop('bleu');
				}
				
				else if (bleu_clair == 1)
				{
					this.zone_boutons.gotoAndStop('bleu_clair');
				}
			
				else if (jaune == 1)
				{
					this.zone_boutons.gotoAndStop('jaune');
				}
				
				else {
				this.zone_boutons.gotoAndStop('blanc');
				}
				
			} 
			
			
			
			function carotte(e){
				
				if (vert == 1)
				{
					this.zone_carotte.gotoAndStop('vert');
				}
			
				else if (rouge == 1)
				{
					this.zone_carotte.gotoAndStop('rouge');
				}
			
				else if (orange == 1)
				{
					this.zone_carotte.gotoAndStop('orange');
				}
			
				else if (bleu == 1)
				{
					this.zone_carotte.gotoAndStop('bleu');
				}
				
				else if (bleu_clair == 1)
				{
					this.zone_carotte.gotoAndStop('bleu_clair');
				}
			
				else if (jaune == 1)
				{
					this.zone_carotte.gotoAndStop('jaune');
				}
				
				else {
				this.zone_carotte.gotoAndStop('blanc');
				}
				
			} 
			
			function echarpe1(e){
				
				if (vert == 1)
				{
					this.zone_echarpe_1.gotoAndStop('vert');
				}
			
				else if (rouge == 1)
				{
					this.zone_echarpe_1.gotoAndStop('rouge');
				}
			
				else if (orange == 1)
				{
					this.zone_echarpe_1.gotoAndStop('orange');
				}
			
				else if (bleu == 1)
				{
					this.zone_echarpe_1.gotoAndStop('bleu');
				}
				
				else if (bleu_clair == 1)
				{
					this.zone_echarpe_1.gotoAndStop('bleu_clair');
				}
			
				else if (jaune == 1)
				{
					this.zone_echarpe_1.gotoAndStop('jaune');
				}
				
				else {
				this.zone_echarpe_1.gotoAndStop('blanc');
				}
				
			} 
			
			
			function echarpe2(e){
				
				if (vert == 1)
				{
					this.zone_echarpe_2.gotoAndStop('vert');
				}
			
				else if (rouge == 1)
				{
					this.zone_echarpe_2.gotoAndStop('rouge');
				}
			
				else if (orange == 1)
				{
					this.zone_echarpe_2.gotoAndStop('orange');
				}
			
				else if (bleu == 1)
				{
					this.zone_echarpe_2.gotoAndStop('bleu');
				}
				
				else if (bleu_clair == 1)
				{
					this.zone_echarpe_2.gotoAndStop('bleu_clair');
				}
			
				else if (jaune == 1)
				{
					this.zone_echarpe_2.gotoAndStop('jaune');
				}
				
				else {
				this.zone_echarpe_2.gotoAndStop('blanc');
				}
				
			} 
			
			function bonnet(e){
				
				if (vert == 1)
				{
					this.zone_bonnet.gotoAndStop('vert');
				}
			
				else if (rouge == 1)
				{
					this.zone_bonnet.gotoAndStop('rouge');
				}
			
				else if (orange == 1)
				{
					this.zone_bonnet.gotoAndStop('orange');
				}
			
				else if (bleu == 1)
				{
					this.zone_bonnet.gotoAndStop('bleu');
				}
				
				else if (bleu_clair == 1)
				{
					this.zone_bonnet.gotoAndStop('bleu_clair');
				}
			
				else if (jaune == 1)
				{
					this.zone_bonnet.gotoAndStop('jaune');
				}
				
				else {
				this.zone_bonnet.gotoAndStop('blanc');
				}
				
			} 
			
			
			
			
			
			var _this = this;
			/*
			Clicking on the specified symbol instance executes a function.
			*/
			_this.gomme.on('click', function(){
			/*
			Moves the playhead to the specified frame label in the timeline and stops the movie.
			Can be used on the main timeline or on movie clip timelines.
			*/
				_this.zone_boutons.gotoAndStop('blanc');
				_this.zone_gants.gotoAndStop('blanc');
				_this.zone_pompom.gotoAndStop('blanc');
				_this.zone_neige.gotoAndStop('blanc');
				_this.zone_echarpe_1.gotoAndStop('blanc');
				_this.zone_echarpe_2.gotoAndStop('blanc');
				_this.zone_carotte.gotoAndStop('blanc');
				_this.zone_bonnet.gotoAndStop('blanc');
			});
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
	
		// pinceau
		this.pinceau = new lib.pinceau();
		this.pinceau.name = "pinceau";
		this.pinceau.setTransform(517.5,115.1,2.1875,2.1859,0,0,0,0.1,38.5);
	
		this.timeline.addTween(cjs.Tween.get(this.pinceau).wait(1));
	
		// gomme
		this.gomme = new lib.gomme();
		this.gomme.name = "gomme";
		this.gomme.setTransform(505.5,421.8,1,1,0,0,0,29.9,31.1);
		new cjs.ButtonHelper(this.gomme, 0, 1, 1);
	
		this.timeline.addTween(cjs.Tween.get(this.gomme).wait(1));
	
		// palette
		this.instance = new lib.palette();
		this.instance.setTransform(517.05,275.95,1.5481,1.5481,0,0,0,58.6,56.6);
	
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#D4CE83").s().p("ABHBWQghgBgtgFQgrgEgfgHIgIgBQgEgBgDgCQAOAAATADIAgAFQBEALBJgCIAVgDQALAAAJACQgiAFgmAAIgIAAgACwBJQAHgCAOACQgJADgLACIgVACQAIgGAMgBgADRBCIAPgBQgNAHgOABQAEgGAIgBgAiJA5IgkgKQhAgTgrgTQADgDADABIAGABQATAKAiALIAeAJQATAHAMACIAYAGQAPAFAKAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAABAAQACADgBADIglgIgADmA6QAMgDASgKQAWgKAIgDIACgBIACABQggAXgkAJQAAgFAEgBgAExATQACgCAEABQABAAAAAAQAAgBABAAQABAAAAABQABAAAAAAQgGAHgJADQACgHADgCgAFRAAQgJALgLADQAHgNANgBgAlBgJQATABAOAMQgRgDgQgKgAFegVQAIgHAJgLIANgVIAGgIQADgEAGgBQgXAqghAdQAAgKALgJgAmRgyQADgDAEABIAGADIASANQALAFAKACQAGABAFAFQAFAEADAGQgjgOgkgXgAGMhRQABgDAFgBQgDAIgEAEIABgIg");
		this.shape.setTransform(510.975,355.2523);
	
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics.f("#E8D3B1").s().p("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");
		this.shape_1.setTransform(510.3674,271.5731);
	
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics.f("#574F59").s().p("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");
		this.shape_2.setTransform(516.9693,276.1042);
	
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics.f("#FEFEFE").s().p("AzBTOQgHAAgCgDQgDgBAAgIQAByVgBySIAAhdQAAgHADgCQAAgBA5AiIBzBFICxBsQFcDUC9i9QBRhRCMgyQC2hDEegNQH0gYFxAAQAIAAACACQACACAAAHIAABdMAAAAknQAAAIgCABQgCADgIAAgAkDtsQhXAQhTAhQlKCHhyFbQgQAwgLAwQgpC6AiDHIAHAlQA3EKDNC7QCFB7CxBGQBmAnBgASQBpAUBkgIQBcgGBGgrQAwgcAjgtQAggnAYg4QASgpAPg3IAZhkQAMgvAFgQQALgkARgYIABgCQASgZAPgQQAUgUAWgLQAhgQA0gFQBsgGA6hdQBfiXAUigQAZjPiMimQhQhfiDhLQg1gfg+gbIg4gYQhRgghigbQhVgZhNgOQhPgOg0AAQh4AAhZAOg");
		this.shape_3.setTransform(517,276.15);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));
	
		// couleur_bleu_clair
		this.couleur_bleu_clair = new lib.couleur_bleu_clair();
		this.couleur_bleu_clair.name = "couleur_bleu_clair";
		this.couleur_bleu_clair.setTransform(534.4,316.85,1.5481,1.5481,0,0,0,15.8,19.3);
	
		this.timeline.addTween(cjs.Tween.get(this.couleur_bleu_clair).wait(1));
	
		// couleur_jaune
		this.couleur_jaune = new lib.couleur_jaune();
		this.couleur_jaune.name = "couleur_jaune";
		this.couleur_jaune.setTransform(575.75,262.55,1.5481,1.5481,0,0,0,11.1,9.6);
	
		this.timeline.addTween(cjs.Tween.get(this.couleur_jaune).wait(1));
	
		// couleur_orange
		this.couleur_orange = new lib.couleur_orange();
		this.couleur_orange.name = "couleur_orange";
		this.couleur_orange.setTransform(548.95,227.15,1.5481,1.5481,0,0,0,11.6,10.8);
	
		this.timeline.addTween(cjs.Tween.get(this.couleur_orange).wait(1));
	
		// couleur_bleu
		this.couleur_bleu = new lib.couleur_bleu();
		this.couleur_bleu.name = "couleur_bleu";
		this.couleur_bleu.setTransform(496.55,218.65,1.5481,1.5481,0,0,0,12.1,9.9);
	
		this.timeline.addTween(cjs.Tween.get(this.couleur_bleu).wait(1));
	
		// couleur_vert
		this.couleur_vert = new lib.couleur_vert();
		this.couleur_vert.name = "couleur_vert";
		this.couleur_vert.setTransform(463,252.55,1.5481,1.5481,0,0,0,11.9,10);
	
		this.timeline.addTween(cjs.Tween.get(this.couleur_vert).wait(1));
	
		// couleur_rouge
		this.couleur_rouge = new lib.couleur_rouge();
		this.couleur_rouge.name = "couleur_rouge";
		this.couleur_rouge.setTransform(474.85,307.85,1.5481,1.5481,0,0,0,11,10.2);
	
		this.timeline.addTween(cjs.Tween.get(this.couleur_rouge).wait(1));
	
		// pompom
		this.zone_pompom = new lib.pompom();
		this.zone_pompom.name = "zone_pompom";
		this.zone_pompom.setTransform(380.05,95.7,1,1,0,0,0,27.6,27.1);
	
		this.timeline.addTween(cjs.Tween.get(this.zone_pompom).wait(1));
	
		// neige
		this.zone_neige = new lib.neige();
		this.zone_neige.name = "zone_neige";
		this.zone_neige.setTransform(222.4,432.75,1,1,0,0,0,151.4,33.6);
	
		this.timeline.addTween(cjs.Tween.get(this.zone_neige).wait(1));
	
		// gants
		this.zone_gants = new lib.gants();
		this.zone_gants.name = "zone_gants";
		this.zone_gants.setTransform(230.9,289.45,1,1,0,0,0,157,37);
	
		this.timeline.addTween(cjs.Tween.get(this.zone_gants).wait(1));
	
		// boutons
		this.zone_boutons = new lib.boutons();
		this.zone_boutons.name = "zone_boutons";
		this.zone_boutons.setTransform(184.6,364.65,1,1,0,0,0,28,70.4);
	
		this.timeline.addTween(cjs.Tween.get(this.zone_boutons).wait(1));
	
		// carotte
		this.zone_carotte = new lib.carotte();
		this.zone_carotte.name = "zone_carotte";
		this.zone_carotte.setTransform(177.5,155,1,1,0,0,0,37.8,15.2);
	
		this.timeline.addTween(cjs.Tween.get(this.zone_carotte).wait(1));
	
		// echarpe_1
		this.zone_echarpe_1 = new lib.echarpe_1();
		this.zone_echarpe_1.name = "zone_echarpe_1";
		this.zone_echarpe_1.setTransform(224.3,267.5,1,1,0,0,0,99.1,70.4);
	
		this.timeline.addTween(cjs.Tween.get(this.zone_echarpe_1).wait(1));
	
		// echarpe_2
		this.zone_echarpe_2 = new lib.echarpe_2();
		this.zone_echarpe_2.name = "zone_echarpe_2";
		this.zone_echarpe_2.setTransform(246.55,285.25,1,1,0,0,0,117.2,105.4);
	
		this.timeline.addTween(cjs.Tween.get(this.zone_echarpe_2).wait(1));
	
		// haut_bonnet
		this.zone_bonnet = new lib.haut_bonnet();
		this.zone_bonnet.name = "zone_bonnet";
		this.zone_bonnet.setTransform(310.5,70.2,1,1,0,0,0,70.8,44.8);
	
		this.timeline.addTween(cjs.Tween.get(this.zone_bonnet).wait(1));
	
		// contour
		this.contour = new lib.contour();
		this.contour.name = "contour";
		this.contour.setTransform(240.1,245.9,1,1,0,0,0,171.2,224);
	
		this.timeline.addTween(cjs.Tween.get(this.contour).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = new cjs.Rectangle(388.9,261.9,251.10000000000002,208);
	// library properties:
	lib.properties = {
		id: '32AF3D71713FD5499CBBF6173C6105E3',
		width: 640,
		height: 480,
		fps: 24,
		color: "#FFFFFF",
		opacity: 1.00,
		manifest: [],
		preloads: []
	};
	
	
	
	// bootstrap callback support:
	
	(lib.Stage = function(canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();
	
	p.setAutoPlay = function(autoPlay) {
		this.tickEnabled = autoPlay;
	}
	p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
	p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
	p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
	p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
	
	p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
	
	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if(!an.bootstrapListeners) {
		an.bootstrapListeners=[];
	}
	
	an.bootstrapCallback=function(fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if(an.bootcompsLoaded.length > 0) {
			for(var i=0; i<an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};
	
	an.compositions = an.compositions || {};
	an.compositions['32AF3D71713FD5499CBBF6173C6105E3'] = {
		getStage: function() { return exportRoot.stage; },
		getLibrary: function() { return lib; },
		getSpriteSheet: function() { return ss; },
		getImages: function() { return img; }
	};
	
	an.compositionLoaded = function(id) {
		an.bootcompsLoaded.push(id);
		for(var j=0; j<an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	}
	
	an.getComposition = function(id) {
		return an.compositions[id];
	}
	
	
	an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}
			domContainers[0].width = w * pRatio * sRatio;			
			domContainers[0].height = h * pRatio * sRatio;
			domContainers.forEach(function(container) {				
				container.style.width = w * sRatio + 'px';				
				container.style.height = h * sRatio + 'px';			
			});
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	an.handleSoundStreamOnTick = function(event) {
		if(!event.paused){
			var stageChild = stage.getChildAt(0);
			if(!stageChild.paused || stageChild.ignorePause){
				stageChild.syncStreamSounds();
			}
		}
	}
	an.handleFilterCache = function(event) {
		if(!event.paused){
			var target = event.target;
			if(target){
				if(target.filterCacheList){
					for(var index = 0; index < target.filterCacheList.length ; index++){
						var cacheInst = target.filterCacheList[index];
						if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
							cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
						}
					}
				}
			}
		}
	}
	
	
	})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
	var createjs, AdobeAn;