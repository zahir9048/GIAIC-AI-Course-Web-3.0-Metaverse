
//Homework slide 121: Different Operators
let a: number = 5; 
let b: number = 2;
let c: number;

//  6   + 6   + 1  +  1  +  7 +  0  + 1 = 22
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c); //22


//Homework slide 131: Calculate BMI Index
let weightInKg = 60;
let heightInMeter = 1.77;
let bmi = weightInKg / (heightInMeter^2);

console.log(bmi);




