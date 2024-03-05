//Exercise 20
console.log("\nExercise 20");

let j;
let languages: string[] = ["Urdu", "Punjabi", "Sindhi", "Pushto", "Balochi", "English"];

console.log("Languages spoken in Pakistan are: ");

for (let i = 0; i < languages.length; i++) { // using for loop for printing the array
    j = i;   //j variable is used to display counter for numbe rof languages
    console.log(++j, languages[i]);  //increasing j value by 1 in each iteration
}
