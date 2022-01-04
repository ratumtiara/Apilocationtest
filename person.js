var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, ", I'm ").concat(this.age, " years old"));
    };
    return Person;
}());
var p = new Person('ratu', 17);
p.greet();
console.log(p.name);
