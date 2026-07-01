//06 _ UNARY OPERATORS: 
// INCREMENT (++) & DECREMENT (--)


// 1. INCREMENT (++) -> Value ko 1 se badhata hai 
let x = 5;
x++;
console.log(x); // Output: 6

// 2. DECREMENT (--) -> Value ko 1 se ghatata hai
let y = 5;
y--;
console.log(y); // Output: 4



// PRE vs POST
// ------------------------------------------

// A. POST-Increment (a++) -> PEHLE use karo, BAAD mein badhao!
let a = 10;
let b = a++; // 1. 'a' ki purani value (10) 'b' mein chali gayi
// 2. Uske baad 'a' badh kar 11 hua

console.log(a); // Output: 11
console.log(b); // Output: 10  <-- (b ko purani value mili)


// B. PRE-Increment (++p) -> PEHLE badhao, BAAD mein use karo!
let p = 10;
let q = ++p; // 1. 'p' pehle hi badh kar 11 ho gaya
// 2. Wahi nayi value (11) 'q' mein chali gayi

console.log(p); // Output: 11
console.log(q); // Output: 11  <-- (q ko nayi/badhi hui value mili)