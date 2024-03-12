//Exercise 33
console.log("\nExercise 33\n");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    var ordinalSuffix = void 0;
    if (number === 1) {
        ordinalSuffix = 'st';
    }
    else if (number === 2) {
        ordinalSuffix = 'nd';
    }
    else if (number === 3) {
        ordinalSuffix = 'rd';
    }
    else {
        ordinalSuffix = 'th';
    }
    console.log("".concat(number).concat(ordinalSuffix));
}
//Exercise 34
console.log("\nExercise 34\n");
var favoritePizzas = ['Malai Boti', 'Chicken Tikka', 'BBQ Chicken'];
console.log('Pizza Names:');
for (var _a = 0, favoritePizzas_1 = favoritePizzas; _a < favoritePizzas_1.length; _a++) {
    var pizza = favoritePizzas_1[_a];
    console.log(pizza);
}
for (var _b = 0, favoritePizzas_2 = favoritePizzas; _b < favoritePizzas_2.length; _b++) {
    var pizza = favoritePizzas_2[_b];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log('\nI really love BBQ chicken, Chicken tikka and Malai boti Pizza! I love these pizzas.');
