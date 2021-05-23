console.log("Function as Private")

// The ironic use of private variables; typically done with an underscore before the name

const Person = ({ name, age, job}) => {
  var _name = name;
  var _age = age;
  var _job = job;

// use a getter to pull the data
  return {
    getName: () => _name,
    getAge: () => _age,
    getJob: () => _job,

    // the setters
    // the newJob function is _job, set to now equal newJob
    setJob: newJob => _job = newJob,
    setAge: newAge => _age = newAge,
  };
}

const me = Person({ name: "Susan", age: "Oh hell no", job: "software engineer"});
console.log(me.getName()); // this is the only way to access getName

console.log(me.getJob()); // gives original _job
me.setJob("employed!");
console.log(me.getJob()); // now prints updated
me.setAge("Still oh hell no");
console.log(me.getAge());