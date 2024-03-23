#! /usr/bin/env node

import inquirer from "inquirer";

//1 Generate a random number using math.random
//2 User input for guessing number
//3 Compare user input with computer generated number and show result

const randomNumber: number = Math.floor(Math.random() * 10 + 1); 

while (true) {
  const answers = await inquirer.prompt([
    {
      name: "numberInput",
      type: "number",
      message: "Please guess a number: ",
    },
  ]);

  if (answers.numberInput === randomNumber) {
    console.log("Congratulations! You guessed the right number.");
    break;
  } else if (answers.numberInput < randomNumber) {
    console.log("Your guess is too low. Try again!");
  } else {
    console.log("Your guess is too high. Try again!");
  }
}
