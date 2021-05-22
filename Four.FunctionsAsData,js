console.log("First Class Functional Programming")
// First class functions are functions as data

const sayHello = () => console.log("Hello");

const sayHello2 = sayHello
sayHello2();

// add argument

// const sayHello = name => console.log("Hello " + name);

const sayHello2 = sayHello
sayHello2("Susan");

// Mock out versiont, using terniary. Use for time intensive operations

const myFunction = true
  ? () => console.log("first option, true");
  : () => console.log("second option, false")

// Example

const DEVELOPMENT = true;

const fetchDataReal = () => {
  // time intensive operations here
}

// mock out data
// don't forget the parens otherwise it looks like function function!

const fetchDataFake = () => ({
  name: "Susan",
  age: "Oh hell no!",
});

// this is where we use terniary to determine which one to fetch

const fetchData = DEVELOPMENT
  ? fetchDataFake // if true
  : fetchDataReal; // if false
