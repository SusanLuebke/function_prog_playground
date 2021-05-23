console.log("Mapping")

// converting items in an array, like from inches to cm; or to double each number in an array OR just pull out the name of the person and not all the rest of the details

// The Original way is with for loop and index variable. this way leads to bugs as it becomes more complex.
// const doubleNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   const doubled = numbers[i] * 2;
//   doubleNumbers.push[doubled];
// }

// Instead use .map, applying it to an array and passing a function through it.
// numbers.map(f)
// numbers.map(x => x*x); to square a number

// Map does not MODIFY the original array, although most others do (like reverse)

// const numbers = [1, 2, 3, 4, 5];

// numbers.reverse();
// console.log(numbers);

// THE NEW BETTER way; instead of the how can just focus on the what we want!

const numbers = [1, 2, 3, 4, 5];

const double = x => x * 2;

const doubledNumbers = numbers.map(double);

console.log(doubledNumbers);