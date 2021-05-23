console.log("Slice Function")

// these functions mutate (recall functional programming doesn't allow mutations, so we have to manipulate them): SORT, REVERSE, PUSH, POP

// Slice is the workaround, usually used to get a subset of an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// first number, which index to start on, and 2nd is which to stop before...

// console.log(numbers.slice(3, 8)); // returns a subset of 4-8

// Slice doesn't mutate, it makes a copy, so in order to use one of the mutation ones, slice first then us sort, reverse, push or pop.

// the slice default, without any arguments is the full array
console.log(numbers.slice());

// so call slice with no limitations and then do...
console.log(numbers.slice().reverse());