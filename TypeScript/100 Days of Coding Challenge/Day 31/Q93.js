function replaceBananaWithMango(fruits, replace, replaceWith) {
    var index = fruits.indexOf(replace);
    if (index !== -1)
        fruits[index] = replaceWith;
}
var Fruits = ["Apple", "Banana", "Cherry"];
console.log(Fruits);
replaceBananaWithMango(Fruits, "Banana", "Mango");
console.log(Fruits);
