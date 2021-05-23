console.log("Closure of a Function")

// that subsequent functions can still call the variable

const createPrinter = () => {
  const myFavoriteNumber = 31;

  return() =>
    console.log(`My favorite number is ${myFavoriteNumber}`);
}

const printer = createPrinter();
printer();

// this doesn't work because you have to call the function within the function; createPrinter func -> printer func
// console.log(myFavoriteNumber);








 