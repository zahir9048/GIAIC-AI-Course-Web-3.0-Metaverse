//Note: All parameters are required
//Named function
// function add(x: number, y: number): number {
//     return x+y;
// }
// console.log(add(1, 3));
// //Anonymous function
// let myAdd1 = function(x: number, y: number): number { 
// 				return x+y; 
// };
// console.log(myAdd1(3, 5));
// //Anonymous function with explict type
// let myAdd2: (xyz:number, abc:number)=>number = 	function(x: number, y: number): number { 
// 												return x+y; 
// 											};
//type names dont matter
// let myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number { 
// 																return x+y; 
// 															};
// // Lambda functions (Arrow Function)		 													
// let myAdd4 = (a : number, b : number) => a + b; // short syntax
// output will be:
// var myAdd4 = function(a : number, b : number):number {return a + b};
// type GreetFunction = (a: string) => void;
// function greeter(fn: GreetFunction) {
// }
// callback function
function abc(fn) {
    console.log("inside abc func");
    fn();
}
function xyz() {
    console.log("inside xyz func");
}
abc(xyz);
export {};
