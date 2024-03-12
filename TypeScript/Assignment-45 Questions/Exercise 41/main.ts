//Exercise 41
console.log("\nExercise 41");

function show_magicians(magician_names: string[]) {
    console.log("Magicians: ");
    for (let i = 0; i < magician_names.length; i++) {
        console.log(magician_names[i]);
    }
}

const magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Harry Potter"];

show_magicians(magicians);
