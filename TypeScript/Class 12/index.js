// null
var obj = {
    name: "abc",
    age: 12
};
obj.newProperty = "newValue";
obj.newProperty2 = "newValue2";
console.log(obj);
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
