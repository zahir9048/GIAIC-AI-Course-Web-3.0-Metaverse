
function createObjectWithDynamicKey(key: string, value: string) {
    let dynamicObject = {};
    dynamicObject[key] = value;
    // console.log(key, dynamicObject[key]); can use this syntax also to print key and value
    return dynamicObject;
}

let userPreference = createObjectWithDynamicKey("theme", "dark");
console.log(userPreference);

let userPreference2 = createObjectWithDynamicKey("color", "white");
console.log(userPreference2);