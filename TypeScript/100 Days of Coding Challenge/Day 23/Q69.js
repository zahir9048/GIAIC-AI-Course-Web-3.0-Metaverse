function findRemainderAndQuotient(values) {
    var remainder = values.dividend % values.divisor;
    var quotient = Math.floor(values.dividend / values.divisor);
    return { quotient: quotient, remainder: remainder };
}
var dividend = 5;
var divisor = 2;
console.log("Dividend: " + dividend + " Divisor: " + divisor);
console.log(findRemainderAndQuotient({ dividend: dividend, divisor: divisor }));
