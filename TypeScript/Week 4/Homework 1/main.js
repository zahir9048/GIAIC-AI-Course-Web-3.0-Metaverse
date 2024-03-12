var a = 5;
var b = 2;
var c;
//  6   + 6   + 1  +  1  +  7 +  0  + 1 = 22
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c); //22
var weightInKg = 60;
var heightInMeter = 1.77;
var bmi = weightInKg / (heightInMeter ^ 2);
console.log(bmi);
