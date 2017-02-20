var counter = function(startNum){
	return function(){
		return ++startNum;
	}
}

var counter1 = new counter(5)
var counter2 = new counter(10)

counter1();
counter1();
counter2();

console.log("Counter1 :  "+ counter1())
console.log("Counter2 :   "+ counter2())


/* 
function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
}
(function() {
    this.getName = function() {
        return this.name;
    };
    
}).call(MyObject.prototype);

var person1 = new MyObject("senthil", "hello");
var person2 = new MyObject("john", "hello");


console.log(person1.getName());
console.log(person2.getName());

*/