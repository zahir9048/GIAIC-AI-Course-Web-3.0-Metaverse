//Exercise 44
console.log("\nExercise 44");
function printItems() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("The sandwhich contain items: " + items);
}
printItems("Chicken");
printItems("Chicken", "Mayo");
printItems("Chicken", "Ketchup", "Cheese");
