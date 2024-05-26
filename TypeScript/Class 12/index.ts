

// null

// let v = null;

// // v = 4;
// console.log(v);



// let c:null = null;

// let d:number = 0;



// Null data type

// console.log(a);


// console.log(a);


// let a:null|number = null;



// let sum:number = 0;

// a = 10;

// if(a!=null){
//     sum = 10 + a; 
// }
// console.log(sum);


// // // we can also use null as a datatype
// // // if you want to set a variable intentionally empty : use null
// function divide(a:number, b:number){
//     if(b==0){
//         return null; // function stops here
//     }
//     let answer = 0;
//     answer = a/b;
//     return answer;
// }

// let ans = divide(14,2);


// if(ans==null){
//     console.log("Error");
// }
// else{
//     console.log(ans);
// }





// // Type Narrowing in TypeScript 
// let pass: string|number; // (it doesnt change the original datatype)

// // //implementing narrowing
// pass = "zahir";

// console.log(typeof(pass));


// pass = 123;

// console.log(typeof(pass));





// let newAge = Math.random() > 0.6 ? "Khan" : 60;//ternary operator


// interface MyObject {
//     name: string;
//     age: number;
//     [key: string]: any; // index signature to allow additional properties
// }

// let obj: MyObject = {
//     name: "abc",
//     age: 12
// };

// obj.newProperty = "newValue";
// obj.newProperty2 = "newValue2";
// console.log(obj);





// Output: { name: 'abc', age: 12, newProperty: 'newValue' }











// // narrowing
// if(typeof newAge === "string"){

//     console.log(newAge.toUpperCase()); // type: string

// }
// else if(typeof newAge === "number"){

//     console.log(newAge.toFixed(2)); // type: number
// }


// Interface and Structural Typing

// type Person2 = { // complex types ki renaming types 
//     name: string;
//     age: number;
//     gender: string;
// }


// interface Person{ //object structure
//     name: string;
//     age: number;
//     gender: string;
// }

// let person:Person  = {
//     name: "salman",
//     gender: "male",
//     age: 16
    
// } 

// console.log(person.age)





// interface Deal1{
//     drink: string,

    
// }

// interface Deal2{
//     food: string,
//     drink: string
// }


// let wahidOrder: Deal1 = {
//     drink: "cola"
// }

// let tahaOrder: Deal2 = {
//     drink: "cola",
//     food: "burger"
// }

// let wahidTable:Deal1 = tahaOrder  // stale object case (if we pass old object with extra properties, it will not give error)


// let wahidTableFresh:Deal1 = {
//     drink: "cola",
//     food: "burger"
// }



// let tahaTable:Deal2 = wahidOrder












