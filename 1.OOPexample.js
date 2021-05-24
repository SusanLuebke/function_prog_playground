console.log("This is the Normal Class Way")

class person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }

  getOlder() {
    this.age += 1;
  }

  changeName() {
    this.name = newName;
  }
}