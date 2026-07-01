
// 01 _ ARITHMETIC OPERATORS 


// 1. ADDITION (+)
console.log(5 + 5);             // Output: 10      
console.log("Karan" + " Bisht"); // Output: "Karan Bisht"
console.log("5" + 5);           // Output: "55"  --->  Agar ek bhi string hai, toh jud kar text ban jayega


// 2. SUBTRACTION (-)
console.log(10 - 5);            // Output: 5   
console.log("Karan" - "Bisht"); // Output: NaN 
console.log("10" - 5);          // Output: 5  --->  Kuch cases mein JS text wale number ko khud convert kar leta hai


// 3. MULTIPLICATION (*)
console.log(4 * 2);   // Output: 8
console.log("5" * 2); // Output: 10  -> JS auto-converts "5" to number
console.log("A" * 2); // Output: NaN


// 4. DIVISION (/)
console.log(10 / 2); // Output: 5
console.log(5 / 0);  // Output: Infinity 


// 5. MODULUS (%) -> Remainder (Bacha hua hissa) dhoondta hai
console.log(11 % 3); // Output: 2 -> (3 * 3 = 9, bacha 2)
console.log(10 % 2); // Output: 0 -> (Poora divide ho gaya, bacha 0)


// 6. EXPONENTIATION (**) -> Power (vahi number utni baar multiply hoga)
console.log(2 ** 3); // Output: 8  -> (2 * 2 * 2)
console.log(5 ** 2); // Output: 25 -> (5 * 5)
