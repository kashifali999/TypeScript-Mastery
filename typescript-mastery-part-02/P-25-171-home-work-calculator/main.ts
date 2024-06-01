import inquirer from "inquirer"
let result = await inquirer.prompt([
    {name : "firstNumber", type : "number", message : "Enter first number"},
    {name : "secondNumber", type : "number", message : "Enter second number"},
    {name : "operator", type : "list", message : "Enter operator", choices : ["Add", "Subtract", "Multiply", "Divide"]}
])

if      (result.operator === "Add")         {console.log("Your result is " + (result.firstNumber + result.secondNumber))}
else if (result.operator === "Subtract")    {console.log("Your result is " + (result.firstNumber - result.secondNumber))}
else if (result.operator === "Multiply")    {console.log("Your result is " + (result.firstNumber * result.secondNumber))}
else                                        {console.log("Your result is " + (result.firstNumber / result.secondNumber))}