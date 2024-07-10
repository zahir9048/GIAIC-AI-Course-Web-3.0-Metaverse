
// // ############   Type literal  ###########
// let s: "hello" | "bye" | 55 | true;  //declare

// s = "hello"; // assign
// console.log(s);
// s = "bye";
// console.log(s);
// s = 55;
// console.log(s);

// s=false;






// // ############  Type Union  ###########

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



// #########  Type Narrowing  ###########
// let myAge: string | number; // type union

// myAge = 16.345546; // type narrowing
// console.log(myAge);



// console.log(myAge.toLowerCase());//Error




// myAge = "Dont Know";//narrowing
// console.log(myAge);

// console.log(myAge.toString()); // common to both types 
//                                //can be called even without narrowing

// console.log(myAge.toLowerCase());//Can be called on string 
                                //because of narrowing





// //ternary operator            
// let newAge = Math.random() > 0.6 ? "Khan": 60;

// // newAge.toLowerCase();//Error: Transpiler cannot narrow


// if (newAge === "Khan") {
//     // Type of newAge: string
//     newAge.toUpperCase(); // Can be called
// }
// if(typeof newAge === "string"){
//     // Type of newAge: string
//     newAge.toUpperCase(); // Can be called
// }
// else if (typeof newAge === "number"){
//     newAge.toFixed(); 
// }



// // ternary op
// typeof newAge === "string"
// ? newAge.toUpperCase() // Ok: string
// : newAge.toFixed(); // Ok: number





// // ########   type union and type literal mixture  #######

// let age: number | "died" | "unknown" ;

// age = 45;//OK
// age = "died";//OK
// age = "unknown";//OK
// // age = "living";//Error




// ####### Again Type Narrowing ########
// let zia: "zia";

// zia = "zia";
// //zia = "khan";//Error


// let yourName = Math.random() > 0.6 ? "Hira Khan": undefined;

// if (yourName) {
//     yourName.toUpperCase(); // Ok: string
// }

// // yourName.toUpperCase();//Error: Object is possibly 'undefined'.


// yourName?.toUpperCase();// OK



// ########### type alias ############

// type t = string | number;

// let h : t;


// type RawData = false | 65 | string | null | undefined;

// let data: RawData;


// You can even combine them

// type Id = number | string;


// type IdMaybe = number | string | undefined | null;
// type IdMaybe = Id | undefined | null;
