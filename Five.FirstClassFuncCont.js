console.log("First Class Functions Continued")
// First class functions are functions as data

// can make an array of fucntions, helpful if have several single line Functions

const double = x => x * 2;
const subtractOne = x => x - 1;
const triple = x => x * 3;
const add5 = x => x + 5;

// put all our functions into an array

const functionsArray = [
  double,
  subtractOne,
  triple,
  add5,
  Math.sqrt, // we can use ones that we don't define too!
];

var number = 42 // the number we want to start with

// now loop through each of the functions and apply

functionsArray.forEach(func => number = func(number));

console.log(number);