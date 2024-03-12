//Exercise 42
console.log("\nExercise 42");
function show_magicians(magician_names) {
    for (var i = 0; i < magician_names.length; i++) {
        console.log(magician_names[i]);
    }
}
function make_great(magician_names) {
    for (var i = 0; i < magician_names.length; i++) {
        magician_names[i] = "The Great " + magician_names[i];
    }
}
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Harry Potter"];
console.log("Original Magicians: ");
show_magicians(magicians);
make_great(magicians);
console.log("\nMoodified Magicians: ");
show_magicians(magicians);
