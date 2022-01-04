"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old`);
    }
}
const p = new Person('ratu', 17);
p.greet();
console.log(p.name);
