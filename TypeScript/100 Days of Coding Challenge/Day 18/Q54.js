function createObjectWithDynamicKey(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    console.log(key, dynamicObject[key]);
    return dynamicObject;
}
var userPreference = createObjectWithDynamicKey("theme", "dark");
console.log(userPreference);
var userPreference2 = createObjectWithDynamicKey("color", "white");
console.log(userPreference2);
