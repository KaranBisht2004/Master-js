//  Puraani approach bina 'this' ke
const customer = { // <-- Variable ka naam badal kar customer kar diya
    name: "yash",
    greeting: function () {
        // Yahan error aa jayega kyunki ab 'user' naam ka koi variable hi nahi bacha!
        console.log(`hello ${user.name} welcome to website`);
    }
}
customer.greeting(); // Crash! ReferenceError: user is not defined




// use of this----------------------------------------------------

function shareableGreeting() {
    console.log(`hello ${this.name} welcome to website`);
}

const user1 = {
    name: "Yash",
    greeting: shareableGreeting
};


const user2 = {
    name: "Amit",
    greeting: shareableGreeting
};


user1.greeting(); // hello Yash welcome to website
user2.greeting(); // hello Amit welcome to website


// use of thisin arrow function ----------------------------------------------------

const myUSer2 = {
    name: "amit",

    // Arrow function use kiya:
    greetArrow: () => {
        // Arrow function ka apna 'this' nahi hota! 
        // Yeh bahar (global window) me dekhne lagta hai jahan 'name' nahi milega.
        console.log(`Mera naam ${this.name} hai.`);
    }
};

myUSer2.greetArrow();
// Output: Mera naam undefined hai. (Kyunki arrow function me 'this' kaam nahi kiya!)





//  Constructor Function / Class Mein `this` ----------------------------------------------------

// Jab hum 'new' keyword ka use karke naya object banate hain, 
// toh 'this' us naye banne wale object ko point karta hai.

function Person(username) {
    this.username = username; // 'this' naye bande ko point karega
}

const person1 = new Person("Salman");
console.log(person1.username); // Output: Salman


// in node environment 
console.log(this);//{}


// in browser
console.log(this) // VM121:1 Window {window: Window, self: Window, document: document, name: '', location: Location, …}






//QUICK SUMMARY CHEAT SHEET FOR INTERVIEWS
// ---------------------------------------------------------------------------------
// 1. Khule mein (Global)         -> window (Browser) ya {} (Node.js)
// 2. Object ke normal method mein -> Wahi object jiske saath call hua (Left of dot)
// 3. Arrow Function mein         -> Apne parent se udhaar leta hai (Lexical context)
// 4. 'new' keyword ke saath      -> Ekdum naya khali object jo abhi-abhi bana hai
