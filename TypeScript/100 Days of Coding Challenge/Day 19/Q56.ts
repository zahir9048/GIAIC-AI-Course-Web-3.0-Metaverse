
let listOfItems = [1, "apple", 2, "banana", true, "carrot"];

let wordsArray = listOfItems.filter(item => typeof item === "string");

console.log(wordsArray);
