import inquirer from "inquirer";
let input1 = await inquirer.prompt({ name: "num1", type: "number", message: "Enter first number" });
let input2 = await inquirer.prompt({ name: "num2", type: "number", message: "Enter second number" });
let total = input1.num1 + input2.num2;
console.log(total);
