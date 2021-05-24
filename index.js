console.log("Convert an Array")

// Take this and list name with number of votes

const electionVotes = [
  'Harry', 'Rick', 'Ben', 'Ben', 'Harry', 'Ashley',
  'Connor', 'Rick', 'Ashley', 'Rick', 'Albert', 'Michael', 'Albert', 'Karen', 'Dane', 'Donna', 'Mortimer'
];

// reduce it down to a value for each name
// sum the number of times a name is used

// Ternary operator conditions are 
// ? exprIfTrue 
// : exprIfFalse

const tallyVotes = votes => {
  return votes.reduce((acc, name) => ({
    ...acc,
    [name]: acc[name] ? acc[name] + 1 : 1, // increment the acc/accumulator by one if true ? and if false : then don't
  }), {}); // expected output is an object (name) so we want {} to hold the name
};

console.log(tallyVotes(electionVotes));

