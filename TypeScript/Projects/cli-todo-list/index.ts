#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todos: string[] = [];

async function createTodo(todos: string[]) {
  do {
    let ans = await inquirer.prompt([
      {
        name: "select",
        type: "list",
        message: "Select an Operation:",
        choices: [
          chalk.green("Add"),
          chalk.green("Update"),
          chalk.green("View"),
          chalk.green("Delete"),
          chalk.green("End Program"),
        ],
      },
    ]);

    if (ans.select === chalk.green("Add")) {
      console.clear();
      let addItem = await inquirer.prompt([
        {
          name: "todo",
          type: "input",
          message: "Enter item to add: ",
        },
      ]);

      todos.push(addItem.todo);
      console.log(chalk.green(`${addItem.todo} added.\n`));
    } else if (ans.select === chalk.green("Update")) {
      console.clear();
      let updateItem = await inquirer.prompt([
        {
          name: "update",
          type: "list",
          message: "Select the item to update: ",
          choices: todos.map((item) => item),
        },
      ]);

      let addItem = await inquirer.prompt([
        {
          name: "add",
          type: "input",
          message: "Enter item name: ",
        },
      ]);

      let newTodoList = todos.filter((val) => val != updateItem.update);
      todos = [...newTodoList, addItem.add];
      console.log(
        chalk.green(`${updateItem.update} updated to ${addItem.add}.\n`)
      );
    } else if (ans.select === chalk.green("View")) {
      console.clear();
      console.log("My To-Do List:");
      console.log("*****************");
      todos.forEach((item, index) => console.log(`${index + 1}. ${item}`));
      console.log("*****************\n");
    } else if (ans.select === chalk.green("Delete")) {
      console.clear();
      let deleteItem = await inquirer.prompt([
        {
          name: "delete",
          type: "list",
          message: "Select the item to delete: ",
          choices: todos.map((item) => item),
        },
      ]);

      let newTodoList = todos.filter((val) => val != deleteItem.delete);
      todos = [...newTodoList];
      console.log(chalk.red(`${deleteItem.delete} deleted.\n`));
    } else {
      break;
    }
  } while (true);
}

createTodo(todos);
