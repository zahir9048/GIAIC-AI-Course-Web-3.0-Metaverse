// Defining a basic object in TypeScript
var person1 = {
    name: "Zahir Khan",
    age: 23,
    address: "123 ABC street",
    children: {
        name: "khan",
        age: 5
    }
};
var person2 = {
    name: "Zahir Khan",
    age: 23,
    address: "123 ABC street",
    children: {
        name: "khan",
        age: 5
    }
};
var user1 = {
    name: "zahir",
    age: 23,
    address: "123 ABC street",
    children: {
        name: "khan",
        age: 5
    }
};
var user2 = {
    name: "asim",
    age: 23,
    address: "123 ABC street",
    children: {
        name: "khan",
        age: 5
    }
};
// console.log(user1.name);
// console.log(user2.name);
//type literal
var trafficLight;
trafficLight = "red";
trafficLight = "green";
trafficLight = "blue"; //valid
// trafficLight = "purple"; //not valid
console.log(trafficLight);
// type union
// let mixedBag: string | number;
// mixedBag = 30;
// mixedBag = "Sunscreen";
// console.log(mixedBag)
//type intersection
// type Student = {
//     name: string,
//     rollNumber: number
// };
// type Teacher = {
//     name: string,
//     exp: number
// };
// let both:  Teacher & Student  = {
//     name: "Zahir",
//     exp: 1,
//     rollNumber: 121
// };
// console.log(both.exp);
