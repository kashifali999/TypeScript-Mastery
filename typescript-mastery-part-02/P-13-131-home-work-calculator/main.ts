import inquierer from "inquirer"
let result = await inquierer.prompt([
    {name:"firstNumber", type:"number", message:"Enter first number"},
    {name:"secondNumber", type:"number", message:"Enter second number"},
    {name:"operator", type:"list", message:"Select operator", choices:["Add", "Subtract", "Multiply", "Divide", "Exponentiation", "Modulus", "BMI"]}
])

if      (result.operator === "Add")              {console.log(result.firstNumber + result.secondNumber)}
else if (result.operator === "Subtract")         {console.log(result.firstNumber - result.secondNumber)}
else if (result.operator === "Multiply")         {console.log(result.firstNumber * result.secondNumber)}
else if (result.operator === "Divide")           {console.log(result.firstNumber / result.secondNumber)}
else if (result.operator === "Exponentiation")   {console.log(result.firstNumber ** result.secondNumber)}
else if (result.operator === "Modulus")          {console.log(result.firstNumber % result.secondNumber)}
else if (result.operator === "BMI")              {console.log(result.firstNumber / (result.secondNumber * result.secondNumber))}

