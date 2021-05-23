console.log("Recursion")

// a function that calls itself; beware of infinite loops, but can be handy in certain situations
// In Recursion have to set a stop point!

// Behaves like a for loop but doesn't use a for loop

// const countDown = x => {
//   if (x < 0) return; // this stops the loop
//   console.log(x);
//   countDown(x - 1);
// }

// countDown(10);

// Count up instead

const countUp = (x, max) => { // x is start, max is end
  if (x > max) return; // this stops the loop
  console.log(x);
  countUp(x + 1, max);
}

countUp(0, 20);