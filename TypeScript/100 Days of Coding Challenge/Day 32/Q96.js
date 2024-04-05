function calculateSum(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
var Numbers = [1, 2, 3, 4, 5];
console.log(calculateSum(Numbers));
