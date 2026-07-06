// for Loop



for (initialization; condition; increment/decrement) {
    // Code jo baar-baar chalega
}




for (let i = 0; i <= 5; i++) {
    console.log(`Round Number: ${i}`);
}




// Reverse Loop (Ghatte kram me - 5 se 1 tak)

for (let i = 5; i > 0; i--) {
    console.log(`Backward: ${i}`);
}



for(let i = 0 ; i <= 10 ; i++){
    console.log(`this is looop ${i}`);
}
//this is looop 0
//this is looop 1
//this is looop 2
//this is looop 3
//this is looop 4
//this is looop 5
//this is looop 6
//this is looop 7
//this is looop 8
//this is looop 9
//this is looop 10

for (let i = 0; i <= 10; i++) {
    console.log(`outter loop ${i}`);
    
   for (let j = 0; j <= 10; j++) {
    console.log(`inner loop value ${j}  inner loop ${i}`)
   }   
}





const animeList = ["Luffy", "Zoro", "Nami"]; //

for (let i = 0; i < animeList.length; i++) {
    console.log(`Character at index ${i} is: ${animeList[i]}`);
}





for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // Loop se bahar bhago!
    }
    console.log(`Break Test: ${i}`);
}
// Output: 1, 2 (3 aate hi loop band)








//  CONTINUE: Yeh current round ko skip karke seedha agle round par jump kar jata hai!
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // ⏭Is round ka bacha hua code skip karo, agle round pe chalo
    }
    console.log(`Continue Test: ${i}`);
}
// Output: 1, 2, 4, 5 (3 print nahi hua, skip ho gaya!)



