
// OBJECT-ORIENTED PROGRAMMING (OOP)



function user(username, userage, userid) {
    this.username = username;
    this.userage = userage;
    this.userid = userid;

    // return this
    return `${this} ${this.username} ${this.userage} ${this.userid}`// ye bhi likha improtant nhi hai
}

const userDetails = new user("karan" , 20 , "kxrxn")
const userDetailstwo = new user("yash" , 25 , "yashsss")
console.log(userDetails);
console.log(userDetailstwo);



// Jab aap likhte hain: const myObj = new Car();
// Toh background mein JS yeh 4 steps follow karta hai:

/*
  Step 1: Ek bilkul naya, khali object {} banta hai. (Isi ko INSTANCE kehte hain).
  Step 2: Yeh naya object apne Parent Class ke prototype se connect hota hai.
  Step 3: 'this' keyword ko is naye khali object {} par point kar diya jata hai.
  Step 4: Constructor chalte hi us khali object mein saari properties fill ho jati hain, aur object return ho jata hai.
*/

// Deep Example with Comments:

class Laptop {
    constructor(brand, ram) {
        // PEECHE KA KHEL (Behind the scenes):
        // 1. Ek khali object bana -> {} 
        // 2. 'this' ab is {} ko point kar raha hai.
        
        this.brand = brand; // {} khali tha, ab ho gaya -> { brand: "Dell" }
        this.ram = ram;     // Ab ho gaya -> { brand: "Dell", ram: "16GB" }
        
        // 3. Yeh filled object (Instance) automatic return ho jata hai.
    }
}

// Yahan 'myLaptop' ek INSTANCE hai jo 'new' ne pehle khali {} banakar shuru kiya tha:
const myLaptop = new Laptop("Dell", "16GB"); 

console.log(myLaptop); // Output: Laptop { brand: 'Dell', ram: '16GB' }



// 1. CLASS & OBJECT (Blueprint aur Instance)
// ------------------------------------------
// Class ek 'blueprint' (dhancha) hota hai aur Object uska ek actual 'instance' (real entity).
// JS mein classes 'Prototypes' ke upar bani hain (Syntactic Sugar).


class Car {
    constructor(brand, model) {
        this.brand = brand; // Property
        this.model = model; // Property
    }

    startEngine() { // Method
        return `${this.brand} ${this.model} ka engine start ho gaya!`;
    }
}

const myCar = new Car("Tata", "Nexon"); // Object creation
console.log(myCar.startEngine());


// 2. ENCAPSULATION (Data Hiding / Security)
// ------------------------------------------
// Data (properties) aur uske upar kaam karne wale functions (methods) ko ek single unit (class) mein bind karna.
// Taaki bahar se koi data ko directly galat tarike se change na kar sake.
// JS mein private properties ke liye '#' ka use hota hai.


class BankAccount {
    #balance; // '#' ka matlab hai yeh PRIVATE property hai, bahar se access nahi hogi

    constructor(owner, initialBalance) {
        this.owner = owner;
        this.#balance = initialBalance;
    }

    // Deposit karne ka sahi tarika (Validation ke sath)
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    // Private balance dekhne ke liye Getter method
    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount("Rahul", 5000);
account.deposit(2000);
// console.log(account.#balance); // ERROR! Yeh private hai, access nahi hoga.
console.log(account.getBalance()); // Sahi tarika: 7000



// 3. INHERITANCE (Code Reusability)
// ------------------------------------------
// Jab ek class (Child) kisi doosri class (Parent) ki properties aur methods ko inherit ( उधर ) karti hai.
// Iske liye 'extends' aur 'super()' keyword ka use hota hai.


class Animal { // Parent Class
    constructor(name) {
        this.name = name;
    }

    eat() {
        return `${this.name} khana kha raha hai.`;
    }
}

class Dog extends Animal { // Child Class
    constructor(name, breed) {
        super(name); // Parent class ke constructor ko call karta hai
        this.breed = breed;
    }

    bark() {
        return `${this.name} bhonk raha hai!`;
    }
}

const myDog = new Dog("Tommy", "German Shepherd");
console.log(myDog.eat());  // Parent ka method chal gaya (Inherited)
console.log(myDog.bark()); // Child ka apna method



// 4. POLYMORPHISM (Many Forms / Ek naam, alag kaam)
// --------------------------------------------------
// Poly = Many, Morphism = Forms. 
// Jab ek hi naam ka method alag-alag classes mein alag tarike se behave kare (Method Overriding).


class Bird {
    fly() {
        return "Zyadatar chidiyan ud sakti hain.";
    }
}

class Penguin extends Bird {
    fly() { // Method Overriding: Parent ke method ko badal diya
        return "Penguins ud nahi sakti, yeh tairti hain!";
    }
}

const sparrow = new Bird();
const penguin = new Penguin();

console.log(sparrow.fly()); // Output: Zyadatar chidiyan ud sakti hain.
console.log(penguin.fly()); // Output: Penguins ud nahi sakti... (Alag behavior)



// 5. ABSTRACTION (Hide Complexity / Simplicity)
// ---------------------------------------------
// Unnecessary details ko chhupa kar sirf zaroori chizen user ko dikhana.
// JS mein direct 'abstract' keyword nahi hota, par hum ise interfaces ya normal structure se achieve karte hain.
// Example: Aap car chalate ho toh accelerator dabate ho, andar engine kaise kaam kar raha hai woh aapko janne ki zaroori nahi hai.



// 1. Class/Object  -> Blueprint aur usse bana product.
// 2. Encapsulation -> Private variables (`#`) se data safe rakhna.
// 3. Inheritance   -> `extends` use karke purana code reuse karna.
// 4. Polymorphism  -> Same function name, par alag kaam (Overriding).
// 5. Abstraction   -> Complex details ko andar chhupa kar rakhna.


