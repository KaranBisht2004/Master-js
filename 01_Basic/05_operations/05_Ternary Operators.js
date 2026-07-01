//05 _ TERNARY OPERATOR CHEAT SHEET (? :)

// Syntax: condition ? agar_true_ho_toh : agar_false_ho_toh;

// Example 1: Checking Voting Eligibility (if-else vs Ternary)
let age = 20;

// The Old/Long Way (if-else):
// let status;
// if (age >= 18) {
//     status = "Can Vote";
// } else {
//     status = "Cannot Vote";
// }

// The Modern Shortcut Way (Ternary Operator):
let status = (age >= 18) ? "Can Vote" : "Cannot Vote";
console.log(status); // Output: "Can Vote"


// Example 2: Checking Passing Marks
let marks = 35;
let result = (marks >= 40) ? "Passed " : "Failed ";
console.log(result); // Output: "Failed "


// Example 3: Directly using inside console.log
let isLoggedIn = true;
console.log(isLoggedIn ? "Welcome Back!" : "Please Log In"); // Output: "Welcome Back!"