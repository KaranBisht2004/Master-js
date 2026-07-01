// Variables are containers used to store data.

// we have 3 keywords to declare variables:
// 1- var 
// 2- let
// 3- const




// 'var' is changeable and can cause bugs because of how it handles scope. Dont use var

var firstName = "Deepanshu"
console.log(firstName);//Deepanshu


firstName = "Shubham"  // re-assign
console.log(firstName);//shubham

var firstName = "Mohit"  // re-declare
console.log(firstName);//Mohit






//  let' is used when you know the data WILL change later (e.g., game score, age, counters).

let userScore = 0;
console.log(userScore);//0

userScore = 10; //re-assign
console.log(userScore);//10

// let userScore = 20
// console.log(userScore);//Error





// The Unchangeable Way (Constant)
// 'const' is used when you DO NOT want the data to change. It is locked/fixed.(e.g., DOB )

const DOB = "21/10/2004";

console.log(DOB);// 21/10/2004

// DOB = "25/12/2005"; // ERROR!
