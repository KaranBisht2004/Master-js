console.log(Math); // Outputs the entire Math object with all its properties and methods

// Absolute Value (turns negative numbers positive)
console.log(Math.abs(-5)); // 5
console.log(Math.abs(5));  // 5

// Rounding Methods
console.log(Math.round(5.6)); // 6 (Rounds to the nearest integer)
console.log(Math.ceil(5.1));  // 6 (Always rounds UP)
console.log(Math.floor(5.9)); // 5 (Always rounds DOWN)

// Finding Min and Max values
console.log(Math.min(6, 2, 1, 51)); // 1
console.log(Math.max(6, 2, 1, 51)); // 51


// ==========================================
// 2. Random Number Generation
// ==========================================

// Generates a decimal between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); 

// Single digit numbers (0 to 9)
console.log(Math.floor(Math.random() * 10));

// Dice roll simulation (1 to 6)
console.log(Math.floor((Math.random() * 6) + 1));



// ==========================================
// 3. Ranged Random Numbers
// ==========================================

const minRange = 100;
const maxRange = 1000;

// Universal formula for a random number between a min and max (inclusive)
console.log(Math.floor(Math.random() * (maxRange - minRange + 1) + minRange));

// Hardcoded shortcut for a 3-digit number (100 to 999)
console.log(Math.floor((Math.random() * 900) + 100));


// ==========================================
// 4. OTP Generators (4-Digit)
// ==========================================

// Method A: Using the Range Formula (1000 to 9999)
console.log(Math.floor(Math.random() * (9999 - 1000 + 1) + 1000));
