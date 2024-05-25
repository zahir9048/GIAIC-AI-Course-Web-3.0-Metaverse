var person = {
    name: "Alice",
    age: 30,
    greet: function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    }
};
console.log(person.name);
console.log(person.age);
person.greet(); // Output: Hello, my name is Alice and I am 30 years old.
var calculator = {
    add: function (a) {
        return a;
    },
    subtract: function (a, b) {
        return a - b;
    }
};
console.log(calculator.add(10, 5)); // Output: 15
var car1 = {
    brand: "Toyota",
    model: "Corolla"
};
var car2 = {
    brand: "Honda",
    model: "City",
    year: 2003
};
