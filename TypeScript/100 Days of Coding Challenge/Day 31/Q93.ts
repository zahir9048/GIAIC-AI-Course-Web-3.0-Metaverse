
function replaceBananaWithMango(fruits: string[], replace: string, replaceWith: string): void {
    const index = fruits.indexOf(replace); 
    if (index !== -1) fruits[index] = replaceWith; 
}


const Fruits: string[] = ["Apple", "Banana", "Cherry"];
console.log(Fruits); 
replaceBananaWithMango(Fruits, "Banana", "Mango");
console.log(Fruits); 