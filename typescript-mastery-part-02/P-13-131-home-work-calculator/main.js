import inquierer from "inquirer";
let selCal = await inquierer.prompt({ name: "calculationType", type: "list", message: "Select operator", choices: ["Basic Calculations", "Advance Calculations", "BMI"] });
if (selCal.calculationType === "Basic Calculations") {
    let basicCal = await inquierer.prompt([
        { name: "firstNumber", type: "number", message: "Enter first number" },
        { name: "secondNumber", type: "number", message: "Enter second number" },
        { name: "operator", type: "list", message: "Select operator", choices: ["Add", "Subtract", "Multiply", "Divide"] }
    ]);
}
else if (selCal.calculationType === "Advance Calculations") {
    let advCal = await inquierer.prompt([
        { name: "firstNumber", type: "number", message: "Enter first number" },
        { name: "secondNumber", type: "number", message: "Enter second number" },
        { name: "operator", type: "list", message: "Select operator", choices: ["Exponentiation", "Modulus"] }
    ]);
}
else {
    let bmi = await inquierer.prompt([
        { name: "weightInKg", type: "number", message: "Enter weight in kg" },
        { name: "heightInMeters", type: "number", message: "Enter height in meters" }
    ]);
    {
        console.log(bmi.weightInKg / (bmi.heightInMeters * bmi.heightInMeters));
    }
}
if (selCal.calculationType.basicCal === "Add") {
    console.log(selCal.basicCal.firstNumber + selCal.calculationType.basicCal.secondNumber);
}
else if (selCal.calculationType.basicCal === "Subtract") {
    console.log(selCal.calculationType.basicCal.firstNumber - selCal.calculationType.basicCal.secondNumber);
}
else if (selCal.calculationType.basicCal === "Multiply") {
    console.log(selCal.calculationType.basicCal.firstNumber * selCal.calculationType.basicCal.secondNumber);
}
else if (selCal.calculationType.basicCal === "Divide") {
    console.log(selCal.calculationType.basicCal.firstNumber / selCal.calculationType.basicCal.secondNumber);
}
else if (selCal.calculationType.advCal === "Exponentiation") {
    console.log(selCal.calculationType.advCal.firstNumber ** selCal.calculationType.advCal.secondNumber);
}
else if (selCal.calculationType.advCal === "Modulus") {
    console.log(selCal.calculationType.advCal.firstNumber % selCal.calculationType.advCal.secondNumber);
}
/*
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
//else if (result.operator === "BMI")              {console.log(result.firstNumber / (result.secondNumber * result.secondNumber))}

else if (result.operator === "BMI")              {let calBmi = await inquierer.prompt([
    {name:"weightInKg", type:"number", message:"Enter weight in kg"},
    {name:"heightInMeters", type:"number", message:"Enter height in meters"}])

    {console.log(calBmi.weightInKg / (calBmi.heightInMeters * calBmi.heightInMeters))}

}
*/ 
