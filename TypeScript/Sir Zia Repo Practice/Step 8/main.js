// // indexing:                 0         1       2
// // let students : string[] = ["ahmed", "asim", "rizwan"];
// // console.log(students.length);
// let array1 : number[] = [5, 6, 7]; //correct syntax
// console.log(array1);//correct syntax     output: 6
// let array2:Array<number> = [1, 2, 3];//alternative correct syntax
// let array3 : number[] = [];//correct syntax to define an empty array
// // let array4: number[] = new number[2];//error
// console.log(array5);
// array5.push(50); // last mai insert krega value ko
// console.log(array5);
// let array5: number[] = [9, 6, -7];
// console.log(array5);
// let removedElement = array5.pop(); // last element ko remove krega 
// console.log(removedElement);
// console.log(array5);
// let array5: number[] = [9, 6, -7];
// console.log(array5);
// let removeElement = array5.shift(); // remove 1st element of array
// console.log(removeElement);
// console.log(array5);
// let array5: number[] = [9, 6, -7];
// console.log(array5);
// array5.unshift(90); //inserts element at 0th index or first poistion
// console.log(array5);
//slice method (does not change array)
//                        0          1       2        3         4
// let array5: string[] = ["apple", "mango", "kiwi", "grapes", "cherry"];
// console.log(array5);
// console.log(array5.slice(1,3));
// console.log(array5);
//splice method (changes array)
//                        0          1       2        3         4
let array5 = ["apple", "mango", "kiwi", "grapes", "cherry"];
console.log(array5);
let removedElemets = array5.splice(1, 3, "orange", "amrood");
console.log(removedElemets);
console.log(array5);
export {};
