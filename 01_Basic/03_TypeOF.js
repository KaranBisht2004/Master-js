// ------------------------------------------
// 1. STRINGS
// ------------------------------------------
console.log(typeof String);   // Output: "function" -> Kyunki Capital 'String' ek built-in function hai
console.log(typeof "String"); // Output: "string"   -> Quotes ke andar text hai
console.log(typeof "");       // Output: "string"   -> Khaali text (empty string) bhi string hi hoti hai
console.log(typeof "521");    // Output: "string"   -> Quotes ke andar number likhoge toh vo text ban jata hai



// ------------------------------------------
// 2. NUMBERS & BIGINT
// ------------------------------------------
console.log(typeof Number);   // Output: "function" -> Capital 'Number' bhi ek built-in function hai
console.log(typeof 120);      // Output: "number"   -> Normal integer number
console.log(typeof 852.2);    // Output: "number"   -> Decimal wale numbers bhi 'number' hi hote hain

console.log(typeof 24858n);   // Output: "bigint"   -> Aakhiri mein 'n' hai, isliye ye BigInt hai



// ------------------------------------------
// 3. BOOLEANS (True / False)
// ------------------------------------------
console.log(typeof Boolean);  // Output: "function" -> Capital 'Boolean' built-in function hai
console.log(typeof true);     // Output: "boolean"  -> Pure true/false keywords
console.log(typeof false);    // Output: "boolean"



// ------------------------------------------
// 4. UNDEFINED & NULL
// ------------------------------------------
console.log(typeof undefined); // Output: "undefined" -> Iska type undefined hi hota hai

let nonValue;
console.log(typeof nonValue);  // Output: "undefined" -> Variable khaali hai toh undefined milega

console.log(typeof null);      // Output: "object"   


// ------------------------------------------
// 5. OBJECTS & ARRAYS
// ------------------------------------------

// Objects aur Arrays dono ka type 'object' hi hota hai
const user = { name: "Rahul" };
console.log(typeof user);     // Output: "object"

const fruits = ["apple", "banana"];
console.log(typeof fruits);   // Output: "object"    -> Array bhi JS mein ek special object hai



// ------------------------------------------
// 6. SYMBOLS
// ------------------------------------------
console.log(typeof Symbol("id")); // Output: "symbol"