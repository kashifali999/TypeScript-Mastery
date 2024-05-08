import inquierer from "inquirer"
let result = await inquierer.prompt([
    {name:"firstNumber", type:"number", message:"Enter first number"},
    {name:"secondNumber", type:"number", message:"Enter second number"},
    {name:"operator", type:"list", message:"Select operator", choices:["Add", "Subtract", "Multiply", "Divide", "Exponentiation", "Modulus", "BMI"]}
])

if      (result.operator === "Add")              {result.firstNumber + result.secondNumber}
else if (result.operator === "Subtract")         {result.firstNumber - result.secondNumber}
else if (result.operator === "Multiply")         {result.firstNumber * result.secondNumber}
else if (result.operator === "Divide")           {result.firstNumber / result.secondNumber}
else if (result.operator === "Exponentiation")   {result.firstNumber ** result.secondNumber}
else if (result.operator === "Modulus")          {result.firstNumber % result.secondNumber}
else if (result.operator === "BMI")              {result.firstNumber % result.secondNumber}


