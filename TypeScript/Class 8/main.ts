// Defining a basic object in TypeScript
let person1: {
  name: string;
  age: number;
  address: string;
  children: { name: string; age: number };
} = {
  name: "Zahir Khan",
  age: 23,
  address: "123 ABC street",
  children: {
    name: "khan",
    age: 5,
  },
};

let person2: {
  name: string;
  age: number;
  address: string;
  children: { name: string; age: number };
} = {
  name: "Zahir Khan",
  age: 23,
  address: "123 ABC street",
  children: {
    name: "khan",
    age: 5,
  },
};

//type alias

type userType = {
  name: string;
  age: number;
  address: string;
  children: {
    name: string;
    age: number;
  };
};

let user1: userType = {
  name: "zahir",
  age: 23,
  address: "123 ABC street",
  children: {
    name: "khan",
    age: 5,
  },
};

let user2: userType = {
  name: "asim",
  age: 23,
  address: "123 ABC street",
  children: {
    name: "khan",
    age: 5,
  },
};

// console.log(user1.name);
// console.log(user2.name);

//type literal

// let trafficLight: "red" | "green" | "blue" ;
// trafficLight = "red";
// trafficLight = "green";
// trafficLight = "blue"; //valid
// trafficLight = "purple"; //not valid

// console.log(trafficLight);

// type union

// let mixedBag: string | number;
// mixedBag = 30;
// mixedBag = "Sunscreen";

// console.log(mixedBag)

//type intersection

type Student = {
  name: string;
  rollNumber: number;
};
type Teacher = {
  name: string;
  exp: number;
};

let both: Student & Teacher = {
  name: "Zahir",
  exp: 1,
  rollNumber: 121,
};

console.log(both.exp);
console.log(both.rollNumber);
