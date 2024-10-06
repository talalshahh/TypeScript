let myName: string;
let meaningLife: number;
let isLoading: boolean;
let album: any;

myName = "Hassan";
isLoading = true;
meaningLife = 45;
album = true;

console.log(myName);

let a = 12;
let b = "6";

let postId: string | number;
let isActive: number | boolean | string;

const sum = (a: number, b: string) => {
	return a + b;
};

const hello = sum(a, b);

console.log(hello);

let re: RegExp = /\w+/g;
