let prompt = require("prompt-sync")(); //npm install prompt-sync
let operators = prompt("Enter the operators (+.-.*,/) ");

let result;
let number1 = parseFloat(prompt("Enter first Number "));
let number2  = parseFloat(prompt("Enter second number "));
switch (operators) {
    case '+':
        result = number1+number2;
        console.log(number1 + " + " + number2 + " = " + result);
        break;
    case '-':
        result = number1-number2;
        console.log(number1 + " + " + number2 + " = " + result);
        break;
    case '*':
        result = number1*number2;
        console.log(number1 + " + " + number2 + " = " + result);
        break;
    case '/':
        result = number1/number2;
        console.log(number1 + " + " + number2 + " = " + result);
        break;    
    default:
        console.log("Invalid input");
        break;
}


