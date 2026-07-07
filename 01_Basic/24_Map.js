//Map

// 1. Basic Example: Saare numbers ko double karna
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => {
    return num * 2; // Har number 2 se multiply hokar naye array me jayega
});

console.log(doubled); // Output: [2, 4, 6, 8]
console.log(numbers); // Asli array ekdum safe hai: [1, 2, 3, 4]


// 2. Real-World Use Case: Array of Objects se sirf ek cheez nikalna ya badalna

const codingLang = [
    { languageName: "JavaScript" },
    { languageName: "Python" },
    { languageName: "Java" }
];

// Maan lo hume objects nahi chahiye, sirf saari languages ke naam ki ek simple string array chahiye:
const langNames = codingLang.map((item) => {
    return item.languageName; 
});

console.log(langNames); //  Output: ["JavaScript", "Python", "Java"]


// 3. return likhna bhool gaye toh?

// "Agar map ke andar tum kuch return na karo, toh naye array me kya milega?"
// Jawab hai: `undefined` ka array! ❌ Map me 'return' likhna compulsory hai.

const trapArray = numbers.map((num) => {
    num * 2; // Galti: return nahi likha!
});
console.log(trapArray); //  Output: [undefined, undefined, undefined, undefined]



// QSUMMARY 

// 1. Same Length: Naye array ki length hamesha asli array ke barabar hoti hai (agar asli me 4 items the, toh naye me bhi 4 hi rahenge).
// 2. Transformation: Iska main kaam data ka roop badalna (modify karna) hai.
// 3. Chainable: Iske turant baad tum .filter() ya koi aur method jod (chain) sakte ho.
