class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    public greet() {
        console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old`);
    }
}

const p = new Person('ratu', 17)
p.greet()
console.log(p.name);
