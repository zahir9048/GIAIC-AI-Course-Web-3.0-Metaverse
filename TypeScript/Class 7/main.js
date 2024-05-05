import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "Q1",
        message: "Choose country: ",
        type: "list",
        choices: ["pakistan", "india", "bangladesh"]
    }
]);
console.log(`my name is ${answer.Q1}!`);
