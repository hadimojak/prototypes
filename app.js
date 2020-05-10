class Person {
  name = "max";
  constructor() {
    this.age = 12;
  }

  greet() {
    console.log("hi i am" + this.name + "adn i am" + this.age + "years old");
  }
}

const person = new Person();

person.greet();
