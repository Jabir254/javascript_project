const tahoe = {
	mountains: ["freel", "Rose", "Tallac", "Rubicon", "Silver"],
	print: function (delay = 1000) {
		setTimeout(() => {
			console.log(this.mountains.join(", "));
		}, delay);
	},
};

//tahoe.print();

const add = (x = 5, y = 10) => console.log(x + y);
//add();

// objects and arrays

//destructuring objects
//
const sandwich = {
	bread: "dutch crunch",
	meat: "tuna",
	cheese: "swiss",
	toppings: ["lettuce", "tomato", "Mustard"],
};

const { bread, meat } = sandwich;
//console.log(bread, meat);

function directions(...args) {
	let [start, ...remaining] = args;
	let [finish, ...stops] = remaining.reverse();
	//console.log(`drive through ${args.length} towns`);
	//console.log(`start in ${start}`);
	//console.log(`the destination is ${finish}`);
	//console.log(`stopping ${stops.length} times in between`);
	//console.log(`stopping towns are ${stops} `);
}
directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");

//spread properties
//
const morning = {
	breakfast: "oatmeals",
	lunch: "peanut butter and jelly",
};

const dinner = "mac and cheese";

const backpackingmeals = {
	...morning,
	dinner,
};

//console.log(backpackingmeals)
//

// Asynchronous JavaScript
//
fetch("https://api/randomuser.me/?nat=US&results=1")
	.then((res) => res.json())
	.then((json) => json.results)
	.then(console.log)
	.catch(console.error);
