console.log("Functions as Another Function")

 // returning another function; a "function factory"

// const createPrinter = () => () => console.log("hello")

// the above is really this below in longhand. That's why there are two function arrows above

// const createPrinter = function() {
//   return function() {
//     console.log("hello");
//   }
// }

// More practical example

// const double = x => x * 2;
// const triple = x => x * 3;
// const quadruple = x => x * 4;

// a sign that refactoring would be good, is duplication in code like above

// takes a number as argument, y, and has another function that takes a number as an argument and then the original mathematical "action" i.e. to multiply
const createMultiplier = y => x => x * y;

// the code in 17-19 becomes
const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

double(13)