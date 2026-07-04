// FUNCTIONS

// 1. Function ek box hai jisme kuch code likh kar, us box ko kahi bhi aur baar-baar use kar sakte hain.
// Isse hume same code baar-baar nahi likhna padta (Code Reusability).

function gretting() {// Makeing Function 
    console.log("hello im Function");
}

gretting()//calling function


//Parameters
function twoNumber(num1, num2) {// num1 & num2 is Parameters
    console.log(num1 + num2);
}

//argument
twoNumber(5, 2)



// (Default Parameters)
// Agar galti se koi argument na bheje, toh error se bachne ke liye hum pehle se default value set kar sakte hain.
function sayHi(username = "Guest") { // Agar username nahi aaya, toh "Guest" chalega
    console.log(`Hello ${username}`);
}

sayHi("Karan"); // Output: Hello Karan
sayHi();        // Output: Hello Guest 





//=========================================== Rest operator ===========================================

// saare bache hue arguments ko ek Array me pack kar deta hai.
function sum(...num) {
    // Agar hum yahan console.log(num) karein, toh output dikhega: [2, 2, 5, 10] (Array)

    let total = 0;

    // Kyunki 'num' ek array hai, hume ispar loop chalakar ek-ek karke jodna hoga
    for (let n of num) {
        total += n// Ek-ek karke saare numbers add ho rahe hain(total = total + n)
    }

    console.log(total);
}

// Ab aap isme jitne chahe utne numbers bhej sakte ho!
sum(2, 2);         // Output: 4
sum(10, 20, 30);   // Output: 60 (Yeh sabko samet lega)



//=========================================== return ===========================================

// Q1: KYUN USE KARTE HAIN?
// -> console.log() sirf screen par dikhata hai (save nahi karta).
// -> return function ke result (output) ko BAHAR nikalta hai taaki variable me SAVE karke aage use kar sakein.

function makeJuice(fruit) {
    return `${fruit} Juice`; // Juice banakar bahar bhej diya
    console.log("Yeh nahi chalega"); // Return ke baad function wahi ruk jata hai!
}

const myGlass = makeJuice("Mango"); // Result variable me SAVE ho gaya
console.log(myGlass); // Output: Mango Juice


//=========================================== Arrow Function ===========================================

const addNumbers = ((a, b) => {
    return a + b
})
console.log(addNumbers(5, 10));//15

// Agar code sirf ek line ka hai, toh {} aur 'return' dono hata do. JS apne aap return kar dega.
const addNumbersV2 = ((a, b) => a + b)
console.log(addNumbersV2(5, 10));//15

// // Agar function me sirf AUR sirf EK hi parameter ho, toh () bracket lagane ki koi zaroorat nahi hai.
const addNumbersV3 = (a => a + a)
console.log(addNumbersV3(5));//10

const sayHi = () => console.log("Hi"); // Zero parameter: Bracket zaroori hai!



//=========================================== Object in function ===========================================

const userDetail = {
    username: "karan",
    age: 21
}
const objFunction = ((userDetail) => {
    console.log(`Hello my name is ${userDetail.username} and im ${userDetail.age} old`);
    //Hello my name is karan and im 21 old
})
objFunction(userDetail) // ---> 1 way

objFunction({           // --- 2 way
    username: "karan",
    age: 21
})


const modernObjFunction = ({ username, age }) => {// ---> 3 way
    console.log(`Hello my name is ${username} and im ${age} old`);
};
modernObjFunction(userDetail);



//=========================================== Array in function ===========================================
 
const myArr = [1,2,3,4,5,6,7]

const arrFunction = ((getArr)=>{// ---> 1 way
return getArr[0+5] 
})
console.log(arrFunction(myArr));

console.log(arrFunction([1,2,3,4,5,6,7]));// ---> 2 way

const modernArrFunction = ([firstElement, secondElement]) => {// ---> 3 way
    console.log(`Pehla element hai ${firstElement} aur doosra hai ${secondElement}`);
};
modernArrFunction(myArr);
