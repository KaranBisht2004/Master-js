/*
Using only arithmetic operators print:
Addition
Subtraction
Multiplication
Division
Remainder
Power
*/
let a = 20;
let b = 5;
console.log(a + b);//Addition
console.log(a - b);//Subtraction
console.log(a * b);//Multiplication
console.log(a / b);//Division
console.log(a % b);//Remainder
console.log(a ** b);//Power



// Swap two variables without using third variable.
// c = 10
// d = 20

let c = 10;
let d = 20;

c = c + d // c : 30
d = c - d // d : 10
c = c - d // c : 20
// aager mai c = d - c karu toh 

console.log(c);
console.log(d);



// 3.Ternary
let marks = 25;
let result = (marks <= 33 ? "fail" : "pass")
console.log(result);


let age = 19;
let status = (age > 18 ? "Eligible" : "Not Eligible")
console.log(status);


let num = -15;
let checkNUM = (num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero");
console.log(checkNUM);


let salary = 255000;
let salaryFilter = salary > 30000 ? "High Salary" : "Low Salary"
console.log(salaryFilter);


let peoplesAGE = 19;
let citizenship = "indian";
let eligibleForVote = peoplesAGE >= 18 && citizenship === "indian" ? "you can vote" : "not you can't vote"
console.log(eligibleForVote);


let studentMasks = 40;
let gradeSystem = studentMasks > 100 || studentMasks < 0 ? "Not Possible"
    : studentMasks < 33 ? "Fail"
        : studentMasks <= 55 ? "C grade"
            : studentMasks <= 66 ? "B Grade"
                : studentMasks <= 85 ? "A Grade"
                    : "Excellent"
console.log(gradeSystem);

let username = "yash321"
let password = "12555"
let securityGuard = username === "yash321" && password === "12555" ? "Login Success" : "Invalid Credentials"
console.log(securityGuard);


let temperature = 20;
let tempCheck = temperature <= 0 ? "Very Very Cold"
    : temperature <= 20 ? "Cold"
        : temperature <= 35 ? "HOT"
            : temperature <= 45 ? "Very Very Hot"
                : "Heat Waves"
console.log(tempCheck);


let aNUM = 10;
let bNUM = 2;
let cNUM = 3;
let findLargest = aNUM >= bNUM && aNUM >= cNUM ? aNUM
    : bNUM >= aNUM && bNUM >= cNUM ? bNUM
        : cNUM
console.log("this is largest number ", findLargest)


let price = 1200
let discount = 20
let discountAmount = (price * discount) / 100
console.log("Final Amount ", price - discountAmount);


let name = "";
let verification = name.trim() === "" ? "Name Required" : "welcome"
console.log(verification, name);


let isLoggedIn = true
let isAdmin = true
let verified = isLoggedIn && isAdmin ? "Access Granted" : "No Access"
console.log(verified);


let age = 20;
let hasLicense = true;
let helmet = true;
let canRide = age >= 18 && hasLicense && helmet ? "You can drive" : "No, you can't drive";
console.log(canRide);


let balance = 5000;
let withdrawAmount = 2000;
let atm = withdrawAmount > balance
    ? "Insufficient Balance"
    : `Withdrawal Successful! Remaining Balance: ${balance - withdrawAmount}`;
console.log(atm);


let units = 350;
let billAmount = units <= 100 ? units * 5
: units <= 200 ? units * 7
: units * 10;
console.log("Total electricity Bill (Flat) = ₹", billAmount);


let weight = 50
let height = 125
let heightConvent = height / 100
let calculateBMI = weight / (heightConvent * heightConvent)
console.log("Your BMI", calculateBMI.toFixed(1));
let bmiStatus = calculateBMI < 18.5 ? "Underweight"
: calculateBMI <= 24.9 ? "Normal"
: calculateBMI <= 29.9 ? "Overweight"
: "Obese";
console.log("Health Status:", bmiStatus);


let username = "yash25"
let password = 4532
let otp = 55055
let userVerification = username === "yash25" && password === 4532 && otp === 55055 ? "successfully logged in" :" Something Wrong"
console.log(userVerification);
 

let personAge = 21; 
let isStudent = true;
let basePrice = 300;

let discountAmount = isStudent ? (basePrice * 20) / 100 
: personAge < 16 ? (basePrice * 50) / 100 
: personAge > 45 ? (basePrice * 30) / 100 
: 0

let finalPrice = basePrice - discountAmount;
console.log("Discount mila: ₹" + discountAmount);
console.log("Final Ticket Amount = ₹" + finalPrice);



// 4. Understand why every output comes.
// +
// -
// *
// /
// ==
// ===

let e = "10";
let f = 5;

console.log(e + f);
console.log(e - f);
console.log(e * f);
console.log(e / f);
console.log(e == f);
console.log(e === f);



// 5. PRE-increment / POST-increment
let x = 10;// 10
console.log(++x); // 11
console.log(x++); // 11

let y = ++x
console.log(y); // 13

let z = x++
console.log(z); //13



// 6. Converting
let jackAGE = "15"
let convertingAGE = Number(jackAGE)
console.log(typeof convertingAGE);

let jackID = 2561;
let convertingID = String(jackID)
console.log(typeof convertingID);



// 7. Predict outputs
console.log(5 + "5"); // 55
console.log("5" - 2); // 3
console.log(true + 1); // 2
console.log(false + "5"); // false5
console.log(null + 5); // 5
console.log(undefined + 5); // 5
console.log(10 > 5 > 2);// false
console.log(10 < 5 < 2);// true
console.log("5" == 5);//true
console.log("5" === 5);//false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(!!"Hello");// true 
console.log(!!0);//false



