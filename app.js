class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}
class Person extends AgedPerson {
  name = "max";

  constructor() {
    super();
    this.age = 12;
  }

  greet() {
    console.log("hi i am" + this.name + "adn i am" + this.age + "years old");
  }
}

// function Person() {
//   this.age = 12;
//   this.name = "max";
//   this.greet = function () {
//     console.log(
//       "hi i am " + this.name + " and i am " + this.age + " years old"
//     );
//   };
// }

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };
Person.prototype.printAge = function () {
  console.log(this.age);
};

const p = new Person();

p.greet();
p.printAge();
console.log(p.__proto__);
console.log(p.toString());

console.dir(Object);
