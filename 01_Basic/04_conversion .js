let rajAGE = "20";
console.log(Number(rajAGE));       // Output: 20
console.log(typeof Number(rajAGE));// Output: "number"



let yashClass = "5th";
let classYash = Number(yashClass);
console.log(classYash);            // Output: NaN (Not a Number)
console.log(typeof classYash);     // Output: "number"




let emptyValue = null;
let nullToNumber = Number(emptyValue);

console.log(nullToNumber);        // Output: 0 
console.log(typeof nullToNumber); // Output: "number"





let missingValue = undefined;
let undefinedToNumber = Number(missingValue);

console.log(undefinedToNumber);        // Output: NaN      <-- (Undefined humesha NaN banta hai)
console.log(typeof undefinedToNumber); // Output: "number"




let userLogin = true;
console.log(userLogin);
console.log(Number(userLogin))// Output 1




let userActive = false;
console.log(userActive); // Output False
console.log(Number(userActive)) // output 0
