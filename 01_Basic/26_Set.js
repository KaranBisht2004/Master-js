
// Set


// 1. Set Kaise Banate Hain (Initialization)
const mySet = new Set();

// 2. SET KE MAIN METHODS (CRUD Operations)


// A. .add() -> Data add karne ke liye
mySet.add("JavaScript");
mySet.add("Python");
mySet.add("JavaScript"); // Dobara add kiya, par Set ise IGNORE kar dega!

// B. .has() -> Check karne ke liye ki value exist karti hai ya nahi
console.log(mySet.has("JavaScript")); // Output: true
console.log(mySet.has("Java"));       //  Output: false

// C. .size -> Set me kitne unique items hain (Property hai, .length nahi hota!)
console.log(mySet.size); // Output: 2 (Kyunki ek JavaScript ud gaya)

// D. .delete() -> Kisi specific item ko hatane ke liye
mySet.delete("Python"); 

// E. .clear() -> Poore set ko ek baar me khali karne ke liye
// mySet.clear();


// 3. SET PAR LOOP CHALANA (Iterating Over a Set)

// Set par loop chalana bohot easy hai, hum `for...of` ya `.forEach()` dono use kar sakte hain.

const fruitsSet = new Set(["Apple", "Banana", "Orange"]);

for (const fruit of fruitsSet) {
    console.log(`Fruit: ${fruit}`);
}



//  4. Array se Duplicates Hatana (1 Line Me)

const duplicateNumbers = [1, 2, 2, 3, 4, 4, 4, 5];

// Step A: Array ko Set me badlo (saare duplicates khud ud jayenge)
// Step B: Spread Operator (...) use karke wapas Array bana lo
const uniqueNumbers = [...new Set(duplicateNumbers)];

console.log(uniqueNumbers); //  Output: [1, 2, 3, 4, 5] 
