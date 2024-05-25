

// function invite(guest: string[]) {
//   console.log(guest);
// }

// // let friends:string[] = ["ali","ahmed"]; 
// // invite(ali, ahmed, zahir);










// // rest parameters 
// // function invite2(...guest: string[]) {
// //   console.log(guest.join(" | "));
// // }

// // invite2("ali", "hammad", "ramish","adil","zahir");






// // rest parameter is always last one
// // function invite3(host: string, ...guest: string[]) {
// //   console.log("host: ", host);
// //   console.log(guest + " you are invited to my party.");
// // }

// // invite3("ali", "ahmed", "ramish", "zahir", "adil");







// //function overload

// //signatures
// function func1(arg1: string, arg2: string): string;

// function func1(arg1:number, arg2:number):number;

// function func1(arg1:boolean, arg2:boolean):number;

// function func1(arg1:string, arg2:number):string;

// function func1(arg1:string, arg2:number, arg3:boolean):string;

// //main function
// function func1(arg1: any, arg2: any, arg3?: any) {
  
//   if (typeof arg1 === 'number' && typeof arg2 === 'number') {
//     return arg1 + arg2;
//   } 

// else if (typeof arg1 === 'string' && typeof arg2 === 'number' && typeof arg3 === 'boolean') {
//     return arg1 + arg2 + arg3;
// } 

// else if (typeof arg1 === 'boolean' && typeof arg2 === 'boolean' ) {
//     return arg1;
// }
// }
// //            res
// console.log(func1(2,3));
// console.log(func1("hello",3)); // number to string coersion
// console.log(func1("hello","there"));
// console.log(func1(true,false)); // 1 + 0
// console.log(func1("hello ",3, true));









// coersion arg1 - arg2 => number to string
// console.log(func1("2",3));
// console.log(func1("2","3"));
// console.log(func1("3","2"));
// console.log(func1("4","6"));
// console.log(func1(false,false));



// .toFixed() method

// let num5:string = "sjfksdgd";
// console.log(num5.);

//          01234
let var1 = "zahir";

//                Z                +      ahir
console.log(var1[0].toUpperCase() + var1.slice(1, 5));
