//Exercise 14
console.log("\nExercise 14");
var guests = ["Asim", "Umer", "Adil", "Ramish"];
console.log("\nGuests List:");
console.log("I would like to invite " + guests[0] + " to dinner.");
console.log("I would like to invite " + guests[1] + " to dinner.");
console.log("I would like to invite " + guests[2] + " to dinner.");
//Exercise 15
console.log("\nExercise 15");
console.log(guests[1] + " is not coming.");
guests[1] = "Moiz";
console.log("\nUpdated Guests List:");
console.log("I would like to invite " + guests[0] + " to dinner.");
console.log("I would like to invite " + guests[1] + " to dinner.");
console.log("I would like to invite " + guests[2] + " to dinner.");
//Exercise 16
function append(insertName) {
    guests.push(insertName);
}
;
console.log("\nExercise 16");
console.log("Adding one more guest at the beginning of array, middle of array and in the end of array.");
guests.unshift("Iqra"); //adding element to beginning of array
guests.splice(3, 0, "Ahmed"); //adding element to middle of array
append("Kamran"); // adding element to end of array
console.log("\nUpdated Guests List:");
console.log("I would like to invite " + guests[0] + " to dinner.");
console.log("I would like to invite " + guests[1] + " to dinner.");
console.log("I would like to invite " + guests[2] + " to dinner.");
console.log("I would like to invite " + guests[3] + " to dinner.");
console.log("I would like to invite " + guests[4] + " to dinner.");
console.log("I would like to invite " + guests[5] + " to dinner.");
console.log("I would like to invite " + guests[6] + " to dinner.");
//Exercise 17
console.log("\nExercise 16");
console.log("You can invite only two people for dinner.");
console.log("Dear", guests[6], ", I am sorry, I can not invite you to dinner.");
guests.pop();
console.log("Dear", guests[5], ", I am sorry, I can not invite you to dinner.");
guests.pop();
console.log("Dear", guests[4], ", I am sorry, I can not invite you to dinner.");
guests.pop();
console.log("Dear", guests[3], ", I am sorry, I can not invite you to dinner.");
guests.pop();
console.log("Dear", guests[2], ", I am sorry, I can not invite you to dinner.");
guests.pop();
console.log("Dear", guests[0], ", I would like to inform you,  you are still invited to dinner.");
console.log("Dear", guests[1], ", I would like to inform you,  you are still invited to dinner.");
guests.pop();
guests.pop();
console.log("Guests array: ", guests);
