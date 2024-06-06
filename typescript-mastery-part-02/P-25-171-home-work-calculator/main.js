import inquirer from "inquirer";
import chalk from "chalk";
let result = await inquirer.prompt([
    { name: "firstNumber", type: "number", message: chalk.yellowBright("\n\tEnter first number") },
    { name: "secondNumber", type: "number", message: chalk.yellow("\n\tEnter second number") },
    { name: "operator", type: "list", message: "Enter operator", choices: ["Add", "Subtract", "Multiply", "Divide"] }
]);
if (result.operator === "Add") {
    console.log(chalk.green("\n\tYour result is " + (result.firstNumber + result.secondNumber)));
}
else if (result.operator === "Subtract") {
    console.log(chalk.blue("\n\tYour result is " + (result.firstNumber - result.secondNumber)));
}
else if (result.operator === "Multiply") {
    console.log(chalk.red("\n\tYour result is " + (result.firstNumber * result.secondNumber)));
}
else {
    console.log(chalk.bgGray("\n\tYour result is " + (result.firstNumber / result.secondNumber)));
}
//End
