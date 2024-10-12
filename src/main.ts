// Type Alisas

type stringOrNumber = string | number;

type sringOrNumberArray = (string | number)[];

type Guitartist = {
	name?: string;
	active: boolean;
	albums: (string | number)[];
};

type UserId = stringOrNumber;

//Literal Types

let myName: "Dave";
let userName: "Dave" | "John" | "Amy";
userName = "Dave";

// functions

const add = (a: number, b: number) => {
	return a + b;
};

const logMsg = (message: any): void => {
	// there is no return so we can write void

	console.log(message);
};

// logMsg("game");
// logMsg(12);
// logMsg(add(1, 2));
// logMsg(add(12, 12));

let subtarct = (a: number, b: number): number => {
	return a - b;
};

type mathFunction = (a: number, b: number) => number;

// interface
// interface mathFunction {
// 	(a: number, b: number): number;
// }

let multiply: mathFunction = function (c, d) {
	return c * d;
};

// logMsg(multiply(3, 5));

// optional parameter

const addAll = (a: number, b: number, c: number = 2): number => {
	if (typeof c !== "undefined") {
		return a + b + c;
	}
	return a + b;
};

//default param value

const sumAll = (a: number = 10, b: number, c: number = 2): number => {
	return a + b + c;
};

logMsg(addAll(2, 3, 5));
logMsg(addAll(45, 50, 60));
logMsg(sumAll(undefined, 10, 15));

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
	return nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 4, 3, 6));

const createError = (errMsg: string): never => {
	throw new Error(errMsg);
};

const infinite = () => {
	let i: number = 1;
	while (true) {
		i++;
		if (i > 100) break;
	}
};

const isNumber = (value: any): boolean => {
	return typeof value === "number" ? true : false;
};

// use of the never type
const numberOrString = (value: number | string): string => {
	if (typeof value === "string") return "string";
	if (typeof value === "number") return "number";
	return createError("This should never happen!");
};
