// JavaScript is a "dynamically typed" language. 
// Iska matlab variable banate waqt type batana nahi padta, JS khud samajh jata hai.


// ------------------------------------------
// CATEGORY 1: PRIMITIVE DATA TYPES (Simple)
// ------------------------------------------

// 1. String (Text value - hamesha quotes "", '' ya `` ke andar hoti hai)
const fullName = "Rahul Sharma"; 
const city = 'Delhi';


// 2. Number (Integers aur decimals dono isme aate hain)
const age = 22;          // Integer
const totalAmount = 99.50; // Decimal (Floating-point)


// 3. Boolean (Sirf do hi values ho sakti hain: true ya false)
// Use case: Haan ya Naa wale sawaal (e.g., Is the user logged in?)
const isEmailVerified = true;
const hasPremiumAccount = false;


// 4. Undefined (Variable bana diya par usme koi value nahi daali)
// JavaScript automatically iski value 'undefined' set kar deta hai.
let registrationDate;
console.log(registrationDate); // Prints: undefined


// 5. Null (Intentional emptiness - jab aap khud variable ko 'khaali' rakhna chahte ho)
// Note: 'undefined' matlab kuch set nahi kiya, 'null' matlab jaanbujhkar khaali chhoda.
const currentSessionToken = null; 


// 6. BigInt (Bohot bade numbers ke liye jo Number type handle nahi kar sakta)
// Number ke aakhiri mein 'n' lagane se vo BigInt ban jata hai.
const massiveNumber = 9007199254740991n;


// 7. Symbol (Unique aur private identifiers banane ke liye - Advance JS mein use hota hai)
const uniqueID = Symbol("id");


// ------------------------------------------
// CATEGORY 2: REFERENCE DATA TYPES (Complex)
// ------------------------------------------

// 8. Object (Key-Value pairs ka collection - Ek hi variable mein bohot saari details)
// Real-world example: Ek user ki saari information ek hi jagah store karna.
const userProfile = {
    firstName: "Amit",
    lastName: "Kumar",
    age: 24,
    isLoggedIn: true
};

// Accessing Object Data:
console.log(userProfile.firstName); // Prints: Amit


// [Bonus] Array (List of data - Ye bhi Object ka hi ek part hota hai)
// Jab aapko ek hi tarah ka data list mein store karna ho.
const topTrendingSkills = ["JavaScript", "Python", "React", "Node.js"];



