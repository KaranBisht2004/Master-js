const myarr = [1, 2, 3, 4, 5];

// 1. END OF ARRAY MODIFIERS 

myarr.push(6);     // Adds to the END
console.log(myarr); // [ 1, 2, 3, 4, 5, 6 ]

myarr.pop();        // Removes from the END
console.log(myarr); // [ 1, 2, 3, 4, 5 ]




// 2. BEGINNING OF ARRAY MODIFIERS

myarr.unshift(0);   // Adds to the START (shifts all indices +1)
console.log(myarr); // [ 0, 1, 2, 3, 4, 5 ]

myarr.shift();     // Removes from the START (shifts all indices -1)
console.log(myarr); // [ 1, 2, 3, 4, 5 ]




// 3. SEARCH & UTILITY METHODS

// .includes() -> Returns Boolean (true/false)
console.log(myarr.includes(5)); // true

// .indexOf() -> Returns index number, or -1 if not found
console.log(myarr.indexOf(2));  // 1

// .join() -> Converts array to String. Defaults to comma separator if empty.
const newarr = myarr.join(); 
console.log(newarr); // "1,2,3,4,5" (Type: String)





// 4. THE DEEP DIVE: SLICE VS SPLICE

/**
 * SLICE: slice(startIndex, endIndex)
 * - 🚫 Does NOT modify original array.
 * - 🚫 Does NOT include the 'endIndex' item (non-inclusive).
 */
let arrSlice = [0, 1, 2, 3, 4, 5, 6];
let slicedResult = arrSlice.slice(1, 4); 

console.log(slicedResult); // [ 1, 2, 3 ]   <- Elements at index 1, 2, and 3
console.log(arrSlice);     // [ 0, 1, 2, 3, 4, 5, 6 ] <- Original remains UNCHANGED


/**
 * SPLICE: splice(startIndex, deleteCount)
 * - ⚠️ MUTATES (changes) the original array.
 * - 🔢 The second argument is HOW MANY items to remove, not an index.
 */
let arrSplice = [0, 1, 2, 3, 4, 5, 6];
let splicedResult = arrSplice.splice(1, 4); 

console.log(splicedResult); // [ 1, 2, 3, 4 ] <- The 4 elements removed starting at index 1
console.log(arrSplice);     // [ 0, 5, 6 ]    <- Original array is now MODIFIED