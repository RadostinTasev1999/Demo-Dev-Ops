class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  }
}

// Example usage:
const user = new Person("Alex", 30);
console.log(user.greet());
