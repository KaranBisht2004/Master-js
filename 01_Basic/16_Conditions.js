// if 

if (condition) {// ager condition true hui tabhi if chale gya

}

let age = 21;
if (age >= 18) {
    // Yeh block tabhi chalega jab condition 'true' hogi
    console.log("You can vote!");
}//You can vote!





//  2. IF-ELSE STATEMENT (Option A nahi toh Option B)

let isLoggedin = false;

if (isLoggedin) {
    console.log("Welcome to Dashboard");
} else {
    // 👉 Agar upar wali condition 'false' hui, toh automatic yeh chalega
    console.log("Please Login First");
}





// 3. IF-ELSE IF-ELSE LADDER (Multiple Shartein/Conditions)

let marks = 85;

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    // Agar pehli galat hui, toh JS is doosri shart ko check karega
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: B");
} else {
    //  Agar upar ki saari conditions galat (false) ho gayi, tab yeh chalega
    console.log("Grade: F (Fail)");
}
//Grade: A+


const userLoggedin = true;
const debitCrad = true;

if (userLoggedin && debitCrad) {// bhot conditions is true 
    console.log("allow to buy shoes");
}//allow to buy shoes







// Switch-Case

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }


let dayNumber = 2;

switch (dayNumber) { //  Yahan hum us variable ko dalte hain jise check karna hai

    case 1: // Agar dayNumber === 1 hai
        console.log("Monday");
        break; // Kaam khatam, switch se bahar niklo!

    case 2: // Agar dayNumber === 2 hai
        console.log("Tuesday");
        break; //  Yeh chalega aur break ki wajah se code yahi ruk jayega

    case 3:
        console.log("Wednesday");
        break;

    default: // Fallback: Agar upar ka koi bhi case match nahi hua (Jaise else hota hai)
        console.log("Invalid Day!");
        break;
}//Tuesday




let fruit = "Apple";

switch (fruit) {
    case "Apple":
        console.log("Apple is red");
    //  No break here!
    case "Banana":
        console.log("Banana is yellow"); // WARNING: Yeh bhi print ho jayega!
        break;
    case "Orange":
        console.log("Orange is orange");
}
// Output: 
// Apple is red
// Banana is yellow




let code = "10"; // Yeh string hai

switch (code) {
    case 10: // Yeh number hai
        console.log("Number 10 matching"); // Yeh nahi chalega! Type alag hai.
        break;
    case "10":
        console.log("String 10 matching"); // Yeh chalega!
        break;
}//String 10 matching




// Falsy values

// false
// 0
//  -0
//  0n
//  "" (khali string)
//  null
//  undefined
//  NaN



// truthy values

// true
// []
// {}
// function (){}



console.log(false == 0);//true

console.log(false == "");//true

console.log(0 == '');//true
