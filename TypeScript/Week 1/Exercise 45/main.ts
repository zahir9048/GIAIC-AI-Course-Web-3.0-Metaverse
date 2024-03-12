//Exercise 45
console.log("\nExercise 45");

function carInfo(manufacturer: string, modelName: string, ...additionalInfo: { [key: string]: any }[]): object {
    const carInfo = {
        manufacturer,
        modelName,
        ...additionalInfo.reduce((acc, item) => ({ ...acc, ...item }), {})
    };

    return carInfo;
}

const carObject = carInfo("Toyota", "Corolla X", { color: "White" }, { optionalFeature: "Sunroof" });

console.log(carObject);

