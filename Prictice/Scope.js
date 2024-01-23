// Global Scope
// A variable declared at the top of a program or outside of a function is considered a global scope variable.

// ----- example 1
// program to print a text 
// let a = "hello";

// function greet () {
//     console.log(a);
// }

// greet(); // hello

// function greet() {
//    a = "hello"
// }

// greet();

// console.log(a); // hello

// -----The value of a global variable can be changed inside a function. For example,
// program to show the change in global variable
let a = "hello";

function greet() {
    a = 3;
}

// before the function call
console.log(a);

//after the function call
greet();
console.log(a); // 3