// 1. WHILE LOOP (Pehle Check, Phir Execute)

// Iteration variable loop ke BAHAR banta hai
let count = 1;

while (count <= 3) { //  Pehle condition check hogi
    console.log(`While Count: ${count}`);

    count++; //  VERY IMPORTANT: Increment/Decrement andar karna zaroori hai, 
    // nahi toh count hamesha 1 rahega aur infinite loop ban jayega!
}
// Output: 1, 2, 3


const animeList = ["Luffy", "Zoro", "Nami"]; 
let i = 0
while(i < animeList.length ){
console.log(animeList[i]);
i++
}



////// DO while Loop 

let i = 5;

do {
    console.log(`Do-While Execute hua: ${i}`);
    i++;
} while (i < 5); // Condition baad me check ho rahi hai aur yahan SEMICOLON (;) lagta hai!


let kill = 1
do {
    console.log(`kill ${kill}`);
    kill++
} while (kill <= 10);



const animes = ["Luffy", "Zoro", "Nami"]; 

let j = 0
do {
    console.log(animes[j]);
    j++
} while (j < animes.length);