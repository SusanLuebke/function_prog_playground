console.log("Reduce Function")
// Reduces an array of data into a single value; like a sum or an average
// acc = accumulator, 0 is starting value
// const sum = myArray.reduce((acc, element) => 
// acc + element + 0)

// EXAMPLE:

const numbers = [ 5, 7, 2, 40, 23, 14, 8, 4, 11];

// const sum = numbers.reduce((acc, x) => {
//   console.log(`acc is ${acc}`); // the sum of the 2 numbers
//   console.log(`x is ${x}`); // the number given

//   return acc + x
// }, 0)

// console.log(sum);

// To multiply need to change first number to 1, otherwise it is always 0 * x which equals 0.
const product = numbers.reduce((acc, x) => {
  console.log(`acc is ${acc}`); // the sum of the 2 numbers
  console.log(`x is ${x}`); // the number given

  return acc * x
}, 1)

console.log(product);