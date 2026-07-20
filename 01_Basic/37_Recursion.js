// Recursion

let num = 1;

function printHI() {
    console.log("hi");
    num++
    if (num <= 10)
        printHI()
}
printHI()


// Factorial using Recursion


let factorialNUM = 5;

const factorial = (num) => {

    if (num === 0 || num === 1) {
        return 1;
    }

  
    return num * factorial(num - 1);
};

console.log(factorial(factorialNUM)); 

