// module("About this (topics/about_this.js)");
const equal = require('assert').equal
const test = require('../support/koans').test

test("'this' inside a method", () => {
	const person = {
		name: 'bob',
		intro: function() {
			return "Hello, my name is " + this.name;
		} 
	}
	equal(person.intro(), "Hello, my name is bob", "If an object has a method can you access properties inside it?");
});

test("'this' on unattached function", () => {
	const person = {
		globalName: 'bob',
		intro: function() {
			return "Hello, my name is " + this.globalName;
		} 
	}

	const alias = person.intro;
	
	// if the function is not called as an object property 'this' is the global context 
	// (window in a browser). This is an example. Please do not do this in practise.
	//window.globalName = 'Peter';  --> No me funcionó con la función window ya que
	// 									esta variable global existe solo en el navegador
	//https://stackoverflow.com/questions/45964178/referenceerror-window-is-not-defined-at-object-anonymous-node-js
	globalThis.globalName = 'Peter';
	equal(alias(), "Hello, my name is Peter", "What does 'this' refer to when it is not part of an object?");
});

test("'this' set explicitly", () => {
	const person = {
		name: 'bob',
		intro: function() {
			return "Hello, my name is " + this.name;
		} 
	}

	// calling a function with 'call' lets us assign 'this' explicitly
	const message = person.intro.call({ name: "Frank" });
	equal(message, "Hello, my name is Frank", "What does 'this' refer to when you use the 'call()' method?");
});

// extra credit: underscore.js has a 'bind' function http://documentcloud.github.com/underscore/#bind
// read the source and see how it is implemented

