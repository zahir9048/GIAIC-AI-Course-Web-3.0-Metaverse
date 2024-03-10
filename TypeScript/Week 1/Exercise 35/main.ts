//Exercise 35
console.log("\nExercise 35");

const commonCharacteristic = 'All these animals are mammals.\n';

const animals: string[] = ['Dog', 'Cat', 'Rabbit'];

console.log('\nAnimals:');
for (const animal of animals) {
    console.log(animal);
}

console.log(`\n${commonCharacteristic}`);

for (const animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}



