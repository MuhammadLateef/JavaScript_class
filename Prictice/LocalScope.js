// Local Scope
// A variable can also have a local scope, i.e it can only be accessed within a function.
// Example 1: Local Scope Variable
// program showing local scope of a variable
// let a = "hello";

// function greet() {
//     let b = "World"
//     console.log(a + b);
// }

// greet();
// console.log(a + b); // error

// last Example 
// program showing block-scoped concept
// global variable
let a = 'Hello';

function FuncrionName() {

    // local variable
    let b = 'World';

    console.log(a + ' ' + b);

    if (b == 'World') {

        // block-scoped variable
        let c = 'hello';

        console.log(`${a} ${b} ${c} `);
    }

    console.log(` ${a} ${b} ${c} `);
}

FuncrionName();