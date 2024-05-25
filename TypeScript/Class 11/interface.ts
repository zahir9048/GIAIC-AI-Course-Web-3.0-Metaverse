// interface Person {
//     name: string;
//     age: number;
//     greet(): void;
// }



// const person: Person = {
//     name: "Alice",
//     age: 30,
//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// };

// console.log(person.name);
// console.log(person.age);

// person.greet(); // Output: Hello, my name is Alice and I am 30 years old.





// interface Calculator {
//     add(a: number, b: number): number;
//     subtract(a: number, b: number): number;
// }

// const calculator: Calculator = {
//     add(a, b) {
//         return a;
//     },
//     subtract(a, b) {
//         return a - b;
//     }
// };

// console.log(calculator.add(10, 5));       // Output: 15
// // console.log(calculator.subtract(10, 5)); 










// interface Car {
//     brand: string;
//     model: string;
//     year?: number; // Optional property
// }

// const car1: Car = {
//     brand: "Toyota",
//     model: "Corolla"
// };


// const car2: Car = {
//     brand: "Honda",
//     model: "City",
//     year: 2003
// };






interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal{
    breed: string;
    bark(): void;
}

const myDog: Dog = {
    name: "Buddy",
    age: 3,
    breed: "Golden Retriever",
    bark() {
        console.log("Woof! Woof!");
    }
};

console.log(myDog.name); // Output: Buddy
myDog.bark();