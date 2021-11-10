// module("About Scope (topics/about_scope.js)");
const equal = require('assert').equal
const test = require('../support/koans').test

thisIsAGlobalVariable = 77;

test("global variables", () => {
    equal(77, thisIsAGlobalVariable, 'is thisIsAGlobalVariable defined in this scope?');
});

test("variables declared inside of a function", () => {
    let outerVariable = "outer";

    // this is a self-invoking function. Notice that it calls itself at the end ().
    (function() {
        let innerVariable = "inner";
        equal('outer', outerVariable, 'is outerVariable defined in this scope?');
        equal("inner", innerVariable, 'is innerVariable defined in this scope?');
    })();

    equal("outer", outerVariable, 'is outerVariable defined in this scope?');
    equal('undefined', typeof(innerVariable), 'is innerVariable defined in this scope?');
});