// for of


for (const item of iterable) {
    // Code jo chalega
}


const anime = ["Luffy", "Zoro", "Nami"];

// Puraane tarike me hum anime[i] karte the. 
// Yahan 'hero' variable me automatic ek-ek karke saare naam aayenge:
for (const hero of anime) {
    console.log(`Anime Character: ${hero}`);
}
// Output: 
// Anime Character: Luffy
// Anime Character: Zoro
// Anime Character: Nami



const msg = "JS";

for (const char of msg) {
    console.log(`Character: ${char}`);
}
// Output:
// Character: J
// Character: S



const user = { name: "Yash", age: 21 };
for (const value of Object.values(user)) {
    console.log(`Object Value: ${value}`); //  Output: Yash, Phir 21
}






