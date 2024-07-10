// Type literal
let s; //declare
// s = "hello"; // assign
// console.log(s);
// s = "bye";
// console.log(s);
// s = 55;
// console.log(s);
// s=false;
// Type Union
// let myname: string | null | number; // datatypes
// myname = null; // empty
// console.log(myname);
// myname = "zia";
// myname = "khan";
// myname = "cdfgdgdgdrg";
// console.log(myname);
// myname = true;
// myname = false;
// myname = undefined; //Error
// myname = 12355; //Error
let myAge; // type union
myAge = 16.345546; // type narrowing
console.log(myAge);
console.log(myAge.toFixed(0));
//console.log(myAge.toLowerCase());//Error
myAge = "Dont Know"; //narrowing
console.log(myAge);
console.log(myAge.toString()); // common to both types 
//can be called even without narrowing
console.log(myAge.toLowerCase()); //Can be called on string 
export {};
//because of narrowing
