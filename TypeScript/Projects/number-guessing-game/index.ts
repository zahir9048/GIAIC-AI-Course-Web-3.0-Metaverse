#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//1 Generate a random number using math.random
//2 User input for guessing number
//3 Compare user input with computer generated number and show result

const randomNumber: number = Math.floor(Math.random() * 10 + 1);

let tries: number = 5;
let won: boolean = false;

while (tries > 0) {
  tries--;

  const answers = await inquirer.prompt([
    {
      name: "numberInput",
      type: "number",
      message: "Please guess a number (1-10): ",
    },
  ]);

  if (answers.numberInput === randomNumber) {
    won = true;
    console.log(
      chalk.green("Congratulations! You guessed the right number.")
    );
    break;
  } else if (answers.numberInput < randomNumber) {
    console.log("Your guess is too low.");
  } else if (answers.numberInput > randomNumber) {
    console.log("Your guess is too high.");
  }

  console.log("You have " + tries + " tries left.\n");
}

if (tries == 0 && won == false) {
  console.log(
    chalk.bold.red("You Lost, You didnt the guess correctly in 5 tries.")
  );
}
