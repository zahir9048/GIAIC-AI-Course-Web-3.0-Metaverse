

let num1: any = 12; //bad practice, this is not type safe
let num2: unknown = 100;  //good practice , type safe

//                          explicit typecasting
let result2:string = num2 as string; // gives no error

//                          explicit typecasting
let result3:string = <string> num2; // no error


console.log(result2);
console.log(typeof result2);



















//                       explicit type casting
// let result:number = num1 as number; // no error


// console.log(typeof result);
// console.log(result);


// let num1: unknown = "123";
// let result: number = Number(num1); // Proper conversion from string to number
// console.log(typeof result); // Outputs: "number"
// console.log(result); // Outputs: 123
