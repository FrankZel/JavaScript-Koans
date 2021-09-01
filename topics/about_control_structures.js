// module("About Control Structures (topics/about_control_structures.js)");
const { equal } = require('assert')
const { __, test } = require('../support/koans')

test("if", () => {
	let isPositive = false;
	if (2 > 0) {
		isPositive = true;
	}
	equal(true, isPositive,  'what is the value of isPositive?');
});

test("for", () => {
	let counter = 10;
	for (let i = 1; i <= 3; i++) {
		counter = counter + i;
	}
	equal(16, counter, 'what is the value of counter?');
});

test("for in", () => {
	// this syntax will be explained in about objects
	const person = {
		name: "Amory Blaine",
		age: 102
	};
	let result = "";

	// for in enumerates the property names of an object
	for (let property_name in person) {
  		result = result + property_name;
	}
	equal("nameage", result, 'what is the value of result?');
});

test("ternary operator", () => {
	let fruit = true ? "apple" : "orange";
	equal("apple", fruit, 'what is the value of fruit?');

	fruit = false ? "apple" : "orange";
	equal("orange", fruit, 'now what is the value of fruit?');
});

test("switch", () => {
	let result = 0;
	switch (2) {
		case 1:
			result = 1;
			break;
		case 1+1:
			result = 2;
			break;
	}
	equal(2, result, 'what is the value of result?');
});

test("switch default case", () => {
    let result = "Pippin";
    switch ("m") {
        case "f":
            result = "Frodo";
            break;
        case "s":
            result = "Samwise";
                break;
        default:
            result = "Merry";
            break;
    }
    equal("Merry", result, 'what is the value of result?');
});

test("null coalescing", () => {
    let result = null || "a value";
    equal("a value", result, 'what is the value of result?');
});
