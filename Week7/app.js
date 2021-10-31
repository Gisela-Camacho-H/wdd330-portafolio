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

//console.log(party());
//console.log(party());
//console.log(party());
const dice = {
	sides: 6,
		roll() {
			return Math.floor(this.sides * Math.random()) + 1;
		}
	}
	
	//console.log('Before the roll');
	
	const roll = new Promise( (resolve,reject) => {
		const n = dice.roll();
		if(n > 1){
			setTimeout(()=>{resolve(n)},n*200);
		} else {
			setTimeout(()=>reject(n),n*200);
		}
	});
	
	//roll.then(result => console.log(`I rolled a ${result}`) )
	//.catch(result => console.log(`Drat! ... I rolled a ${result}`) );
	
	//console.log('After the roll');

	function random(a,b=1) {
		// if only 1 argument is provided, we need to swap the values of a and b
		if (b === 1) {
			[a,b] = [b,a];
		} 
		return Math.floor((b-a+1) * Math.random()) + a;
	}
	
	//console.log(random(6));
	//console.log(random(10,20));

	function returnHello() {
		console.log('returnHello() called');
		return function() {
			console.log('Hello World!');
		}
	}
	//console.log(returnHello());
	//const hello = returnHello();
	//console.log(hello);
	//console.log(hello());

	function counter(start){
		let i = start;
		return function() {
			return i++;
		}
	}
	const count = counter(2);
	//console.log(count());
	//console.log(count());
