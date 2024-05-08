import inquierer from "inquirer"
let result = await inquierer.prompt([
    {name:"firstNumber", type:"number", message:"Enter first number"},
    {name:"secondNumber", type:"number", message:"Enter second number"},
    {name:"operator", type:"list", message:"Select operator", choices:["Add", "Subtract", "Multiply", "Divide", "Exponentiation", "Modulus", "BMI"]}
])

