//Exercise 32
console.log("\nExercise 32");

let current_users: string[] = ['ali', 'maryam', 'zahir', 'asim', 'rayan'];
let new_users: string[] = ['Shahid', 'zahir', 'Ahmed', 'MARYAM', 'Kamran'];

for (let i = 0; i < new_users.length; i++) {
    let flag: number = 0;

    for (let j = 0; j < current_users.length; j++) {

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

