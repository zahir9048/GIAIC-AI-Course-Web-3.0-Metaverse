// let, var, const
// block scope = let and const
// function scope = var scope
//use const where variable values do not change
var h = "bye"; //not same
function func1() {
    var h = "hello";
    console.log(h);
}
func1();
console.log(h);
var a = 5;
var b = 33;
var c = "best";
//I suggest use let instead of var everywhere,
//becuase let has blocked scope
if (true) {
    var z = 4;
    //use z
}
else {
    var z = "string";
    //use z
}
// console.log("let: " + z);
