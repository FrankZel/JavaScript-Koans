// demonstrate objects prototype chain

// https://developer.mozilla.org/en/JavaScript/Guide/Inheritance_and_the_prototype_chain
// module("About Prototype Chain (topics/about_prototype_chain.js)");
const equal = require('assert').equal
const test = require('../support/koans').test

const father = {
  b: 3,
  c: 4
};

const child = Object.create(father);
child.a = 1;
child.b = 2;

/*
 * ---------------------- ---- ---- ----
 *                      [a]  [b]  [c]
 * ---------------------- ---- ---- ----
 * [child]               1    2
 * ---------------------- ---- ---- ----
 * [father]                   3    4
 * ---------------------- ---- ---- ----
 * [Object.prototype]
 * ---------------------- ---- ---- ----
 * [null]
 * ---------------------- ---- ---- ----
 * */

test("Is there an 'a' and 'b' own property on child?", () => {
  equal(true, child.hasOwnProperty('a'), 'child.hasOwnProperty(\'a\')?');
  equal(true, child.hasOwnProperty('b'), 'child.hasOwnProperty(\'b\')?');
});

test("Is there an 'a' and 'b' property on child?", () => {
  equal(1, child.a, 'what is \'a\' value?');
  equal(2, child.b, 'what is \'b\' value?');
});

test("If 'b' was removed, whats b value?", () => {
  delete child.b;
  equal(3, child.b, 'what is \'b\' value now?'); //Toma el del padre!!
});


test("Is there a 'c' own property on child?", () => {
  equal(false, child.hasOwnProperty('c'), 'child.hasOwnProperty(\'c\')?');
});

// Is there a 'c' own property on child? No, check its prototype
// Is there a 'c' own property on child.[[Prototype]]? Yes, its value is...
test("Is there a 'c' property on child?", () => {
  equal(4, child.c, 'what is the value of child.c?');
});


// Is there a 'd' own property on child? No, check its prototype
// Is there a 'd' own property on child.[[Prototype]]? No, check it prototype
// child.[[Prototype]].[[Prototype]] is null, stop searching, no property found, return...
test("Is there an 'd' property on child?", () => {
  equal(undefined, child.d, 'what is the value of child.d?');
});


