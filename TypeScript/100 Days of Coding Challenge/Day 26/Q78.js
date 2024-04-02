// Function declaration
function squareDeclaration(number) {
    return number * number;
}
// Function expression
var squareExpression = function (number) {
    return number * number;
};
console.log(squareDeclaration(4));
console.log(squareExpression(5));
