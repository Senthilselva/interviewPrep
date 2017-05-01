
var link = function(height = 50, color = "blue"){
	console.log(height);
	console.log(color);
}

link();
link(undefined,"red");

var cat = {
	name: "jj",
	color: "red"
}


let { name } = cat;
console.log(name);