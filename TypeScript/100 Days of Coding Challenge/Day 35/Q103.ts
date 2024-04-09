function getRandomBoolean(): boolean {
    let a = Math.random();
    console.log(a);
    return a > 0.5; 
}

console.log(getRandomBoolean()); 