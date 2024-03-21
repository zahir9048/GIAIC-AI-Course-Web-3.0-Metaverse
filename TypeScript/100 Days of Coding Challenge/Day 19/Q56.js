var listOfItems = [1, "apple", 2, "banana", true, "carrot"];
var stringsArray = listOfItems.filter(function (item) { return typeof item === "string"; });
console.log(stringsArray);
