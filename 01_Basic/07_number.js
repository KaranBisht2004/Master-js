let kill = 5
console.log(kill); // Output: 5

let rollNo = new Number(2528)
console.log(rollNo); // Output: [Number: 2528] (Yeh ek Number Object hai)

console.log(rollNo.toString()); // Output: "2528" (Ab yeh string ban gaya)

console.log(rollNo.toFixed(2)); // Output: "2528.00" (Decimals fix karne ke liye)

let money = 10000000000
console.log(money.toLocaleString("en-IN")) // Output: 10,00,00,00,000 (Indian System ke hisab se commas lag gaye!)

let pi = 3.14159;
console.log(pi.toPrecision(3)); // Output: 3.14 (Total 3 digits chahiye)

let preciseNo = 123.896;
console.log(preciseNo.toPrecision(4)); // Output: 123.9 (Total 4 digits aur round off kar diya)

console.log(Number.MAX_VALUE); // Output: 1.7976931348623157e+308 (Bohot bada number)
console.log(Number.MIN_VALUE); // Output: 5e-324 (Sabse chhota positive number)


//Number.isInteger() — Check Karo Ki Number Normal Hai Ya Point Wala
console.log(Number.isInteger(25));   // Output: true
console.log(Number.isInteger(25.28)); // Output: false


let width = "500px";
let price = "19.99$";

// parseInt string se integer nikalta hai
console.log(Number.parseInt(width)); // Output: 500

// parseFloat point wala number nikalta hai
console.log(Number.parseFloat(price)); // Output: 19.99
//Note: Yeh dhyan rakhna ki number hamesha string ke shuruat me hona chahiye. Agar string "px500" hogi toh output NaN (Not a Number) aayega.