import inquirer from "inquirer"
import chalk from "chalk"
let result = await inquirer.prompt([
    {name : "firstNumber", type : "number", message : chalk.yellowBright("\n\tEnter first number")},
    {name : "secondNumber", type : "number", message : chalk.yellow("\n\tEnter second number")},
    {name : "operator", type : "list", message : "Enter operator", choices : ["Add", "Subtract", "Multiply", "Divide"]}
])

if      (result.operator === "Add")         {console.log("Your result is " + (result.firstNumber + result.secondNumber))}
else if (result.operator === "Subtract")    {console.log("Your result is " + (result.firstNumber - result.secondNumber))}
else if (result.operator === "Multiply")    {console.log("Your result is " + (result.firstNumber * result.secondNumber))}
else                                        {console.log("Your result is " + (result.firstNumber / result.secondNumber))}
//End