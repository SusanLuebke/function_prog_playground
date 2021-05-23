console.log("Currying and Partial Applications")
// when we fix some of the arguments to a set value so they can be called again
// good if there is a set value that is reused frequently

const add = (x, y, z) => x + y + z;

// const addPartial = x =>
//   (y, z) => add(x, y, z);

// const add5 = addPartial(5); // this defines x as 5
// const sum = add5(6, 7);

// console.log(sum);

// We can also set x and y

// const addPartial = (x, y) =>
//   z => add(x, y, z);

// const add5and6 = addPartial(5, 6); // this defines x as 5
// const sum = add5and6(7);

// console.log(sum);

// Or we can pass in arguments one at a time. This is called currying

// const addPartial = x =>
//   y => 
//     z => add(x, y, z);

// const add5 = addPartial(5);
// const add5and6 = add5(6);
// const sum = add5and6(7);

// console.log(sum);

// Or we could even shorten it further with this:

const addPartial = x =>
  y => 
    z => add(x, y, z);

const sum = addPartial(5)(6)(7);

console.log(sum);