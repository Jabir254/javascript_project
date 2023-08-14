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
//

let color_lawn = {
	title: "lawn",
	color: "#00FF00",
	rating: 0,
};

const rateColor = (color, rating) => {
	return Object.assign({}, color, { rating: rating });
};

//console.log(rateColor(color_lawn, 5).rating);
//console.log(color_lawn.rating);

let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];

const addColor = function (title, colors) {
	colors.push({ title: title });
	return colors;
};
//console.log(addColor("Glam Green", list).length); // 4
//console.log(list.length); // 4

//Pure Function

//function Header(text) {
//	let h1 = document.createElement("h1");
//	h1.innerText = text;
//	document.body.appendChild(h1);
//}
//Header("Header() caused side effects");

//When writing functions, try to follow these three rules:
// 1. The function should take in at least one argument.
// 2. The function should return a value or another function.
// 3. The function should not change or mutate any of its arguments
//
// Data transformations
//
//const schools = ["Yorktown", "Washington & liberty", "Wakefield", "Wabera"];
//console.log(schools.join(", "));

//const wSchools = schools.filter((school) => school[0] === "W");
//console.log(wSchools);

//const highSchools = schools.map((school) => `${school} High School`);
//console.log(highSchools.join("\n"));

//const ages = [21, 18, 42, 40, 64, 63, 34];

//const maxAge = ages.reduce((max, age) => {
//	console.log(`${age} > ${max} = ${age > max}`);
//	if (age > max) {
//		return age;
//	} else {
//		return max;
//	}
//}, 0);

//const max = ages.reduce((max, value) => (value > max ? value : max), 0);
//console.log(max);

//High-order functional
//
const invokeif = (condition, fntrue, fnfalse) =>
	condition ? fntrue() : fnfalse();
const showwelcome = () => console.log("welcome");
const showunauthorized = () => console.log("Unauthorized!!!");

//invokeif(true, showwelcome, showunauthorized);
//invokeif(false, showwelcome, showunauthorized);

//recursion

function countdown(value, fn, delay = 1000) {
	fn(value);
	return value > 0
		? setTimeout(() => countdown(value - 1, fn, delay), delay)
		: value;
}
const log1 = (value) => console.log(value);
//countdown(10, log1);
//
const template = "hh:mm:ss tt";
const clockTime = template
 .replace("hh", "03")
 .replace("mm", "33")
 .replace("ss", "33")
 .replace("tt", "PM");
//console.log(clockTime);
//
//Putting all together


