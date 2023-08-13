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
//fetch("https://api/randomuser.me/?nat=US&results=1")
//	.then((res) => res.json())
//	.then((json) => json.results)
//	.then(console.log)
//	.catch(console.error);
//
//
//	Async/Await
//
const getFakePerson = async () => {
	try {
		let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
		let { results } = res.json();
		console.log(results);
	} catch (error) {
		console.error(error);
	}
};
//getFakePerson();i

const getPeople = (count) =>
	new Promise((resolves, rejects) => {
		const api = `https://api.randomuser.me/?nat=US&results=${count}`;
		const request = new XMLHttpRequest();
		request.open("GET", api);
		request.onload = () =>
			request.status == 200
				? resolves(JSON.parse(request.response).results)
				: reject(Error(request.statusText));
		request.onerror = (err) => rejects(err);
		request.send();
	});

//getPeople(5)
//	.then((members) => console.log(members))
//	.catch((error) => console.error(`getPeople failed: ${error.message}`));

//classes
function Vacation(destination, length) {
	this.destination = destination;
	this.length = length;
}

Vacation.prototype.print = function () {
	console.log(this.destination + " | " + this.length + " days");
};

const maui = new Vacation("Maui", 7);

//maui.print();

//functional programming
var log = function (message) {
	console.log(message);
};
//log("In javascript, function are variables");

const messages = [
	"they can be inserted into arrays",
	(message) => console.log(message),
	"like variables",
	(message) => console.log(message),
];

//messages[1](messages[0]);
//messages[3](messages[2]);
//

const createScream = (logger) => (message) => {
	logger(message.toUpperCase() + "!!!");
};
//const scream = createScream((message) => console.log(message));
//scream("functions can be returned from other functions");
//scream("createScream returns a function");
//scream("scream invokes that returned function");

//imperative approach
//
const string = "Restaurants in Hanalei";
var urlFriendly = "";

for (var i = 0; i < string.length; i++) {
	if (string[i] === " ") {
		urlFriendly += "-";
	} else {
		urlFriendly += string[i];
	}
}
//console.log(urlFriendly);
