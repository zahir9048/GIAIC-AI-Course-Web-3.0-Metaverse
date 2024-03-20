#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Made By Zahir");
while (true) {
    const answer = await inquirer.prompt([
        { message: "Enter first number: ", type: "number", name: "firstNumber" },
        { message: "Enter second number: ", type: "number", name: "secondNumber" },
        {
            message: "Select any operator: ",
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "End Program"],
        },
    ]);
    if (answer.operator === "Addition") {
        console.log("Addition:", answer.firstNumber + answer.secondNumber);
    }
    else if (answer.operator === "Subtraction") {
        console.log("Subtraction:", answer.firstNumber - answer.secondNumber);
    }
    else if (answer.operator === "Multiplication") {
        console.log("Multiplication:", answer.firstNumber * answer.secondNumber);
    }
    else if (answer.operator === "Division") {
        console.log("Division:", answer.firstNumber / answer.secondNumber);
    }
    else if (answer.operator === "End Program") {
        break;
    }
    else {
        console.log("Select valid operator.");
    }
}
