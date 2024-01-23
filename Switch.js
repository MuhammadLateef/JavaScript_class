// var valu1 =3;
// if (valu1===2) {
//      console.log("The value is Eqaul to 2");
// } 
//  else if(valu1>=2) {
//     console.log("The value is not Equal to Greater");
// } 
//  else if(valu1<=2) {
//     console.log("The value is not Equal to 2");
// } 
//  else if(valu1>4) {
//     console.log("The value is not Equal to 2");
// } else {
//     console.log("Default value");
// }

// const weekDay = 1; // enter value from 1 to 7
// switch (weekDay) {
//     case 1:
//         console.log("Mond");        
//         break;
//     case 2:
//         console.log("Tus");        
//         break;
//     case 3:
//         console.log("Wed");        
//         break;
//     case 4:
//         console.log("Thus");        
//         break;
//     case 5:
//         console.log("Fri");        
//         break;
//     case 6:
//         console.log("Sat");        
//         break;
//     case 7:
//         console.log("sun");        
//         break;

//     default:
//         console.log("Invalid value")
//         break;
// }



// program for a simple calculator
const prompt = require('prompt-sync')(); //npm install prompt-sync
let result;

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
// console.log(number1);
const number2 = parseFloat(prompt('Enter second number: '));
// console.log(number2);

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}