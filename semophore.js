//Let us say we can call the function only three times.

var counter = 0;
var queue = [];

function callThree(){
	counter++
	if(counter >= 3) {
		queue.push(this);
		console.log(this)
		return callThree()
	}
	setTimeout(function(){ console.log(counter)
							counter--;
							}, 2000);
}

callThree();
callThree();
callThree();
callThree();
callThree();
callThree();
callThree();

