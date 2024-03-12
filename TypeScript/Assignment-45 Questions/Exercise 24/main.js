//Exercise 24
console.log("\nExercise 24");
console.log("Conditional Tests\n");
// String Equality & Inequality test
console.log("\n1. String Equality & Inequality test: ");
var s = "Zahir";
console.log("s = " + s);
if (s == "Zahir") {
    console.log("s is equal to Zahir");
}
else if (s != "Zahir") {
    console.log("s is not equal to Zahir");
}
// test string using lowercase function
console.log("\n2. Test string using lowercase function: ");
var s2 = "HELLO";
console.log("\ns2 = " + s2);
if (s2 == "hello") {
    console.log("s2 is equal to hello.");
}
else if (s2.toLowerCase() == "hello") {
    console.log("s2.toLowerCase() is equal to hello.");
}
else {
    console.log("s2 is not equal to hello.");
}
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\n3. Numerical tests: ");
var num1 = 10;
var num2 = 7;
var num3 = 10;
//Equality test
if (num1 == num2) {
    console.log(num1, "=", num2);
}
if (num2 == num3) {
    console.log(num2, "=", num3);
}
if (num1 == num3) {
    console.log(num1, "=", num3);
}
//Inequality test
if (num1 != num2) {
    console.log(num1, "is not equal to", num2);
}
if (num2 != num3) {
    console.log(num2, "is not equal to", num3);
}
if (num1 != num3) {
    console.log(num1, "is not equal to", num3);
}
// Greater than or less than equal to
if (num1 >= num2) {
    console.log(num1, "is greater than or equal to", num2);
}
else if (num1 <= num2) {
    console.log(num1, "is smaller than or equal to", num2);
}
if (num2 >= num3) {
    console.log(num2, "is greater than or equal to", num3);
}
else if (num2 <= num3) {
    console.log(num2, "is smaller than or equal to", num3);
}
if (num1 >= num3) {
    console.log(num1, "is greater than or equal to", num3);
}
else if (num1 <= num3) {
    console.log(num1, "is smaller than or equal to", num3);
}
//AND OR operators
console.log("\n4. AND OR Operators test: ");
var value1 = true;
var value2 = false;
// AND operator
if (value1 && value2) {
    console.log(value1 && value2); //AND operation means multiplying two values: TRUE (AND) FALSE = FALSE
}
else {
    console.log("Answer of AND operation is: ", value1 && value2);
}
// OR operator
if (value1 || value2) {
    console.log("Answer of OR operation is: ", value1 || value2); //OR operation means adding two values: TRUE (OR) FALSE = TRUE
}
else {
    console.log("Answer of OR operation is: ", value1 || value2);
}
//Test whether an Item is in array or not
console.log("\n5. Element is in array or not: ");
var array1 = [5, 6, 7];
var num = 6;
if (array1.indexOf(num) != -1) {
    console.log(num + " is present in the array.");
}
else if (array1.indexOf(num) == -1) {
    console.log(num + " is not present in the array.");
}
