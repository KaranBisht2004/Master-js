
//`forEach` LOOP

// 1. Basic Example (Arrow Function ke sath - Modern Way)
const users = ["Luffy", "Zoro", "Nami"];

// Har round me 'hero' variable me ek-ek karke naam aayega
users.forEach((hero) => {
    console.log(`Anime Character: ${hero}`);
});


//  2. Index aur Poore Array Ka Access Lena

const prices = [100, 200, 300];

prices.forEach((price, index) => {
    console.log(`Item No: ${index} ki price hai Rs. ${price}`);
});
/* 
   Output:
  Item No: 0 ki price hai Rs. 100
  Item No: 1 ki price hai Rs. 200
  Item No: 2 ki price hai Rs. 300
*/



//3. THE BIG INTERVIEW TRAP: `break` aur `continue` Ka Siyapa!

// Yeh interview me 100% poocha jata hai: "Kya forEach me loop beech me rok sakte hain?"
// Jawab hai: BILKUL NAHI! 

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
    if (num === 3) {
        // break;     // SyntaxError: 'break' nahi chalega yahan!
        // continue;  // SyntaxError: 'continue' bhi nahi chalega!
    }
    console.log(num);
});
// Note: Agar loop ko beech me todna (break) zaroori hai, toh normal 'for' ya 'for...of' loop use karo.



// 4. Return Value (Kya yeh naya array deta hai?)

// forEach hamesha 'undefined' return karta hai. Yeh asli array me badlav nahi karta, 
// aur na hi koi naya array banakar deta hai (Yeh kaam map() ka hota hai).

const double = numbers.forEach((num) => {
    return num * 2; 
});
console.log(double); //  Output: undefined  (Kyunki forEach return nahi leta)




const codingLang = [
    {
        languageName: "JavaScript"
    },
    {
        languageName: "Python"
    },
    {
        languageName: "Java"
    },
    {
        languageName: "C++"
    },
    {
        languageName: "TypeScript"
    }
];

codingLang.forEach(( item )=>{
console.log(item.languageName);
})


// QUICK SUMMARY 
// ---------------------------------------------------------------------------------
// 1. Target: Sirf Arrays, Maps aur Sets par chalta hai. Normal Object {} par nahi chalta.
// 2. Control: Isme se loop beech me se tod kar bhag nahi sakte (No break/continue).
// 3. Return: Iska return hamesha 'undefined' hota hai, iska kaam bas har item par koi action perform karna hai.
