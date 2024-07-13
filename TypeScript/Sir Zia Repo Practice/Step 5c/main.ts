
//step 5c
// interface Ball {
//     diameter: number;
// }

// interface Sphere {
//     diameter: number
// }
  


//   let ball: Ball = { diameter: 10};


//   let sphere: Sphere = { diameter: 20};
  

//   sphere = ball; // No error

//   ball = sphere;
  



//   // If we add in a type which structurally contains all of
//   // the members of Ball and Sphere, then it also can be
//   // set to be a ball or sphere.
  
//   interface Tube {
//     diameter: number;
//     length: number;
//   }
  
//   let tube: Tube = { diameter: 12, length: 3 };
  
// //   tube = ball;//Error
//   ball = tube;


let  myType = { name: "Zia", id: 1};


//Case 1
myType = { id: 2,  name: "Tom" };//Case 1: can only assign a type which has the the same properties
									//Object literals can only have properties that exist in contextual type


                              
//Case 2a
// myType = { id: 2,  name_person: "Tom" };//Case 2a: Error, renamed or missing property


//Case 2b 
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string

x = { id: 1, fname: "Zia", lname: "khan" };  // Ok, `fullname` matched by index signature





//Case 3
// myType = { id: 2,  name: "Tom", age: 22 };//Case 3: Error, excess property



//=================================================


//Case when STALE object literal are assigned to a variable 

let myType2 = { id: 2,  name: "Tom" };


//Case 1
myType = myType2; //Case 1: can only assign a type which has the the same properties, rule same for fresh and stale object


let myType3 = { id: 2,  name_person: "Tom" };


//Case 2a
// myType = myType3;//Case 2: Error, renamed or missing property, rule same for stale and fresh object 


//Case 2b
//A type can include an index signature to explicitly indicate that excess properties are permitted in with fresh objects:

var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string
var y = { id: 1, fullname: "Zia" };
x = y;// Ok, `fullname` matched by index signature


var myType4 = { id: 2,  name: "Tom", age: 22 };

//Case 3
myType = myType4; // stale = old

// myType = { id: 2,  name: "Tom", age: 22 }; // fresh = new
