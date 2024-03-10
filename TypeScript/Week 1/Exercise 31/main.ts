//Exercise 31
console.log("\nExercise 31");

let users: string[] = ['admin', 'zahir', 'asim', 'rayan'];

for (let i = users.length - 1; i >= 0; i--) {
    users.pop(); //removing all users from array
}

if (users.length == 0) {
    console.log("List is empty. We need to find some users!")
}
