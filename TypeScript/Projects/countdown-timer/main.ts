#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
import chalk from "chalk";

const ans = await inquirer.prompt([
  {
    name: "userInput",
    type: "number",
    message: "Enter time for bomb counter (in seconds): ",
  },
]);

let input = ans.userInput;

function startTime(input: number) {
  const initialTime = new Date();
  // console.log(initialTime)

  const intervalTime = new Date().setSeconds(initialTime.getSeconds() + (input+2));
  const intervalTimeFormatted = new Date(intervalTime);

  setInterval(() => {
    const currentTime = new Date();

    const timeDiff = differenceInSeconds(intervalTimeFormatted, currentTime);

    const min = Math.floor(timeDiff / 60);
    const sec = Math.floor(timeDiff % 60);

    if (timeDiff <= 0) {
      console.clear();
      console.log(chalk.red(`\t\t${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`));
      console.log(chalk.red("BOOOOOOOOOOOOOOOOMMMMMMM!!!!!! YOU DIED!!!!"));
      process.exit();
    }

    console.clear();
    console.log(
      `\nWarning: Bomb will blast soon... Save Yourself...`
    );
    console.log(chalk.red(`\t\t${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`));
  }, 1000);
}

startTime(input);
