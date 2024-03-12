//Exercise 23
console.log("\nExercise 23");
console.log("Conditional Tests\n");

let car = 'subaru';

if (car == 'subaru') {        // as car variable is storing subaru, this condition will be true
    console.log("Prediction: true.  Car is subaru");
}
else {
    console.log("Prediction: false. Car is not subaru");
}

let car2 = 'civic';

if (car2 == 'subaru') {        // as car variable is storing civic, this condition will not be true
    console.log("Prediction: true.  Car is subaru");
}
else {
    console.log("Prediction: false. Car is not subaru");
}


let fruit = 'grapes';

if (fruit == 'grapes') {        // as car variable is storing civic, this condition will not be true
    console.log("Prediction: true. Fruit is", fruit);
}
else {
    console.log("Prediction: false. Fruit is", fruit);
}

let city = 'karachi';

if (city == 'islamabad') {        // as car variable is storing civic, this condition will not be true
    console.log("Prediction: false. City is", city);
}
else if (city == 'karachi') {
    console.log("Prediction: true. City is", city);
}
else {
    console.log("Prediction: false. City is", city);
}




