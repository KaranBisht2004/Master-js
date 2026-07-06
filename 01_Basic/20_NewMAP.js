//map

// 1. Map Kaise Banate Hain (Initialization)
const myMap = new Map();

// A. .set() -> Data add karne ke liye (Key, Value)
myMap.set("name", "Yash");      // String as a key
myMap.set(100, "Century");      // Number as a key (Object me ye nahi ho sakta!)
myMap.set(true, "Yes/No");     // Boolean as a key
console.log(myMap);

// B. .get() -> Key se value nikalne ke liye
console.log(myMap.get("name")); //  Output: Yash
console.log(myMap.get(100));    //  Output: Century


// C. .has() -> Check karne ke liye ki key exist karti hai ya nahi
console.log(myMap.has("name")); //  Output: true
console.log(myMap.has("gender")); //  Output: false

// D. .size -> Map me kitne items hain (Property hai, method nahi)
console.log(myMap.size); // 👉 Output: 3


// E. .delete() -> Kisi specific key-value ko hatane ke liye
myMap.delete(true); 

// F. .clear() -> Poore map ko ek baar me khali karne ke liye
// myMap.clear();

console.log(myMap);



const priceMap = new Map([
    ["Apple", 120],
    ["Banana", 60],
    ["Orange", 90]
]);

// Approach A: Destructuring karke Direct Key aur Value nikalna
for (const [fruit, price] of priceMap) {
    console.log(`${fruit} ki price hai Rs. ${price}`);
}


for (const fruit of priceMap.values()) {
    console.log(`Fruit Name: ${fruit}`);
}



const map = new Map()
map.set("IN", "India")
map.set("USA", "United States of America.")
map.set("FR", "France")

console.log(map);

for (const [key, value] of map) {
    console.log(`${key} :- ${value}`);
}


// OBJECT
const obj = { 100: "Century" }; 
console.log(Object.keys(obj)); // ["100"] (Number string ban gaya)
// obj.size -> Undefined 

// MAP
const map = new Map();
map.set(100, "Century"); 
console.log(map.has(100)); //  true (Number number hi raha)
console.log(map.size);     // 1  (Direct size mil gaya)