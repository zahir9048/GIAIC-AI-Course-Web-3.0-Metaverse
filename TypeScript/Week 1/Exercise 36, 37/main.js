//Exercise 36
console.log("\nExercise 36");
function make_shirt(size, message) {
    console.log("T-shirt size: " + size + " \nMessage on T-shirt: " + message);
}
var size = "medium";
var message = "Hi , I am Zahir.";
make_shirt(size, message);
//Exercise 37
console.log("\nExercise 37");
function make_Shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("The size of the shirt is:", size, "and the messsage on the shirt is:", message + ".");
}
make_Shirt();
make_Shirt("medium");
make_Shirt("Very Large", "My name is Zahir");
