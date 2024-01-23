// decelarations 
function Addition(a,b) { // parameters

    let result = a+b;
    return result;
    // console.log("The addition of a and b " , a+b)
}

// function calling 
console.log(Addition(12,"14"));

// let functionCall = Addition(12,14);
// console.log(functionCall);
// ------- 2nd method annonamus functions;


let subtruction = function() {
// body 
} 

// let resultOfFunction = subtruction;

// ------- Arrow functions Ec6,,,,

// let FunctionName = (num1,num2) => num1+num2; 
// let result1 = FunctionName(12,23);
// console.log(result1);

// Example 

// function Square(num) {   //3 
//     let sqareRoot = num*num*num; //3*3 = 9
//     return sqareRoot;
// }
// let resultOfSqare = Square(12);
// console.log(resultOfSqare)


// Scope 
// 1- Global 
// 2- Local Scope;

// let a = "hello"; // 

// function Scope() {
//     console.log(`${a} World`);
//     let b = "Hi" // local scope....
//     console.log(b);
//     function Nested() {
//         let c = "Everyone";
//         console.log(`${a} World ${b} ${c}`);
//     }
//     Nested();
//     console.log(`${a} World ${b} `);
// } 
// Scope();
// ----- Example
// global variable
// let a = 'Hello';

// function FuncrionName() {

//     // local variable
//     let b = 'World';

//     console.log(a + ' ' + b);

//     if (b == 'World') {

//         // block-scoped variable
//         let c = 'hello';

//         console.log(`${a} ${b} ${c} `);
//     }

//     console.log(` ${a} ${b} ${c} `);
// }

// FuncrionName();







































