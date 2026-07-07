// Eilter

// Basic Example: Numbers ko filter karna (Sirf Even Numbers chahiye)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = numbers.filter((num) => {
    return num % 2 === 0; // Agar true hoga, toh naye array me jayega
});

console.log(evenNumbers); //  Output: [2, 4, 6, 8]
console.log(numbers);     //  Asli array bilkul safe hai: [1, 2, 3, 4, 5, 6, 7, 8]


//  2. Real-World Use Case: Array of Objects ko filter karna 

const codingLang = [
    { languageName: "JavaScript", type: "Frontend/Backend" },
    { languageName: "Python", type: "Data Science" },
    { languageName: "Java", type: "Backend" },
    { languageName: "C++", type: "System" }
];

// Maan lo hume sirf wo languages chahiye jo Backend me use hoti hain:
const backendLang = codingLang.filter((lang) => {
    return lang.type.includes("Backend"); 
});

console.log(backendLang);
/* 
   Output: 
  [
    { languageName: 'JavaScript', type: 'Frontend/Backend' },
    { languageName: 'Java', type: 'Backend' }
  ]
*/


//  3. THE BIG INTERVIEW TRAP: Agar koi item match na ho toh kya milega?

// "Agar filter ki condition kisi se match na kare, toh kya milega? null ya undefined?"
// Jawab hai: EK KHALI ARRAY `[]` Null ya undefined nahi milta.

const proLang = codingLang.filter(lang => lang.languageName === "Ruby");
console.log(proLang); // Output: [] (Empty Array)


//  SUMMARY 
// ---------------------------------------------------------------------------------
// 1. Returns New Array: Yeh humesha ek naya array return karta hai.
// 2. Pure Method: Asli array me koi badlav (mutation) nahi karta.
// 3. Callback Expectations: Iske callback function se hamesha ek boolean value (true/false) return honi chahiye.

