
// NULLISH COALESCING OPERATOR (`??`) NOTES

//  1. Basic Use Case (Null ya Undefined hone par fallback)

let username1 = null;
let result1 = username1 ?? "Guest User";
console.log(result1); // Output: Guest User (Kyunki pehli value null thi)

let username2 = undefined;
let result2 = username2 ?? "Anonymous";
console.log(result2); // Output: Anonymous (Kyunki pehli value undefined thi)

let username3 = "Karan";
let result3 = username3 ?? "Guest";
console.log(result3); //  Output: Karan (Kyunki pehli value valid thi)





// 2. THE BIG TWIST: `??` vs `||` (OR Operator) — Interview Trap!

// Purane zamane me log default value ke liye `||` use karte the. 
// Par `||` har FALSY value (0, "", false) par fallback chala deta hai. 
// `??` sirf NULL aur UNDEFINED par chalta hai.

let userScore = 0; // Maan lo game me score zero (0) hai

// A. Using OR Operator (`||`):
let finalScoreOR = userScore || 10; 
console.log(finalScoreOR); // Output: 10  (Galat hai! Score 0 ek valid score tha, par || ne use Falsy samajh kar change kar diya)

// B. Using Nullish Coalescing (`??`):
let finalScoreNullish = userScore ?? 10;
console.log(finalScoreNullish); // Output: 0  (Ekdum sahi! Kyunki 0 null ya undefined nahi hai, isliye ?? ne use safe rakha)





// ⚠️ 3. Syntax Error Rule (Kiske sath use nahi kar sakte?)

// Tum direct `??` ko `&&` ya `||` ke sath bina brackets ke mix nahi kar sakte. 
// Aisa karne par JavaScript confuse ho jata hai aur Error deta hai.

// let check = true && false ?? "Default"; //  SyntaxError
let checkCorrect = (true && false) ?? "Default"; //  Brackets lagana zaroori hai
console.log(checkCorrect);


// ---------------------------------------------------------------------------------
// QUICK SUMMARY CHEAT SHEET FOR COMMENTS
// ---------------------------------------------------------------------------------
// 1. ?? ka matlab hai: "Agar left wali side null/undefined hai, tabhi right wali side par jao."
// 2. Yeh 0 (zero) aur "" (khali string) ko valid value maanta hai, unhe destroy nahi karta.
// 3. Interview me hamesha poocha jayega: "|| aur ?? me kya farq hai?" 
//    Jawab: || saari Falsy values par fallback deta hai, jabki ?? sirf null/undefined par.
// =================================================================================