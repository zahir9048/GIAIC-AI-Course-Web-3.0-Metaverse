//Exercise 38
console.log("\nExercise 38");

function describe_city(city_name: string, country_name: string = "Pakistan"): void {
    console.log(city_name + " is in " + country_name);
}

describe_city("Karachi");
describe_city("Islamabad");
describe_city("Paris", "France");


//Exercise 39
console.log("\nExercise 39");

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Quetta", "Pakistan"));
