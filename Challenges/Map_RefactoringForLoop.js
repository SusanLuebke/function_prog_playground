console.log("Challenges - Map/reduce instead of For Loop")

// Using old loop method from procedural programming

// const map = (arr, func) => {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     const result = func(arr[i]);
//     newArray.push(result);
//   }
//   return newArray;
// }

// Using map/reduce function
const map = (arr, func) => 
  arr.reduce((acc, x) => [ // call reduce on array
    ...acc, // accumulator, all the elements so far
    func(x), // result when we call the new func
  ], []
  ); // starting value is an empty array






// Testing results

// console.log(map([1, 2, 3], x => x * 2));

// console.log(map([5, 6, 7, 8, 9, 10], x => -x));

// console.log(map(['a', 'b', 'c', 'd'], x => x.toUpperCase()));
