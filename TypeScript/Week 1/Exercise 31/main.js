//Exercise 31
console.log("\nExercise 31");
var users = ['admin', 'zahir', 'asim', 'rayan'];
for (var i = users.length - 1; i >= 0; i--) {
    users.pop(); //removing elements from array
}
if (users.length == 0) {
    console.log("List is empty. We need to find some users!");
}
