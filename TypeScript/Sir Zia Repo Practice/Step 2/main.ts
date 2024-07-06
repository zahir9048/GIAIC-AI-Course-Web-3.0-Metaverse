// let, var &, const variables


// block scope = let and const
// function scope = var scope

// local variables and global variables


// case 1
let h = "bye"; //global variable
// let h = "bye"; // error: cannot reassign block scope variable
h = "goodbye"; // we can update let variables

if(true) { // body of if
    console.log(h); // output: bye (accessing globally)
}

console.log(h); // output: bye (accessing globally)


// case 2
let i = "bye"; // global variable

if(true) { // body of if
    let i = "hello"; //local variable (not global)
    console.log(i); // output: hello (local variable is printed)
}

console.log(i); // output: bye (global variable is printed)


//use const where variable values do not change

  const a = 5;
//      a = 7;  // error... we can not update const variables
  const b: number = 33;
  const c = "best";
  
//I suggest use let instead of var everywhere,
//becuase let has blocked scope


if (true) {
  let z = 4;
  console.log(z);
} else {
  let z = "string";
  console.log(z);
  
}
// console.log("let: " + z); // error 
