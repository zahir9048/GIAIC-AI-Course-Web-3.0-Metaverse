// Function declaration
function squareDeclaration(number: number): number {
  return number * number;
}

// Function expression
const squareExpression = function (number: number): number {
  return number * number;
};

console.log(squareDeclaration(4));
console.log(squareExpression(5));
