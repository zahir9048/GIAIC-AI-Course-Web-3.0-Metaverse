//Exercise 38
console.log("\nExercise 38");
function describe_city(city_name, country_name) {
    if (country_name === void 0) { country_name = "Pakistan"; }
    console.log(city_name + " is in " + country_name);
}
describe_city("Karachi");
describe_city("Islamabad");
describe_city("Paris", "France");
//Exercise 39
console.log("\nExercise 39");
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Karachi", "Pakistan"));
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Quetta", "Pakistan"));
