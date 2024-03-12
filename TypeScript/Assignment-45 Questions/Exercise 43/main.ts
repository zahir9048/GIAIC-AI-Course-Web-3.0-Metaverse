//Exercise 43
console.log("\nExercise 43");

function show_magicians(magician_names: string[]) {
    for (let i = 0; i < magician_names.length; i++) {
        console.log(magician_names[i]);
    }
}

function make_great(magician_names: string[]) {
    const modifiedArray = [];
    for (let i = 0; i < magician_names.length; i++) {
        modifiedArray[i] = "The Great " + magician_names[i];
    }
    return modifiedArray;
}

const originalMagiciansArray = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Harry Potter"];


console.log("Original Magicians:");
show_magicians(originalMagiciansArray);

const modifiedMagiciansArray = make_great(originalMagiciansArray);

console.log("\nModified Magicians:");
show_magicians(modifiedMagiciansArray);


console.log("\nOriginal Magicians (unchanged):");
show_magicians(originalMagiciansArray);



