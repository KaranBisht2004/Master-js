// --- Object Create Karna ---

const home = Symbol("dwarka delhi")

const user = {
  name: "karan",
  age: "22",
  email: "kxrxnBisht@gmail.com",
  "school id": 15242,
  [home] : "dwarka delhi"
}

console.log(user[home]);// acces symbol



//==================================== Object Ko Read (Access) Karna ====================================

console.log(user); // { name: 'karan', age: '22', email: 'kxrxnBisht@gmail.com' }
console.log(user.email); //  kxrxnBisht@gmail.com
console.log(user["school id"])//15242



// ==================================== Freez and Seal ====================================

Object.freeze(user)// ---> Poori tarah Lock (No Add, No Delete, No Update)

Object.seal(user)// --> New property ADD nahi kar sakte, purani property DELETE nahi kar sakte, bs jo pehle se maujood (existing) values hain, unhe UPDATE kar sakte hain!



//==================================== printing only KEYS & VALUE ====================================

console.log(Object.keys(user));//[ 'name', 'age', 'email', 'school id' ]
console.log(Object.values(user));//[ 'karan', '22', 'kxrxnBisht@gmail.com', 15242 ]
console.log(Object.entries(user));//[[ 'name', 'karan' ],[ 'age', '22' ],[ 'email', 'kxrxnBisht@gmail.com' ],[ 'school id', 15242 ]]

console.log(user.hasOwnProperty("name"));//true
console.log(user.hasOwnProperty("school"));//false





//==================================== Object Me New Value Add Karna ====================================

user.phoneNO = 123456789
console.log(user); // {name: 'karan',age: '22',email: 'kxrxnBisht@gmail.com',phoneNO: 123456789}




//==================================== Object Ko Update Karna ====================================

user.age = 20
console.log(user); // { name: 'karan',  age: 20,  email: 'kxrxnBisht@gmail.com',  phoneNO: 123456789}




//==================================== Object Se Property Delete Karna====================================

delete user.email
console.log(user); // { name: 'karan', age: 20, phoneNO: 123456789 }

 

//====================================Object Destructuring ====================================

const { name, age } = user
console.log(name, age);//karan 20

const { name: username, age: userage } = user
console.log(username, userage);//karan 20



//==================================== Merging Objects ==========================

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };

// 1. Galat Tareeka (Yeh merge nahi karta, nested object bana deta hai)
const obj3 = { obj1, obj2 };
console.log(obj3);//{ obj1: { '1': 'a', '2': 'b', '3': 'c' }, obj2: { '4': 'd', '5': 'e', '6': 'f' }}


// 2. Sahi Tareeka (Using Object.assign)
// Empty {} dena best hai taaki original obj1 modify na ho
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// 3. Modern & Best Tareeka (Using Spread Operator)
const obj5 = { ...obj1, ...obj2 };
console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }



//==================================== DEEP COPY & SHALLOW COPY====================================

const user1 = {
  name: "karan",
  age: 22,
  address: {        // Yeh ek nested object hai
    city: "Delhi",
    pin: 110001
  }
};



// 1. SHALLOW COPY===========================================================================

// Spread operator (...) ka use karke shallow copy banayi.
// Isse top-level properties ('name', 'age') toh naye memory location me copy ho jati hain,
// par nested object ('address') ka purane object ke sath SAME memory reference (link) rehta hai.

const shallowUser = { ...user1 };

// Top-level property change ki: Yeh sirf 'shallowUser' me change hogi, 'user1' me nahi.
shallowUser.name = "Amit";

// Nested property change ki: Kyunki dono ka 'address' reference same hai, 
// isliye yeh 'shallowUser' ke sath-sath original 'user1' me bhi badal jayegi!
shallowUser.address.city = "UP";


console.log(user1);//{name: 'karan',age: 22,address: { city: 'UP', pin: 110001 } }

// shallowUser ko print karenge toh iska name "Amit" aur city "UP" dikhega.
console.log(shallowUser);//{ name: 'Amit',  age: 22,  address: { city: 'UP', pin: 110001 }}

console.log(shallowUser.name);
console.log(shallowUser.address.city);


// 2. DEEP COPY===========================================================================


// Modern JS ka tarika (structuredClone): Yeh poore object ko andar tak naya bana deta hai
const deepUser = structuredClone(user1);

// Purana/Alternative Tarika (Agar upar wala na chalana ho):
// const deepUser = JSON.parse(JSON.stringify(user1));

// --- CHANGES KARKE DEKHTE HAIN ---

// 1. Top-level property change ki
deepUser.name = "Amit";

// 2. Nested property change ki (Deep copy ki wajah se yeh bilkul safe hai)
deepUser.address.city = "UP";


// --- OUTPUT CHECK KARTE HAIN ---

// Original object check karo: Yeh bilkul pehle jaisa safe hai, isme kuch nahi badla!
console.log(user1);
/* Output:
{
  name: 'karan',
  age: 22,
  address: { city: 'Delhi', pin: 110001 }  <-- Dekho, 'Delhi' hi raha, safe hai!
}
*/

// Copy wala object check karo: Isme saare changes ho gaye hain
console.log(deepUser);
/* Output:
{
  name: 'Amit',
  age: 22,
  address: { city: 'UP', pin: 110001 }   <-- Sirf yahan 'UP' hua
}
*/



// ==================================== THIS ====================================

// Normal function =========================================
const myUSer = {
  name: "karan",
  age: 22,
  
  // Ek method (function) banaya object ke andar
  greet: function() {
    // Yahan 'this' ka matlab hai poora 'user' object khud!
    // to 'this.name' ka matlab hua 'user.name'
    console.log(`Hello, mera naam ${this.name} hai aur meri age ${this.age} hai.`);
  }
};

// Method ko call kiya
myUSer.greet(); 
// Output: Hello, mera naam karan hai aur meri age 22 hai.


// Arrow function =========================================
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