console.log("Functions as Arguments")

// x, y are Arguments

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

// add(2, 3);
// subtract(9, 2);

const fixedNumbers = func =>
  func(2, 3);

 fixedNumbers(add); // equals 5
 fixedNumbers(subtract); // equals -1
 fixedNumbers(Math.max); // equals 3, the larger of the 2 no.

 // can create anonoymous functions too

 fixedNumbers(add); // equals 5
 // becomes...
 fixedNumbers((x,y) => x + y); // equals 5

