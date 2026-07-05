// =================================================================================
// 🚀 DEEP DIVE: JAVASCRIPT HOISTING (THE CODESMITH NOTES)
// =================================================================================

/*
❓ 1. HOISTING ASAL ME KYA HAI?
   - Physical definition: JS code chalne se PEHLE variables aur functions ko top par shift karta hai.
   - Real Deep Fact: JS Engine physical code shift NAHI karta! Wo bas "Execution Context" ke 
     'Memory Creation Phase' me hi saare declarations ko memory space allot kar deta hai.
*/

// =================================================================================
// 🎯 CASE 1: VAR VARIABLE HOISTING (The 'Undefined' Trap)
// =================================================================================

console.log(a); // 👉 Output: undefined (Error nahi aaya!)
var a = 10;
console.log(a); // 👉 Output: 10

/*
   🕵️‍♂️ Engine Visualisation (Behind the scenes):
   Phase 1 (Memory): Engine scanned `var a` -> memory me jagah di aur default value set ki: `undefined`.
   Phase 2 (Execution): Line 1 par `a` manga, toh memory se `undefined` utha ke de diya.
*/


// =================================================================================
// 🎯 CASE 2: LET & CONST HOISTING (The Temporal Dead Zone - TDZ)
// =================================================================================

// console.log(b); // ❌ Error: Cannot access 'b' before initialization
let b = 20;

/*
   🤯 Deep Concept (Interview Killer): "Kya let/const hoist hote hain?" -> YES, hote hain!
   - Farq sirf itna hai ki `var` ko memory milte hi 'undefined' mil jata hai.
   - Lekin `let` aur `const` ko memory toh milti hai, par wo "UNINITIALIZED" rehte hain.
   - Variable ke BANNE se lekar uske INITIALIZE (value milne) tak ke area ko TDZ kehte hain.
   - TDZ ke andar agar tum variable ko access karoge, toh JS straight away Error phekega.
*/


// =================================================================================
// 🎯 CASE 3: FUNCTIONS HOISTING (Declaration vs Expression)
// =================================================================================

// --- Type A: Function Declaration (Fully Hoisted) ---
greet(); // ✅ Output: "Hello Bhai!" (Chalta hai, kyunki poora function memory me copy hota hai)

function greet() {
    console.log("Hello Bhai!");
}


// --- Type B: Function Expression / Arrow Function (Not Hoisted as Function) ---
// testArrow(); // ❌ Error: testArrow is not a function

var testArrow = () => {
    console.log("Arrow chal gaya");
};

/*
   🕵️‍♂️ Deep Logic: `testArrow` ek variable hai jiske aage `var` laga hai.
   - Hoisting ke waqt `testArrow` ko default value mili: `undefined`.
   - Jab tumne line 54 par `testArrow()` likha, toh JS ne dekha `undefined()`, 
     aur undefined koi function nahi hai, isliye error aaya!
*/


// =================================================================================
// 📝 QUICK CHEAT SHEET FOR COMMENTS
// =================================================================================
// 1. Hoisting = Memory Phase allocation before Execution.
// 2. var -> Hoists with 'undefined'.
// 3. let/const -> Hoists in 'TDZ' (Uninitialized State) -> Access strictly forbidden.
// 4. Function Declaration -> Hoists completely with body.
// 5. Arrow/Expression -> Treated as variables (Hoisting depends on var/let/const).
// =================================================================================


// Question 1: The var Trick

var x = 10;
function test() {
    console.log(x); 
    var x = 20;
}
test();// undefined 




// Question 2: Arrow Function Hoisting
// JavaScript
// myFunc();

// var myFunc = () => {
//     console.log("Hello");
// };
// // Output kya aayega? ("Hello", undefined, ya Error)
// Question 3: Let vs Var in TDZ
// JavaScript
// function check() {
//     console.log(a);
//     console.log(b);
//     var a = 1;
//     let b = 2;
// }
// check();
// // Output kya aayega?
// Question 4: Callback Data Flow
// JavaScript
// const greet = (name, callback) => {
//     console.log(`Hi ${name}`);
//     callback();
// };

// greet("Karan", (user) => {
//     console.log(`Welcome back ${user}`);
// });
// // Output me 'Welcome back' ke aage kya print hoga? ("Karan", undefined, ya Error)
// Question 5: Mind Bender (Hoisting + Callback)
// JavaScript
// function heavyTask(callback) {
//     var status = "Success";
//     callback();
// }

// heavyTask(() => {
//     console.log(status);
// });
// // Output kya aayega? ("Success", undefined, ya ReferenceError)