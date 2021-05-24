console.log("Functions as Objects")

// Functions have properties, 
// 1. .Name: like the name of the function 
// 2. .Length of the function (the number of arguments)
// 3. toString() - the words in the function
// 4. Call() - calls the function - RARE!
// 5. Apply() - similar to call by returns array - RARE!
// 6. Bind() - can use to fix values, the easy way!

// Examples 
// Using call(), first argument is a "this" so will typically be null

const add = (x, y, z) => x + y + z;
console.log(add.call(null, 1, 2, 3));

// above is the same as...
console.log(add(1, 2, 3));

// apply() is similar to call, but passes arguments as an array
console.log(add.apply(null, [1, 2, 3]))

// HOWEVER! IT IS EASER TO USE spread operators, ...args

// const args = [1, 2, 3];
// console.log(add(...args));

// Using bind() to fix a values
//const add = (x, y, z) => x + y + z;
const args = [1, 2, 3];
const add1 = add.bind(null, 1);
console.log(add1(2, 3));