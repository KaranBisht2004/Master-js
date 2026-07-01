//03 _ COMPARISON OPERATORS CHEAT SHEET


// 1. Double Equal (==) -> Loose Equality (Sirf VALUE check karta hai, type nahi)
console.log(5 == "5");   // Output: true  -> (Kyunki dono side 5 hai, JS type ignore kar deta hai)


// 2. Triple Equal (===) -> Strict Equality (VALUE aur DATA TYPE dono check karta hai)
console.log(5 === "5");  // Output: false -> (Value 5 hai par ek number hai aur dusra string)
console.log(5 === 5);    // Output: true  -> (Value aur type dono same hain)


// 3. Not Equal (!=) -> Loose Inequality (Sirf check karta hai ki value alag hai kya)
console.log(5 != "5");   // Output: false -> (JS ke mutabik dono 5 hain, toh ye alag nahi hain)


// 4. Strict Not Equal (!==) -> Strict Inequality (Check karta hai value ya type kuch bhi alag hai kya)
console.log(5 !== "5");  // Output: true  -> (Haan, dono alag hain kyunki unka type alag hai)


// 5. Greater Than (>) aur Less Than (<)
console.log(10 > 5);     // Output: true
console.log(3 < 2);      // Output: false


// 6. Greater Than or Equal To (>=) aur Less Than or Equal To (<=)
console.log(10 >= 10);   // Output: true  -> (10 bada nahi hai par barabar toh hai)
console.log(5 <= 8);     // Output: true
