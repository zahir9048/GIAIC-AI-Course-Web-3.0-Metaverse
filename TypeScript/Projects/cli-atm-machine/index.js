import inquirer from "inquirer";
import chalk from "Chalk";
let myBalance = 10000;
let setPin = 12345;
let myPin = await inquirer.prompt([
    {
        name: "code",
        message: "enter your pin",
        type: "number",
    },
]);
if (myPin.code === setPin) {
    console.log(chalk.green("Correct Pin Entered."));
    let ask = await inquirer.prompt([
        {
            name: "operation",
            message: "Select an Option:",
            type: "list",
            choices: ["fast cash", "withdraw money", "check your balance"],
        },
    ]);
    if (ask.operation === "withdraw money") {
        let withdrawal = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter amount to withdraw: ",
            },
        ]);
        if (myBalance >= withdrawal.amount) {
            myBalance = myBalance - withdrawal.amount;
            console.log(chalk.green(`Amount withdrawn successfully. Your Remaining Balance: ${myBalance}`));
        }
        else {
            console.log(chalk.red(`Insufficient Balance, Your balance is:  ${myBalance}`));
        }
    }
    else if (ask.operation === "check your balance") {
        console.log(`Your Current Balance is: ${myBalance}`);
    }
    else if (ask.operation === "fast cash") {
        let fastCashOptions = await inquirer.prompt([
            {
                name: "options",
                type: "list",
                message: "Choose one:",
                choices: [1000, 2000, 5000, 10000, 15000, 20000],
            },
        ]);
        if (myBalance >= fastCashOptions.options) {
            myBalance = myBalance - fastCashOptions.options;
            console.log(chalk.green(`Amount withdrawn successfully. Your Remaining Balance: ${myBalance}`));
        }
        else {
            console.log(chalk.red(`Insufficient Balance, Your balance is:  ${myBalance}`));
        }
    }
}
else {
    console.log(chalk.red("Incorrect Pin Entered."));
}
