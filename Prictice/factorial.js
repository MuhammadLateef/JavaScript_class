let prompt  =  require("prompt-sync")();

let factorialNumber = parseInt(prompt("Enter the Number you want to print factorial! "));
let resultFact = 1;

let Fact = 1;
    while (Fact <= factorialNumber) {
        resultFact = resultFact * Fact;
        Fact = Fact + 1;
    } 
    console.log("the factorial of " + factorialNumber + " is = " + resultFact);

 