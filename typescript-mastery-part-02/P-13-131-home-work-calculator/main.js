"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var result = await inquirer_1.default.prompt([
    { name: "firstNumber", type: "number", message: "Enter first number" },
    { name: "secondNumber", type: "number", message: "Enter second number" },
    { name: "operator", type: "list", message: "Select operator", choices: ["Add", "Subtract", "Multiply", "Divide", "Exponentiation", "Modulus", "BMI"] }
]);
