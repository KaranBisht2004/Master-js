let myName = "yash"
let age = 18
console.log("my name is", myName, "im", "age years old");

// string interpolation
console.log(`my name is ${myName} im ${age} years old `);

// ways to declaration of string

let aName = "yash"    // --> 1
let bName = new String("yash")   // --> 2

console.log(aName);// Output : yash
console.log(bName);// Output : [String: 'yash']



// String properties (prototype) 

let a = "ABCDEF";

console.log(a[0]);// Output : A
console.log(a[0],a[1]);// Output : A B ---> This Wrong


console.log(a.toLowerCase()); // Output : abcdef



// 3. The .length property (counts the characters)
console.log(a.length); // Output: 6



// 4. Getting a subsection of the string
console.log(a.slice(1, 4)); // Output: BCD (Starts at index 1, stops before index 4)



// 5. Checking if a string contains a character
console.log(a.includes("C")); // Output: true




console.log(a.charAt(5));// Output : F




console.log(a.indexOF("B"))// Outut : 1




let hello = "      hello    "
console.log(hello); // Output :       hello    
console.log(hello.trim());// Output : hello    



let b = "QWERTY"
console.log(b.replace('Q' , 'a'));



let url = "https://google.com";
let file = "video.mp4";

// startsWith() -> true/false deta hai
console.log(url.startsWith("https")); // Output: true
console.log(url.startsWith("http"));  // Output: true
// endsWith() -> true/false deta hai
console.log(file.endsWith(".mp4"));   // Output: true
console.log(file.endsWith(".png"));   // Output: false



let emoji = "A";
console.log(emoji.repeat(5)); // Output: AAAAA



let str = "JavaScript";
// slice me minus value dene par yeh peeche se ginta hai
console.log(str.slice(-5)); // Output: Script (Peeche ke 5 characters)
// Ek aur hota hai: substring() -> Yeh minus numbers ko 0 maan leta hai
console.log(str.substring(-3, 4)); // Output: Java (Minus ko 0 bana diya, toh 0 se 4 tak chala)



let alpha = "ABC";
// charCodeAt(index) -> us index ke character ka Unicode/ASCII code deta hai
console.log(alpha.charCodeAt(0)); // Output: 65 ('A' ka code 65 hota hai)
console.log(alpha.charCodeAt(1)); // Output: 66 ('B' ka code 66 hota hai)


let word = "YASH";
let lettersArray = word.split(""); 
console.log(lettersArray); // Output: ['Y', 'A', 'S', 'H']