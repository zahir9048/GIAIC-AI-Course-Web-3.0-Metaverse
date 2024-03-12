//Exercise 31
console.log("\nExercise 31");
var current_users = ['ali', 'maryam', 'zahir', 'asim', 'rayan'];
var new_users = ['Shahid', 'zahir', 'Ahmed', 'MARYAM', 'Kamran'];
for (var i = 0; i < new_users.length; i++) {
    var flag = 0;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() == current_users[j].toLowerCase()) {
            flag = 1;
        }
    }
    if (flag == 1) {
        console.log("Username " + new_users[i] + " is already taken.Enter another username...");
    }
    else {
        console.log("Username " + new_users[i] + " is available.");
    }
}
