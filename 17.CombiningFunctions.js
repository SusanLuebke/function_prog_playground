console.log("Combining Functions")

const employees = [{
  name: "John James",
  age: 55,
  jobTitle: "developer",
  salary: 70000,
}, {
  name: "Karen Lopez",
  age: 45,
  jobTitle: "techie",
  salary: 90000,
}];

// separate the developers from the nondevelopers
const developers = employees.filter(employee => 
  employee.jobTitle === "developer");

  // test; always call the most recent variable!
// console.log(developers);

// next we'll use map to only see the salary information

const developerSalaries = developers.map(developer => developer.salary);

// determine the average salary, so need to reduce to the sum.

const totalDeveloperSalaries = developerSalaries.reduce((acc, x) => acc + x, 0);

const averageDeveloperSalaries = totalDeveloperSalaries / developerSalaries.length;

console.log(averageDeveloperSalaries);

// Now find average salary of nondevelopers

const nonDevelopers = employees.filter(employee => 
  employee.jobTitle != "developer");
console.log(nonDevelopers);

const nonDeveloperSalaries = nonDevelopers.map(nondeveloper => nondeveloper.salary);
console.log(nonDeveloperSalaries);

const totalNonDeveloperSalaries = nonDeveloperSalaries.reduce((acc, x) => acc + x, 0);
console.log(totalNonDeveloperSalaries);

const averageNonDeveloperSalaries = totalNonDeveloperSalaries / nonDeveloperSalaries.length;
console.log(averageNonDeveloperSalaries);