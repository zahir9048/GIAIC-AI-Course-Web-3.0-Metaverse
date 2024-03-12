//Exercise 33
console.log("\nExercise 33\n");

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
    let ordinalSuffix: string;

    if (number === 1) {
        ordinalSuffix = 'st';
    } else if (number === 2) {
        ordinalSuffix = 'nd';
    } else if (number === 3) {
        ordinalSuffix = 'rd';
    } else {
        ordinalSuffix = 'th';
    }

    console.log(`${number}${ordinalSuffix}`);
}


//Exercise 34
console.log("\nExercise 34\n");
const favoritePizzas: string[] = ['Malai Boti', 'Chicken Tikka', 'BBQ Chicken'];

console.log('Pizza Names:');
for (const pizza of favoritePizzas) {
    console.log(pizza);
}

for (const pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log('\nI really love BBQ chicken, Chicken tikka and Malai boti Pizza! I love these pizzas.');


