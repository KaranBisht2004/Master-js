//04 _ LOGICAL OPERATORS 


// 1. AND (&&) -> Dono side TRUE hona chahiye tabhi final answer TRUE aayega.
// Real-world: ATM se paise nikalne ke liye Card aur PIN dono sahi hone chahiye.
let hasCard = true;
let hasCorrectPIN = true;
console.log(hasCard && hasCorrectPIN); // Output: true

console.log(10 > 5 && 3 > 8); // Output: false (Kyunki ek condition galat hai)



// 2. OR (||) -> Kisi BHI ek side TRUE hone par final answer TRUE aa jata hai.
// Real-world: Payment karne ke liye UPI ya Cash mein se koi ek chalega.
let hasUPI = true;
let hasCash = false;
console.log(hasUPI || hasCash); // Output: true (Kyunki UPI true hai)

console.log(5 > 10 || 2 < 1);  // Output: false (Kyunki dono hi galat hain)


// 3. LOGICAL NOT (!) -> Ulta kar deta hai (True ko False, aur False ko True).
// Real-world: Is the user NOT logged in?
let isLoggedIn = true;
console.log(!isLoggedIn); // Output: false (True ka ulta false ho gaya)

console.log(!false);      // Output: true