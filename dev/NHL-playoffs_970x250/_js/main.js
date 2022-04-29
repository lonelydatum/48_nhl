import {size,init, olg} from '../../_common/js/common.js'
import {READ} from '../../_common/js/proline.js'



function horizontal(duration=.21){


	TweenLite.set([".bring" ], {
		transformOrigin:`${size.w}px ${size.h}px`,
		x: -size.w/2,
		y: -size.h/2,
		scale: .5
	})

	const tl = init()
	
	const HEIGHT = Math.min(size.h*.7, 80)

	tl.from(".o",  {duration:.3, opacity:0}, "+=.2")
	tl.from(".proline", {scale:1, duration:.25, opacity:0, ease:'back.out'}, "+=.2")
	tl.to(".proline", {duration:.25, opacity:0}, "+=1")
	
	
	

	tl.add("t1-in", "+=.2")
	tl.from(".t1a", {duration, opacity:0, y:`-=${HEIGHT}`}, "t1-in")	
	tl.from(".t1b", {duration, opacity:0, y:`+=${HEIGHT}`}, "t1-in")	

	tl.add("t1-out", `+=${READ.t1}`)
	tl.to(".t1a", {duration, opacity:0, y:`-=${HEIGHT}`}, "t1-out")
	tl.to(".t1b", {duration, opacity:0, y:`+=${HEIGHT}`}, "t1-out")


	tl.add("t2-in", "+=.1")
	tl.from(".t2a", {duration, opacity:0, y:`-=${HEIGHT}`}, "t2-in")	
	tl.from(".t2b", {duration, opacity:0, y:`+=${HEIGHT}`}, "t2-in")	

	tl.add("t2-out", `+=${READ.t1b}`)
	tl.to(".t2a", {duration, opacity:0, y:`-=${HEIGHT}`}, "t2-out")
	tl.to(".t2b", {duration, opacity:0, y:`+=${HEIGHT}`}, "t2-out")
	
	tl.from(".proline-end", {duration:.25, opacity:0}, "+=.1")
	tl.to(".proline-end", {duration:.25, opacity:0}, "+=1.2")


	tl.from(".t2", {duration:.25, opacity:0}, "+=.2")
	tl.to(".t2", {duration:.25, opacity:0}, `+=${READ.t2}`)

	tl.from(".bring", {scale:1, duration:.25, opacity:0, ease:'back.out'}, "+=.2")
	tl.from([".cta", ".proline-end_2"], {duration:.25, opacity:0, ease:'back.out'}, "+=.2")
	


	

	
	
	
	
	tl.add("end", "+=.3")
	tl.add(olg(), "end")
	tl.from(".footer",  {duration:.5, opacity:0}, "end")

	// tl.play("t2-in")


}

horizontal()

module.exports = {};

