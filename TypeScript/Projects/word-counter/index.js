import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence: "
    }
]);
// console.log(answer.sentence);
let words = answer.sentence.trim().split(" ");
// console.log(words);
console.log(`No of words: ${words.length}`);
