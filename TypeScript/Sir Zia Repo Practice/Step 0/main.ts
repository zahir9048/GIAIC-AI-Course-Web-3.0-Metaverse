// let message = "5";// Infering Types, 
//                             //take your cursor on the variable name
// console.log(message);



// JSON object


const detail = { "name": "zahir", "age": 21 }

console.log(detail.name); 
console.log(detail["age"]); 



// Error types: 


// 1) Syntax Error:

// typescript keywords: let, for, function, const, var, type, interface, class, new
// error in spelling of these keywords or error in brackets causes syntax error

// lett message = "Hello World";// syntax error
// console.log(message);


// 2) Type Error:
// error when method, function, or variable is not declared but called

// function func1(){

// }

// func2(); type error

// let message = "Hello World";
// console.loger(message); //type error



// 3) Assignability Error:
// error when we try to assign different data type to already assigned variable of another data type.

// let message = "Hello World";
// message = 5; // assignability error
// console.log(message);