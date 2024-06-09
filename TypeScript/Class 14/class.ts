// class House{
//     numberOfDoors: number;
//     // houseNumber!: number;
//     readonly houseNumber: number;
//     ownerName: string;
//     ownerCNIC: number;

//     constructor(name:string, doors:number, number:number, NIC: number){
//         this.ownerName = name;
//         this.numberOfDoors = doors;
//         this.houseNumber = number;
//         this.ownerCNIC = NIC;
//     }
// }

// let h1 = new House("Zahir", 5, 3,  56546546);
// let h2 = new House("Ramish", 6, 4, 56565656);
// // let h2 = new House("");

// // // Date is a class
// // h2.houseNumber = 54321;
// // // h2.ownerCNIC = 54321; //cannot change NIC number
// // console.log(h1);
// // console.log(h2.ownerCNIC);

// // console.log(h2);
// // console.log(this);

// //Inheritence
// class Animal{ //parent class contains all common properties and methods

//     name: string;

//     constructor(name:string){
//         this.name = name;
//     }

//     walk(){ //common methods
//         console.log(this.name, "walking")
//     }
//     eat(){
//         console.log(this.name, "eating")
//     }
// }

// class Dog extends Animal{ //child class
//     wafadari: boolean;
//     // name: string;

//     // constructor(name:string){
//     //     this.name = name
//     // }

//     constructor(name:string, wafadari:boolean){
//         super(name);
//         this.wafadari = wafadari;
//     }

//     woof(){
//         console.log("woof woof")
//     }
//     // woof(){
//     //     console.log(this.name+" wooooof woooooof")
//     // }
// }


// class Cat extends Animal{ //child class

//     meow(){
//         console.log("meow meow")
//     }
// }

// // let d1 = new Dog("tommy");
// // let d2 = new Dog("spike");
// let c1 = new Cat("cat1");
// let d3 = new Dog("tommy",true);
// console.log(d3);
// d3.eat();
// console.log(d3.name);

