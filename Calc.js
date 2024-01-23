let prompt = require("prompt-sync")(); //npm install prompt-sync

let operators = prompt("Enter the operators ( + , - , * , / ) ");

let num1 = parseFloat(prompt("Enter the first number "));
let num2 = parseFloat(prompt(" Enter second number "));
// let num1 = 20;
// let num2 = 30;

switch (operators) {
    case '+':
        let result = `${num1} + ${num2} = ${num1+num2} `;
        console.log(result);        
        break;
    case '-':
        let result1 = `${num1} - ${num2} = ${num1-num2} `;
        console.log(result1);        
        break;
    case '*':
        let result2 = `${num1} * ${num2} = ${num1*num2} `;
        console.log(result2);        
        break;
    case '/':
        let result3 = `${num1} / ${num2} = ${num1/num2} `;
        console.log(result3);        
        break;
    default:
        console.log("Please enter a valid operator");
        break;
}


