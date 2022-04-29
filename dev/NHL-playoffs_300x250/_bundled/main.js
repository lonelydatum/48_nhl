(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

var _commonJsProlineJs = require('../../_common/js/proline.js');

function start() {

	var tl = (0, _commonJsProlineJs.intro_O)();

	tl.add((0, _commonJsProlineJs.text1)());

	tl.from(".bring", { duration: .25, x: "-=100", opacity: 0 });
	tl.add((0, _commonJsCommonJs.chev)());

	tl.from(".proline-end", { duration: .3, opacity: 0 }, "+=.1");

	tl.add((0, _commonJsProlineJs.end)());
}

start();

module.exports = {};

},{"../../_common/js/common.js":2,"../../_common/js/proline.js":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

gsap.defaults({
	ease: "power4.out"
});

var w = size.w;
var h = size.h;

TweenLite.set([".o", ".proline"], {
	transformOrigin: size.w + "px " + size.h + "px",
	x: -size.w / 2,
	y: -size.h / 2,
	scale: .5
});

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ");

function olg() {
	TweenLite.set("#olg", { opacity: 1 });
	var tl = new TimelineMax();

	tl.to("#bluewedge1", { duration: .5, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0);
	tl.to("#redwedge1", { duration: .8, ease: 'power1.inOut', scaleY: 1, scale: 1, x: 0, y: 0 }, 0).from('#group-o', { duration: 1, y: 200, ease: "custom" }, 0).from('#group-l', { duration: 1, y: 200, ease: "custom" }, .1).from('#group-g', { duration: 1, y: 200, ease: "custom" }, .2).from('#group-o', { duration: .8, scale: .4, ease: "power1.out" }, .3).from('#group-l', { duration: .8, scale: .4, ease: "power1.out" }, .4).from('#group-g', { duration: .8, scale: .4, ease: "power1.out" }, .5).from('#letter-o', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt' }, .9).from('#letter-l', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt' }, 1).from('#letter-g', { duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt' }, 1.1);

	// tl.timeScale(2)

	return tl;
}

function chev() {
	var tl = new TimelineMax();

	tl.add("chev", "+=.1");

	if (document.querySelector(".zero")) {
		tl.to(".zero", { duration: .3, opacity: 0 }, "chev");
	}

	tl.from(".chev_1", { duration: .3, opacity: 0 }, "chev");
	tl.from(".chev_2", { duration: .3, opacity: 0 }, "-=.2");
	tl.from(".chev_3", { duration: .3, opacity: 0 }, "-=.2");
	return tl;
}

function init() {

	var tl = new TimelineMax({ onComplete: function onComplete() {
			if (document.getElementById("legalBtn")) {
				TweenLite.set("#legalBtn", { display: "block" });
			}
		} });

	tl.set(".frame1", { opacity: 1 });

	return tl;
}

exports.size = size;
exports.init = init;
exports.olg = olg;
exports.chev = chev;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _commonJs = require('./common.js');

var READ = {
	t1: 2.5,
	t1b: 2.5,
	t2: 3
};

function intro_O() {
	var tl = (0, _commonJs.init)();
	tl.from(".o", { duration: .3, scale: 1, ease: 'back.out', opacity: 0 }, "+=.2");
	tl.add("proline", "+=.4");
	tl.from(".o-shadow", { duration: .1, opacity: 0 }, "proline");
	tl.from(".proline", { scale: 1, duration: .25, opacity: 0, ease: 'back.out' }, "proline");

	tl.to(".proline", { duration: .2, opacity: 0 }, "+=1");

	return tl;
}

function text1() {
	var tl = new TimelineMax();
	tl.add("t1-in");
	tl.from(".t1a", { x: '-' + _commonJs.size.w, duration: .2 }, "t1-in");
	tl.from(".t1b", { x: _commonJs.size.w, duration: .2 }, "t1-in");

	tl.add("t1-out", '+=' + READ.t1);
	tl.to(".t1a", { opacity: 0, x: '-' + Math.min(_commonJs.size.w, 300), duration: .3 }, "t1-out");
	tl.to(".t1b", { opacity: 0, x: Math.min(_commonJs.size.w, 300), duration: .3 }, "t1-out");
	tl.to([".o-shadow", ".proline", ".o"], { duration: .1, opacity: 0 }, "+=.1");

	return tl;
}

function end() {

	var tl = new TimelineMax();
	tl.from(".t2", { duration: .3, opacity: 0 }, "+=.5");
	tl.to(".t2", { duration: .3, opacity: 0 }, '+=' + READ.t2);

	tl.add("cta", "+=.2");

	tl.from(".cta", { duration: .3, opacity: 0 }, "cta");

	tl.add("end", "+=.3");
	tl.add((0, _commonJs.olg)(), "end");
	tl.from(".footer", { duration: .5, opacity: 0 }, "end");

	return tl;
}

////////////

function horizontal() {
	var duration = arguments.length <= 0 || arguments[0] === undefined ? .3 : arguments[0];

	TweenLite.set([".bring"], {
		transformOrigin: _commonJs.size.w + 'px ' + _commonJs.size.h + 'px',
		x: -_commonJs.size.w / 2,
		y: -_commonJs.size.h / 2,
		scale: .5
	});

	var tl = (0, _commonJs.init)();

	var HEIGHT = Math.min(_commonJs.size.h * .7, 80);

	tl.from(".o", { duration: .3, opacity: 0 }, "+=.2");
	tl.from(".proline", { scale: 1, duration: .25, opacity: 0, ease: 'back.out' }, "+=.2");
	tl.to(".proline", { duration: .25, opacity: 0 }, "+=1");

	tl.add("t1-in", "+=.2");
	tl.from(".t1a", { duration: duration, opacity: 0, y: '-=' + HEIGHT }, "t1-in");
	tl.from(".t1b", { duration: duration, opacity: 0, y: '+=' + HEIGHT }, "t1-in");

	tl.add("t1-out", '+=' + READ.t1);
	tl.to(".t1a", { duration: duration, opacity: 0, y: '-=' + HEIGHT }, "t1-out");
	tl.to(".t1b", { duration: duration, opacity: 0, y: '+=' + HEIGHT }, "t1-out");

	tl.add("t2-in", "+=.1");
	tl.from(".t2a", { duration: duration, opacity: 0, y: '-=' + HEIGHT }, "t2-in");
	tl.from(".t2b", { duration: duration, opacity: 0, y: '+=' + HEIGHT }, "t2-in");

	tl.add("t2-out", '+=' + READ.t1b);
	tl.to(".t2a", { duration: duration, opacity: 0, y: '-=' + HEIGHT }, "t2-out");
	tl.to(".t2b", { duration: duration, opacity: 0, y: '+=' + HEIGHT }, "t2-out");

	tl.from(".bring", { scale: 1, duration: .25, opacity: 0, ease: 'back.out' }, "+=.2");
	tl.to(".bring", { duration: .25, opacity: 0 }, "+=1.3");

	tl.from(".t2", { duration: .25, opacity: 0 }, "+=.2");
	tl.to(".t2", { duration: .25, opacity: 0 }, '+=' + READ.t2);

	tl.from(".proline-end", { duration: .25, opacity: 0 }, "+=.1");
	tl.from(".cta", { duration: .25, opacity: 0 }, "+=.3");

	tl.add("end", "+=.3");
	tl.add((0, _commonJs.olg)(), "end");
	tl.from(".footer", { duration: .5, opacity: 0 }, "end");
}
exports.intro_O = intro_O;
exports.text1 = text1;
exports.end = end;
exports.horizontal = horizontal;

},{"./common.js":2}]},{},[1])


//# sourceMappingURL=main.js.map
