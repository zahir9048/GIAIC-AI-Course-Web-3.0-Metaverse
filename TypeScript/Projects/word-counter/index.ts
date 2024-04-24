import inquirer from "inquirer";

let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence: "

    }
]);

let words:string[] = answer.sentence.trim().split(" ");
console.log(`No of words in your sentence: ${words.length}`);





