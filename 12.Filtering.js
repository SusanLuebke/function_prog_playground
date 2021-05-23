console.log("Filtering")

// to find all the elements in an array that fit some kind of criteria. With filter we pass a function that returns a true or false.

// Example: numbers.filter(greaterThan2)

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const isEven = x => x % 2 === 0;

// const evenNumbers = numbers.filter(isEven);

// console.log(evenNumbers);

// could even run it like this instead of using isEven:
// const evenNumbers = number.filter(x => x % === 0)

// The Original way
// var evenNumbers = [];
// for (let i < 0; i = numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     evenNumbers.push(numbers[i])   
//   }
// }

// Second Example
// find words longer than 5 letters

// const words = [
//   "apple",
//   "turkey",
//   "Antartica",
//   "Kalafraqicexpallodotious",
// ];

// word is the argument and return word if greater than 5
// const wordsLongerThan5 = word => word.length > 5;
// const longWords = words.filter(wordsLongerThan5);

// console.log(longWords);

// We can refactor to even shorter, so that length isn't set at 5

const words = [
  "apple",
  "turkey",
  "Antartica",
  "Kalafraqicexpallodotious",
];

const createLengthTest = minLength =>
  word => word.length > minLength;

const longWords = words.filter(createLengthTest(5));

console.log(longWords);
