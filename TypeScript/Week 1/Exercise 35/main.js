//Exercise 35
console.log("\nExercise 35");
var commonCharacteristic = 'All these animals are mammals.\n';
var animals = ['Dog', 'Cat', 'Rabbit'];
console.log('\nAnimals:');
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
console.log("\n".concat(commonCharacteristic));
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
