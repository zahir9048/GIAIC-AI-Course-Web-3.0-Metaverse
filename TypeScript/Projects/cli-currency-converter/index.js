#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //Base Currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
console.log("Exchange rates: (Base Currency: USD)");
for (let c in currency) {
    console.log(c + ": " + currency[c]);
}
let answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency: ",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "to",
        message: "Enter To Currency: ",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "amount",
        message: "Enter your amount: ",
        type: "number",
    },
]);
console.log(currency[answer.from]);
let fromCurrency = currency[answer.from];
let toCurrency = currency[answer.to];
let amount = answer.amount;
let baseAmount = amount / fromCurrency; //in dollars
let convertedAmount = baseAmount * toCurrency;
console.log("Conversion: " + convertedAmount);
