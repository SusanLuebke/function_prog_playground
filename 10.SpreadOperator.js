console.log("The Spread Operator")

// Spread Operator can also be used on arrays, instead of the push method!

// Original way
// const numbers = [1, 2, 3, 4, 5];
//   numbers.push[6];

// new way...
const numbers = [1, 2, 3, 4, 5];
  const newNumbers = [ // create new variable
    0,
    ...numbers, // pull my Original array
    6, 7, // tell it a new value
  ];

  console.log(newNumbers);