console.log("Higher Order Functions")
// flexibility and reusability

// to check arguments and meet certain criteria

// single responsibility priciple, each piece of code should only have one responsibility, but the below checks for the zero AND creates a divide function. This is a sign we should refactor.

// const divide = (x, y) => {
//   if (y === 0) {
//     console.log("Error: dividing by zero");
//     return null;
//   }

//   return x / y;
// }

// Using highter order functions we can improve the code:

// create a new function on line 30

const divide = (x, y) => x / y;

const secondArgumentIsntZero = func =>
  (...args) => {
    if (args[1] === 0) {  // recall args[1] = y
      console.log("Error: dividing by zero");
      return null;
    }
    return func(...args);
  }

  // to use it, create a new variable
  const divideSafe = secondArgumentIsntZero(divide);

  console.log(divideSafe(7, 7));
  console.log(divideSafe(7, 0));