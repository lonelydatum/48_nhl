


import {chev} from '../../_common/js/common.js'
import {intro_O, text1, end} from '../../_common/js/proline.js'


function start(){
	const tl = intro_O()	

	tl.add(text1())



	
	tl.from(".bring",  {duration:.25, x:"-=100", opacity:0})
	tl.add(chev())

	tl.to(".chev_1a", {duration:.3, opacity:0}, "+=.1")
	tl.from(".proline-end",  {duration:.3, opacity:0}, "+=.1")
	tl.to(".chev_1b", {duration:.3, opacity:0}, "+=.3")


	tl.add(end())

}



start()



module.exports = {};

