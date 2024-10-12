"use strict";
// Type Alisas
//Literal Types
let myName;
let userName;
userName = "Dave";
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    // there is no return so we can write void
    console.log(message);
};
// logMsg("game");
// logMsg(12);
// logMsg(add(1, 2));
// logMsg(add(12, 12));
let subtarct = (a, b) => {
    return a - b;
};
// interface
// interface mathFunction {
// 	(a: number, b: number): number;
// }
let multiply = function (c, d) {
    return c * d;
};
// logMsg(multiply(3, 5));
// optional parameter
const addAll = (a, b, c = 2) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
//default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 5));
logMsg(addAll(45, 50, 60));
logMsg(sumAll(undefined, 10, 15));
// Rest Parameters
const total = (a, ...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 4, 3, 6));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (typeof value === "number")
        return "number";
    return createError("This should never happen!");
};
