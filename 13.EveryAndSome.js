console.log("Every and Some")
// Similar to filter in that we pass through the function something that is true or false, here it returns only a single boolean: true or false.
// With EVERY true only if true for every item in the array
// With SOME true if some are true
// numbers.every(isOdd);
// to test if isn't true for any of the numbers can use the not operator !numbers.some(isOdd);

// const employees = [{
//   name: "Susan Luebke",
//   bonus: 120000,
// }, {
//   name: "Brett Johnston",
//   bonus: 100000,
// }];

// const makesBonusMoreThan100K = employee => 
//   employee.bonus > 100000;

// const result = employees.some(makesBonusMoreThan100K);


// console.log(result);

// EXAMPLE 2: HAS USER FILLED OUT ALL FIELDS?

const formFields = [
  'Susan',
  'Luebke',
  'London',
  '',
];
// returns a falsy, i.e. missing a string
const isNotEmpty = string => !!string;

const allFieldsFilled = formFields.every(isNotEmpty)

console.log(allFieldsFilled);