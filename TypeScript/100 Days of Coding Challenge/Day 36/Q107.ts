function isDivisibleByTwoAndThree(number: number): boolean {
  return number % 2 === 0 && number % 3 === 0;
}

console.log(isDivisibleByTwoAndThree(12));
console.log(isDivisibleByTwoAndThree(14));
