//Exercise 36
console.log("\nExercise 36");


function make_shirt(size: string, message: string) {
    console.log("T-shirt size: " + size + " \nMessage on T-shirt: " + message);
}

let size: string = "medium";
let message: string = "Hi , I am Zahir.";


make_shirt(size, message);



//Exercise 37
console.log("\nExercise 37");

function make_Shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log("The size of the shirt is:", size, "and the messsage on the shirt is:", message + ".");
}
make_Shirt();
make_Shirt("medium");
make_Shirt("Very Large", "My name is Zahir");