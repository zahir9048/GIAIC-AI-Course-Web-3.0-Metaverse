var _a;
var a = 5;
var b = 10;
function swapNumbers(a, b) {
    var temp = a;
    a = b;
    b = temp;
    return [a, b];
}
console.log("Initial values before swapping: a: ".concat(a, " and b: ").concat(b));
_a = swapNumbers(a, b), a = _a[0], b = _a[1];
console.log("Updated values after swapping: a: ".concat(a, " and b: ").concat(b));
