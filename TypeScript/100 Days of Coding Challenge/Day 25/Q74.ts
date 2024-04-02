let a: number = 5;
let b: number = 10;

function swapNumbers(a: number, b: number): number[] {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}
console.log(`Initial values before swapping: a: ${a} and b: ${b}`);
[a, b] = swapNumbers(a, b);
console.log(`Updated values after swapping: a: ${a} and b: ${b}`);
