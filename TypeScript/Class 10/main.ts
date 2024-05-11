// const enum color2 {
//     red = 5, //we can change the index number
//     yellow,
//     green ,
//     fork
// }
// enum color {
//     red = 5, //we can change the index number
//     yellow,
//     green ,
//     fork
// }

// console.log(color.fork);  // 0
// console.log(color[6]);   // Red
// console.log(color["green"]); //0

// let trafficLight : color = color.red;
// console.log(trafficLight);

//for loop
// for(let i = 10; i>0; i--){
//     console.log(i, "hello world");
// }

let fruits: string[] = ["Apple", "Kiwi", "Orange"];

//   starting;  condition;      increment
for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
}

let car: string[] = ["City", "Mehran", "Civic", "Lamborghini"];

for (let i = 1; i < car.length; i++) {
//   console.log(car[i]);
}


//difference between any and unknown
let num1:unknown;
num1 = 'zahir';
num1 = 3;
num1 = true;
num1 = []


let num2:any;
num2 = 'khan';
num2 = 3;
num2 = true;
num2 = [];





