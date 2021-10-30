function sayHello(){
	return `Hello, my name is ${ this.name}`;
}
const gisela = { name: "Gisela"};
//console.log(sayHello.call(gisela));


function square(x) {
	square.cache = square.cache || {};
	if (!square.cache[x]){
		square.cache[x] = x * x;
	}
	return square.cache[x]
}
//console.log(square(3));
//console.log(square(-11));
//console.log(square.cache);

let a = 1;
let b = 2;
(() =>{
	const temp = a;
	a = b;
	b = temp;
})();
//console.log(a); 
//console.log(b);

function blocks() {
	const name = "Block A";
	console.log (`Hello from ${name}`);
};

	//(function () {
	//const name = "Block B";
	//console.log (`Hello from ${name}`);
//}());
//blocks();

function party(){
	console.log("Wow this is amazing!");
	party = function(){
		console.log("Been there, got the T-Shirt");
	};
};

console.log(party());
console.log(party());
console.log(party());




