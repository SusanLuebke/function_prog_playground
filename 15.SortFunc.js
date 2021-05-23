console.log("Sort Function")
// use to change order of an array
// MUTATES!!! SO USE SLICE
// myArray.slice().sort();
// takes 2 arguments instead of 1

// THEORY:
// const sortedNumbers = numbers.slice().sort((a, b)) => {
//   //...
//   return -1; // a should come before before
//   //...
//   return 1: // b should come before a
//   //...
//   return 0: // leave elements in whatever order found
// });

// EXAMPLE: Sorting mixed numbers

const mixedNumbers = [1, 3, 5, 2, 6, 9, 7, 10];

const ascending = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}
  const descending = (a, b) => {
  if (a > b) return -1; // seitched from the above!
  if (a < b) return 1;
  return 0;
}
const orderedNumbers = mixedNumbers.slice().sort(descending);

console.log(orderedNumbers);