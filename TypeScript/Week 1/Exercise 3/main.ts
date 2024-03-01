
let personName = "ZaHiR Khan";
console.log("Original Name: " + personName);

console.log("Lower case: " + personName.toLowerCase());
console.log("Upper case: " + personName.toUpperCase());

let titlecaseName = personName.replace(/\b\w+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
console.log("Title case: " + titlecaseName);