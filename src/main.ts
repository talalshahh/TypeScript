let stringArr = ["one", "hey", "dev"];

let guitars = ["Sirat", "Les Paul", 1515];

let mixedData = ["EVH", 1984, true];

stringArr[0] = "Jhon";
stringArr.push("hey");

guitars[0] = 1984;

guitars.unshift("ths is the end");

// Array
let test = [];
let bands: string[] = [];

bands.push("hello", "klsklks");

// console.log(bands);

let myTuple: [string, number, boolean] = ["dave", 42, true];

let mixed = ["Jhon", 1, false];

myTuple[1] = 42;

// Objects

let myObj: object;
myObj = [];
// console.log(typeof myObj);

myObj = bands;

myObj = {};

const exampleObj = {
	prop1: "Dave",
	prop2: true,
};

exampleObj.prop1 = "jhon";

// type Guitarist = {
// 	name: string;
// 	active: boolean;
// 	albums: (string | number)[];
// };

// we can use type as well as interface but there is a difference between them

interface Guitarist {
	name: string;
	active: boolean;
	albums: (string | number)[];
}

let evh: Guitarist = {
	name: "Eddie",
	active: false,
	albums: [1984, 5150, "OU812"],
};

let jp: Guitarist = {
	name: "Jimmy",
	active: false,
	albums: ["I", "II", "IV"],
};

const greetGuitartist = (guitarist: Guitarist) => {
	if (guitarist.name) {
		return `Hello ${guitarist.name.toUpperCase()}!`;
	}
	return "Hello";
};

enum Grade {
	U = 1,
	D,
	C,
	B,
	A,
}

console.log(greetGuitartist(jp));

console.log(Grade.U);
