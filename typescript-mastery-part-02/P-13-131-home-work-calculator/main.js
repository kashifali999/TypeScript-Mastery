import inquirer from "inquirer";
async function calculation() {
    const calculationType = await inquirer.prompt([
        {
            name: "calculationType",
            type: "list",
            choices: ["basic Calculation", "Advance Calculation",],
            message: "Select the Calculation Type"
        }
    ]);
    let result;
    if (calculationType.calculationType === "basic Calculation") {
        const basicQ = await inquirer.prompt([
            {
                name: "num1",
                type: "number",
                message: "Type the value"
            },
            {
                name: "num2",
                type: "number",
                message: "Type the value"
            },
            {
                name: "operator",
                type: "list",
                choices: ["Addition", "Subtraction", "Multiplication", "division"],
                message: "Select the operator"
            }
        ]);
        switch (basicQ.operator) {
            case "Addition":
                result = basicQ.num1 + basicQ.num2;
                break;
            case "Subtraction":
                result = basicQ.num1 - basicQ.num2;
                break;
            case "Multiplication":
                result = basicQ.num1 * basicQ.num2;
                break;
            case "division":
                result = basicQ.num1 / basicQ.num2;
                break;
        }
    }
    else if (calculationType.calculationType === "Advance Calculation") {
        const AdvanceQ = await inquirer.prompt([
            {
                name: "eNum1",
                type: "number",
                message: "Type the value"
            },
            {
                name: "eNum2",
                type: "number",
                message: "Type the value"
            },
            {
                name: "eOperator",
                type: "list",
                choices: ["Exponentiation", "Modulus"],
                message: "Select the operator"
            }
        ]);
        switch (AdvanceQ.eOperator) {
            case "Exponentiation":
                result = AdvanceQ.num1 ** AdvanceQ.num2;
                break;
            case "Modulus":
                result = AdvanceQ.num1 % AdvanceQ.num2;
                break;
        }
    }
    console.log(result);
}
calculation();
/*import inquierer from "inquirer"
let selCal = await inquierer.prompt(
    {name:"calculationType", type:"list", message:"Select operator", choices:["Basic Calculations", "Advance Calculations", "BMI"]}
)

if      (selCal.calculationType === "Basic Calculations")     {let basicCal = await inquierer.prompt([
    {name:"firstNumber", type:"number", message:"Enter first number"},
    {name:"secondNumber", type:"number", message:"Enter second number"},
    {name:"operator", type:"list", message:"Select operator", choices:["Add", "Subtract", "Multiply", "Divide"]}
])}
else if (selCal.calculationType === "Advance Calculations")   {let advCal = await inquierer.prompt([
    {name:"firstNumber", type:"number", message:"Enter first number"},
    {name:"secondNumber", type:"number", message:"Enter second number"},
    {name:"operator", type:"list", message:"Select operator", choices:["Exponentiation", "Modulus"]}
])}
else                                                          {let bmi = await inquierer.prompt([
    {name:"weightInKg", type:"number", message:"Enter weight in kg"},
    {name:"heightInMeters", type:"number", message:"Enter height in meters"}])

    {console.log(bmi.weightInKg / (bmi.heightInMeters * bmi.heightInMeters))}}


    if      (selCal.calculationType.basicCal === "Add")              {console.log(selCal.basicCal.firstNumber + selCal.calculationType.basicCal.secondNumber)}
    else if (selCal.calculationType.basicCal === "Subtract")         {console.log(selCal.calculationType.basicCal.firstNumber - selCal.calculationType.basicCal.secondNumber)}
    else if (selCal.calculationType.basicCal === "Multiply")         {console.log(selCal.calculationType.basicCal.firstNumber * selCal.calculationType.basicCal.secondNumber)}
    else if (selCal.calculationType.basicCal === "Divide")           {console.log(selCal.calculationType.basicCal.firstNumber / selCal.calculationType.basicCal.secondNumber)}
    else if (selCal.calculationType.advCal === "Exponentiation")     {console.log(selCal.calculationType.advCal.firstNumber ** selCal.calculationType.advCal.secondNumber)}
    else if (selCal.calculationType.advCal === "Modulus")            {console.log(selCal.calculationType.advCal.firstNumber % selCal.calculationType.advCal.secondNumber)}
    */ 
