const tahoe = {
	mountains: ["freel", "Rose", "Tallac", "Rubicon", "Silver"],
	print: function(delay = 1000){
		setTimeout(() => {
			console.log(this.mountains.join(", "));
		}, delay);
	}
};

//tahoe.print();

const add = (x= 5, y=10) => console.log(x+y);
//add();

// objects and arrays

//destructuring objects
//
const sandwich = {
	bread: "dutch crunch",
	meat: "tuna",
	cheese: "swiss",
	toppings: ["lettuce", "tomato", "Mustard"]
};

const{ bread, meat } = sandwich;
console.log(bread,meat);
