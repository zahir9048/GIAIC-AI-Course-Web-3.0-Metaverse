"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//slide 158
let answer = "correct";
if (answer === "correct") {
    console.log("You got it right!");
}
else {
    console.log("Sorry, that's not correct. ");
}
//slide 159
let guess = 7;
let target = 5;
if (guess < target) {
    console.log("Your guess is too low. ");
}
else if (guess > target) {
    console.log("Your guess is too high. ");
}
else {
    console.log("You guessed correctly!");
}
//slide 164
let isFriend = "Ameen";
// let isFriend: string = "Hamzah";
if (isFriend === "Ameen" || isFriend === "Daniyal") {
    console.log(`${isFriend} is your friend.`);
}
else {
    console.log(`${isFriend} is not your friend.`);
}
//slide 170
let playerl = "Rock";
let player2 = "Scissors";
if (playerl === player2) {
    console.log("lt's a tie!");
}
else if ((playerl === "Rock" && player2 === "Scissors") ||
    (playerl === "Scissors" && player2 === "Paper") ||
    (playerl === "Paper" && player2 === "Rock")) {
    console.log("Player 1 wins.");
}
else {
    console.log("Player 2 wins.");
}
