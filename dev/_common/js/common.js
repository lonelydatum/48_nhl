const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
  ease: "power4.out"
});

const READ = {
	t1: 2.5,
	t1b: 2.5,
	t2: 3
}


const {w, h} = size

TweenLite.set([".o",  ".proline" ], {
	transformOrigin:`${size.w}px ${size.h}px`,
	x: -size.w/2,
	y: -size.h/2,
	scale: .5
})


	

CustomEase.create("custom", "M0,0 C0.14,0 0.234,0.438 0.264,0.561 0.305,0.728 0.4,1.172 0.55,1.172 0.652,1.172 0.722,1.102 0.77,1.024 0.834,0.93 0.89,0.946 0.916,0.946 0.952,0.946 1,1 1,1 ")

function olg(){
	TweenLite.set("#olg", {opacity:1})	
    const tl = new TimelineMax()
        
    tl.to("#bluewedge1", {duration:.5, ease: 'power1.inOut', scaleY:1, scale:1, x:0, y:0}, 0)
    tl.to("#redwedge1", {duration:.8, ease: 'power1.inOut', scaleY:1, scale:1, x:0, y:0}, 0)

    .from('#group-o', {duration: 1, y: 200, ease: "custom"}, 0)
    .from('#group-l', {duration: 1, y: 200, ease: "custom"}, .1)
    .from('#group-g', {duration: 1, y: 200, ease: "custom"}, .2)

    .from('#group-o', {duration: .8, scale: .4, ease: "power1.out"}, .3)
    .from('#group-l', {duration: .8, scale: .4, ease: "power1.out"}, .4)
    .from('#group-g', {duration: .8, scale: .4, ease: "power1.out"}, .5)

    .from('#letter-o', {duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '28pt 75pt'}, .9)
    .from('#letter-l', {duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '55pt 75pt'}, 1)
    .from('#letter-g', {duration: .25, scale: 0, ease: 'back.out(2)', svgOrigin: '80pt 75pt'}, 1.1)
    
    // tl.timeScale(2)

    return tl
}


function chev(){
	const tl = new TimelineMax()

	tl.add("chev", "+=.1")

	if(document.querySelector(".zero")){
		tl.to(".zero",  {duration:.3, opacity:0}, "chev")	
	}
	

	tl.from(".chev_1",  {duration:.3, opacity:0}, "chev")
	tl.from(".chev_2",  {duration:.3, opacity:0}, "-=.2")
	tl.from(".chev_3",  {duration:.3, opacity:0}, "-=.2")
	return tl
}




function init(){
	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})

	

	tl.set(".frame1", {opacity:1})

	

	return tl
}




export {size, init, olg, chev}