"use strict";
let stringArr = ["one", "hey", "dev"];
let guitars = ["Sirat", "Les Paul", 1515];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "Jhon";
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift("ths is the end");
// Array
let test = [];
let bands = [];
bands.push("hello", "klsklks");
// console.log(bands);
let myTuple = ["dave", 42, true];
let mixed = ["Jhon", 1, false];
myTuple[1] = 42;
// Objects
let myObj;
myObj = [];
// console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop1 = "jhon";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    name: "Jimmy",
    active: false,
    albums: ["I", "II", "IV"],
};
const greetGuitartist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return "Hello";
};
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(greetGuitartist(jp));
console.log(Grade.U);
