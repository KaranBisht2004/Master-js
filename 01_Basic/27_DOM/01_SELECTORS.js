//  DOM SELECTORS 

//  SECTION 1: MODERN SELECTORS 

/**
 * 1. document.querySelector()
 * ----------------------------------------
 * - Kya karta hai: Page par dhoondhta hai aur Pehla matching element return karta hai.
 * - Return Type: Single HTML Element Object (Agar kuch na mile toh: 'null').
 * - Kab Use Karein: Jab element pure page par unique ho (Navbar, Header, Footer, Unique ID).
 */
const mainHeading = document.querySelector("#main-title");    // ID ke liye '#' compulsory hai
const primaryBtn  = document.querySelector(".btn-submit");    // Class ke liye '.' compulsory hai
const firstPara   = document.querySelector("div > p");         // Advanced CSS Selector bhi valid hai

// Example Use:
if (mainHeading) {
    mainHeading.innerText = "Modern DOM Selector!";
}


/**
 * 2. document.querySelectorAll()
 * ----------------------------------------
 * - Kya karta hai: Page par maujood saare matching elements ko utha lata hai.
 * - Return Type: NodeList (Yeh ek Array-like object hai jispar direct .forEach() chal sakta hai).
 * - Kab Use Karein: Jab multiple elements par loop chalana ho 
 */
const allCards = document.querySelectorAll(".project-card");


allCards.forEach((card, index) => {
    card.style.border = "1px solid orange";
});



//  SECTION 2: TRADITIONAL SELECTORS 

/**
 * 3. document.getElementById()
 * ----------------------------------------
 * - Kya karta hai: Direct ID ke naam se element ko target karta hai.
 * - Return Type: Single HTML Element Object.
 * - Note: Isme '#' nahi lagaya jata, sirf raw string pass karni hoti hai.
 * - Kab Use Karein: Jab microsecond performance matter karti ho (Kyunki yeh querySelector se microscopic level par fast hai).
 */
const saveBtn = document.getElementById("save-profile-btn");


/**
 * 4. document.getElementsByClassName()
 * ----------------------------------------
 * - Kya karta hai: Us class name ke saare elements ka jhund le aata hai.
 * - Return Type: HTMLCollection ( Yeh asli array nahi hai, ispar direct .forEach() NAHI chalta!).
 * - Kab Use Karein: Aaj ke zamane me ise avoid kiya jata hai, querySelectorAll best option hai.
 */
const tagsHTMLCollection = document.getElementsByClassName("tech-tag");

//  Error Trap: tagsHTMLCollection.forEach(...) karne par crash ho jayega!
//  Sahi Tarika: Pehle ise Array me badlo:
const tagsArray = Array.from(tagsHTMLCollection);
tagsArray.forEach(tag => tag.style.color = "blue");


/**
 * 5. document.getElementsByTagName()
 * ----------------------------------------
 * - Kya karta hai: Direct HTML tags (h1, div, p, button) ke basis par saare elements uthata hai.
 * - Return Type: HTMLCollection.
 */
const allImages = document.getElementsByTagName("img");


//  (NodeList vs HTMLCollection)
/*
  "querySelectorAll se jo milta hai aur getElementsByClassName se 
  jo milta hai, dono me kya farq hai?"
  
  1. querySelectorAll hume 'NodeList' deta hai, jispar direct .forEach() chala sakte hain.
     Yeh Static hoti hai (agar baad me HTML me koi naya element jude, toh isme automatic add nahi hota).
     
  2. getElementsByClassName hume 'HTMLCollection' deta hai, jispar direct .forEach() nahi chal sakta.
     Yeh Live hoti hai (agar JavaScript se naya element HTML me add ho jaye, toh yeh automatic update ho jati hai).
*/


// - Single element pakadna hai (ID/Class)  ==>  document.querySelector()
// - Saare cards/buttons ko pakadna hai     ==>  document.querySelectorAll()
// - Ultra fast sirf ek ID target karni hai ==>  document.getElementById()
