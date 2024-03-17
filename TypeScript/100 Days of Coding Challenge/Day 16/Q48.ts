let pricesSet1 = [1200, 1500, 1100];
let pricesSet2 = [1000, 1300, 1600];

let pricesSorted = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(pricesSorted);
