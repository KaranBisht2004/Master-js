// 1. SELECTING ELEMENTS (Elements ko access karna)



// KAB USE KAREIN: Jab kisi unique element (jaise main container) ko select karna ho.
// CATCH: Ye hamesha CSS selectors (.class, #id, tag) ke basis par pehla matching element deta hai.
const parent = document.querySelector('.parent'); 



// KAB USE KAREIN: Jab ek sath ek hi class ke bahut saare elements par loop chalana ho.
// CATCH: Ye ek NodeList (array-like object) deta hai jisme .forEach() loop chala sakte hain.
const allMonths = document.querySelectorAll('.month'); 



// KAB USE KAREIN: Jab tumhare paas HTML me ek specific unique ID ho.
// CATCH: Ye querySelector se thoda zyada fast hota hai kyunki browser ID ko directly trace karta hai.
const mainWrapper = document.getElementById('parent-id'); 



// KAB USE KAREIN: Jab parent element mil chuka ho aur uske andar ke bache (child HTML tags) nikalne hon.
// CATCH: Ye HTMLCollection deta hai jise tum index ( parent.children[0]) se access karte ho.
const childDivs = parent.children; 






// 2. CREATING & INSERTING ELEMENTS (Naye tags banana aur screen par jodna)


// KAB USE KAREIN: Jab dynamic content banana ho (jaise kisi array ya API se data lekar card banana).
// CATCH: Ye element ko memory me khada karta hai, jab tak append nahi karoge tab tak page par nahi dikhega.
const newElement = document.createElement('div'); 


// KAB USE KAREIN: Jab naye banaye hue element ko container ke sabse aakhiri me (as a last child) jodna ho.
parent.appendChild(newElement); 

// KAB USE KAREIN: Jab naye element ko container ke sabse upar (as a first child) bhejhna ho.
// USE CASE: Naye notifications ya top banner lagane ke liye.
parent.prepend(newElement); 




// 3. MODIFYING CONTENT & ATTRIBUTES (Andar ka text aur properties badalna)


// KAB USE KAREIN: Jab element ke andar sirf normal text badalna ya insert karna ho.
// CATCH: Ye HTML tags ko render nahi karta, isliye secure hai (XSS attacks se bachata hai).
newElement.innerText = "January (Updated)"; 



// KAB USE KAREIN: Jab text ke andar tum HTML tags bhi parse karwana chahte ho.
// USE CASE: Kisi div ke andar poora naya paragraph ya span structure ek baar me injection ke liye.
newElement.innerHTML = "<strong>New Month</strong>"; 



// KAB USE KAREIN: Jab button ko disabled karna ho, image ka source ('src') badalna ho, ya links ('href') update karne hon.
// EXAMPLE: newElement.setAttribute('id', 'unique-month-card');
newElement.setAttribute('attributeName', 'value'); 




// 4. CLASS & STYLES MANIPULATION (Styling badalna)



// KAB USE KAREIN: Jab JavaScript ke through directly CSS lagani ho (jaise element hide/show karna).
// CATCH: Ye direct Inline CSS apply karta hai HTML tag par.
newElement.style.color = "red"; 
newElement.style.display = "block"; // Element ko dikhane ke liye



// KAB USE KAREIN: CSS class ko add karne ke liye (Best Practice: Inline style se humesha behtar hai).
// USE CASE: Hover state manually trigger karne ke liye ya theme change karne ke liye.
newElement.classList.add('active-card'); 



// KAB USE KAREIN: Kisi lagayi hui CSS class ko wapas hatane ke liye.
// USE CASE: Close button dabane par modal popup se 'show' class hatana.
newElement.classList.remove('active-card'); 




// 5 MASS MUTATION (Saare elements par ek sath action lena)


// KAB USE KAREIN: parent.children ek pure array nahi hota, isliye loop chala kar sabhi bacho par styling apply karte hain.
for (let i = 0; i < parent.children.length; i++) {
    // Ek-ek karke saare child elements ka color change ho jayega
    parent.children[i].style.color = "antiquewhite"; 
}