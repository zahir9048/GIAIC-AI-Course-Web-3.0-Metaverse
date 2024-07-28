//common js -> FIle Extension not required
//ECMASCript (NodeNext) -> File Extension required

// two types of import/ export : 
//1) named export, 2) default export

// importing installed modules
import inquirer from 'inquirer';
import chalk from 'chalk';


// default export
import zahir from './first.js';

// named export 
// import {b, c as cc} from './second.js';

// default export & named export, importing both in single line
// import  func, * as z from './second.js'; // default & named export in single line from single file.
import  func, {b, c as cc, d, e as p} from './second.js'; // default & named export in single line from single file.

// console.log(z.default("zahir")); //first way to call default export function
console.log(func("zahir")); //second way to call default export function

console.log(b, cc);


// using inquirer & chalk module

// let answers = await inquirer.prompt(
//     [
//         {
//             name: "age",
//             type: "number",
//             message: "Enter your Age:"
//         }, 
// ]);

// console.log(chalk.blue(answers.age));