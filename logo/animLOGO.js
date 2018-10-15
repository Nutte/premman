(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"animLOGO_atlas_", frames: [[0,0,412,50],[0,52,172,89],[414,0,45,17],[323,52,97,17],[174,52,147,17]]}
];


// symbols:



(lib.pic_01 = function() {
	this.spriteSheet = ss["animLOGO_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.pic_02 = function() {
	this.spriteSheet = ss["animLOGO_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.pic_03 = function() {
	this.spriteSheet = ss["animLOGO_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pic_04 = function() {
	this.spriteSheet = ss["animLOGO_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.pic_05 = function() {
	this.spriteSheet = ss["animLOGO_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pic_01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,412,50), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FDFFD4","rgba(255,255,255,0)"],[0,0.533,1],-37.4,-36.9,37.3,36.8).s().p("EggKAU7MA0rg1XILqLiMg0rA1Xg");
	this.shape.setTransform(89.7,172.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-116.3,-34.9,411.9,415.4), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pic_03();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,45,17), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pic_04();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,97,17), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pic_05();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,147,17), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pic_02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,172,89), null);


// stage content:
(lib.animLOGO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_229 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(229).call(this.frame_229).wait(1));

	// Layer_9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_179 = new cjs.Graphics().p("ARwU0IAAjxQAAihADgpQACgmAMAAQAGAAAjAdQAiAdArApIBmBkIBjhkQArgsAggbQAhgcAGACQALACADApQACApAACaIAADrIgyAAIgKluIhQBQQhPBRgLAAQgKAAhQhQQhQhQgIAAQgDAAgCA2QgDA4AABLIAAC6gAIXT3IHYAAIgGA3InRAGgAhfT3IHRAFIAAAyInRAGgA0vUzIAAkEIC1AAQCFAAAcgDQAagEATgSQAugugrg1IgVgbIlxAAIAAg8IC3ABQB7AAAjADQAkADAVANQBBAoACBIQACBIhAAsQgRALgjAEQgjAEhnACIijAEIAABjQAABKgDANQgDAMgTAAgAlaUsQgegThQhPIhohpIhiAAQhJAAgMgDQgNgEAAgSIAAgZIC0AAQCBAAAegDQAcgEAUgRQAYgVADgfQADgfgVgXQgMgNgggFQgggDiAgCIi7gDIAAgyIC3gCQCZgDAqAKQAqAJAbAsQALATAEASQAEARgDAcQgDAfgIAQQgHAOgXAWQgXAVgPAGQgQAGggAAQgzAAAAAIQAAAHBMBLQBLBKAAAXQAAAWgNAAQgHAAgLgGgAbEUrQgJgKATguQATgvBKiYQA6h3AcgyQAdgwAJAAQAKAAAdAyQAcAzA+B9QBuDiAAAKQAAADgHADQgHADgLAAQgQAAgUgfQgUggg/h+Ihei7IhfC/QhDCFgYAjQgRAXgNAAQgGAAgGgFgEAqIAT1Qg6g2hKhKQhIhIg6g3Qg2g1gEAAQgCAAgDA1QgCA1AABKIAAC1IgyAAIgBjsQAAikADgkQACgjANAAQAIAAA7A2QA8A3BMBMQC4C5ADAAQADAAAAi5IAAi5IAyAAIAADrQAAClgDAiQgCAlgMAAQgIAAg6g1gAIWRhIAGg3IHSgGIAAA9gAhfRhIAAgyIHWAAIAAAygAIXOPIAAgyIDiAAQDhAAAIgDQAHgCAEAbIACAcgAhfOPIAAgyIHWAAIAAAygAHJEiQhUAAAEgLQADgJDRjdIDRjbIDjgBQDmAAEkgGIEogGIAlgmQAZgZAGgOQAGgOAAggQAAhTg8gjQgSgLhGgDQhBgCj9gBIl7AAICeifIEfgBQC/AAA7ADQA5ADApAMQA7ATApAgQApAhAcAyQATAjAFAYQAFAXAAA5QAABLgRAqQgSAqg0AvQgjAggTAJQgdAQg1AHQhMAKmhAEInvAGIk4E2gAH6gVQgyAAghgJQgjgKghgZQghgYgVgdQgagnAAgGQAAgHDZAAIDaAAIiVCWgACAjnIgzgZQgigRgngpQgngoAAgSQAAgIHeAAIHeAAIiZCVgAi+m5IgngXQgcgPgngsQgngrAAgPQAAgEDLgEQDPgDE7gBQLXgDgDAHQgDAHg/BHIg/BGg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(179).to({graphics:mask_graphics_179,x:277.9,y:133.2}).wait(51));

	// Layer_10
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(7.2,168.9,1,1,0,0,0,43.6,199.3);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(179).to({_off:false},0).to({x:746.7,y:194.6},50).wait(1));

	// pic_03.png
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(271.5,124.5,1,1,0,0,0,22.5,8.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({x:327.2,alpha:1},20,cjs.Ease.quartOut).wait(176));

	// pic_04.png
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(269.5,102.5,1,1,0,0,0,48.5,8.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({x:323,alpha:1},20,cjs.Ease.quartOut).wait(187));

	// drawing.svg
	this.instance_3 = new lib.Symbol2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(236.5,81.5,1,1,0,0,0,73.5,8.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({x:317.5,alpha:1},20,cjs.Ease.quartOut).wait(196));

	// pic_02.png
	this.instance_4 = new lib.Symbol1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(400,117.5,1,1,0,0,0,86,44.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},18).wait(212));

	// pic_01.png
	this.instance_5 = new lib.Symbol7();
	this.instance_5.parent = this;
	this.instance_5.setTransform(351,242,1,1,0,0,0,206,25);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(54).to({_off:false},0).to({alpha:1},25).wait(151));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(664,248,172,89);
// library properties:
lib.properties = {
	id: '4D9BEA61E9B8B6419C25300203C0845C',
	width: 700,
	height: 350,
	fps: 30,
	color: "#33CC00",
	opacity: 0.00,
	manifest: [
		{src:"images/animLOGO_atlas_.png?1529940096687", id:"animLOGO_atlas_"}
	],
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
an.compositions['4D9BEA61E9B8B6419C25300203C0845C'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;