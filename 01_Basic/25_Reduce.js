// Reduce


// 1. Basic Example: Array ke saare numbers ka Sum (Total) nikalna
const prices = [100, 200, 300, 400];

// Humne initialValue di hai: 0 (yaani ginti 0 se shuru hogi)
const totalBill = prices.reduce((acc, current) => {
    return acc + current;
}, 0);

console.log(totalBill); // Output: 1000  (100 + 200 + 300 + 400)


// ---------------------------------------------------------------------------------
//  (Dry Run Table)
// ---------------------------------------------------------------------------------
/*
  Round | Accumulator (Jhola) | CurrentValue (Item) | Return Value (New Acc)
  ------|---------------------|---------------------|------------------------
    1   |          0          |         100         |      0 + 100 = 100
    2   |        100          |         200         |    100 + 200 = 300
    3   |        300          |         300         |    300 + 300 = 600
    4   |        600          |         400         |    600 + 400 = 1000  (Final)
*/


// 2.  Array of Objects ka Total Expense nikalna
// ---------------------------------------------------------------------------------
const cart = [
    { product: "Vintage Hoodie", price: 1500 },
    { product: "Training Cleats", price: 2500 },
    { product: "Jordan Sneakers", price: 8000 }
];

// Cart ka total amount calculate karna:
const totalAmount = cart.reduce((total, item) => {
    return total + item.price;
}, 0); // initialValue 0 rakhna bohot zaroori hai yahan!

console.log(`Total Wallet Damage: Rs. ${totalAmount}`); //  Output: Rs. 12000



// 3.  Agar initialValue NA DEIN toh kya hoga?
// ---------------------------------------------------------------------------------
// Interviewer poochega: "Agar tumne end me ', 0' (initialValue) nahi lagaya, toh kya hoga?"
// Jawab: 
// - Agar simple number ka array hai, toh JS automatic Pehle Element (index 0) ko hi 
//   accumulator maan lega aur loop index 1 se shuru karega. (Chal jayega)
// - Lekin agar ARRAY OF OBJECTS hai (jaise cart wala upar) aur tumne 0 nahi lagaya, 
//   toh pehla loop poore object `{product:...}` ko price me jodne ki koshish karega aur 
//   tumhe error ya '[object Object]2500' jaisa kachra output milega! 
//  Rule: Safe rehne ke liye hamesha initialValue (0, [], ya {}) likha karo!
// =================================================================================