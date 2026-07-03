
/*Arrays MUTABLE means Arrays is "non-primitive" datatype, Hum original array ko directly change kar sakte hain kyunki ye 
  memory me reference ke basis par kaam karte hain.*/

const myarr = [1, 2, 3, 4, 5];

console.log(myarr.length);//5



// ---- Replacing Array valu

let a = [1, 2, 3, 4, 5]
a[0] = "replace"
console.log(a);




// ---- END OF ARRAY MODIFIERS 

myarr.push(6);     // Adds to the END
console.log(myarr); // [ 1, 2, 3, 4, 5, 6 ]

myarr.pop();        // Removes from the END
console.log(myarr); // [ 1, 2, 3, 4, 5 ]




// ---- BEGINNING OF ARRAY MODIFIERS

myarr.unshift(0);   // Adds to the START (shifts all indices +1)
console.log(myarr); // [ 0, 1, 2, 3, 4, 5 ]

myarr.shift();     // Removes from the START (shifts all indices -1)
console.log(myarr); // [ 1, 2, 3, 4, 5 ]




// ---- SEARCH & UTILITY METHODS

// .includes() -> Returns Boolean (true/false)
console.log(myarr.includes(5)); // true

// .indexOf() -> Returns index number, or -1 if not found
console.log(myarr.indexOf(2));  // 1

// .join() -> Converts array to String. Defaults to comma separator if empty.
const newarr = myarr.join();
console.log(newarr); // "1,2,3,4,5" (Type: String)





// ---- THE DEEP DIVE: SLICE VS SPLICE

/**
 * SLICE: slice(startIndex, endIndex)
 * -  Does NOT modify original array.
 * -  Does NOT include the 'endIndex' item (non-inclusive).
 */
let arrSlice = [0, 1, 2, 3, 4, 5, 6];
let slicedResult = arrSlice.slice(1, 4);

console.log(slicedResult); // [ 1, 2, 3 ]   <- Elements at index 1, 2, and 3
console.log(arrSlice);     // [ 0, 1, 2, 3, 4, 5, 6 ] <- Original remains UNCHANGED


/**
 * SPLICE: splice(startIndex, deleteCount)
 * -  MUTATES (changes) the original array.
 * -  The second argument is HOW MANY items to remove, not an index.
 */
let arrSplice = [0, 1, 2, 3, 4, 5, 6];
let splicedResult = arrSplice.splice(1, 4);

console.log(splicedResult); // [ 1, 2, 3, 4 ] <- The 4 elements removed starting at index 1
console.log(arrSplice);     // [ 0, 5, 6 ]    <- Original array is now MODIFIED


// ---- concat operator

let arr1 = [0, 1, 2, 3, 4]
let arr2 = [5, 6, 7, 8, 9]

const arr3 = arr1.concat(arr2)
console.log(arr3);


// --- spread operator
const arr4 = [...arr1, ...arr2]
console.log(arr4);


// --- sorting 
let names = ["daniel", "bob", "elvin", "charlie", "alex", "elvin", "frank"]
console.log(names);
// console.log(names.sort());//sort user aski table 


// --- revers

console.log(names.reverse());//['frank',  'elvin','alex',   'charlie','elvin',  'bob','daniel']


// --- Flating Array
let arrNUM1 = [1, 2, 3, [4, 5, 6, [7, 8], 9, 10], 11, 12];
console.log(arrNUM1.flat());//[ 1, 2, 3, 4, 5, 6, [ 7, 8 ], 9, 10, 11, 12 ]
console.log(arrNUM1.flat(Infinity));//[1,  2, 3, 4,  5,6,  7, 8, 9, 10,11, 12]


// changeing into Arry

let games = "valorant"
console.log(Array.isArray(games));//false 
console.log(Array.from(games));//['v', 'a', 'l','o', 'r', 'a','n', 't']
console.log(Array.of(games));//[ 'valorant' ]


