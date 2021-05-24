console.log("Core Concepts of Functional Programming")
// LinkedIn with Shaun Wassell; Learning Functional Programming with JavaScript ES6+

// 1. Immutability - variables can NOT be mutated; has to be a new variable every time

// 2. Separating functions and data - no double dipping

// 3. First-class functions
// First class functions are functions as data
// can make an array of fucntions, helpful if have several single line Functions

const double = x => x * 2;
const subtractOne = x => x - 1;
const triple = x => x * 3;
const add5 = x => x + 5;

// ADVANCED Functional CONCEPTS:
// 4. Recursion

// 5. Partial application