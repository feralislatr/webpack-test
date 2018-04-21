'use strict';

function rev(x){
	for(var i=0; x; x=Math.floor(x /10)){
		i *= 10
		i += x % 10
	}
	return i
}

console.log(rev(369))

