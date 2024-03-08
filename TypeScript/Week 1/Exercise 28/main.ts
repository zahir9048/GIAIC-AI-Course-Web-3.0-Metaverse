//Exercise 28
console.log("\nExercise 28");

let age: number = 30;
console.log("Age: " + age);

if (age < 2) {
    console.log("You are a baby.");
} else if (age < 4) {
    console.log("You are a toddler.");
} else if (age < 13) {
    console.log("You are a kid.");
} else if (age < 20) {
    console.log("You are a teenager.");
} else if (age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are an elder.");
}