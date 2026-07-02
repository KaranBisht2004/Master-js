let data = new Date();

console.log(data);                   // 2026-07-02T15:17:33.531Z (ISO Format string)
console.log(data.toString());         // Thu Jul 02 2026 21:09:41 GMT+0530 (India Standard Time)
console.log(data.toLocaleDateString()); // 7/2/2026 or 2026/07/02 (Depends on your system's region setting)

// Extracting specific units
console.log(data.getFullYear());     // 2026
console.log(data.getMonth());        // 6 (July - because counting starts from 0)
console.log(data.getDate());         // 2 (The day of the month)
console.log(data.getDay());          // 4 (Thursday - day of the week)

console.log(data.getHours());        // 21 (9 PM - uses 24-hour format)
console.log(data.getMinutes());      // 9
console.log(data.getSeconds());      // 41
console.log(data.getTime());         // 1783007381000 (Total milliseconds since Jan 1, 1970)

const convertMILLIsec = new Date(1783007381000)
console.log(convertMILLIsec.toString());//Thu Jul 02 2026 21:19:41 GMT+0530 (India Standard Time)



// Months of the Year (.getMonth())        Days of the Week (.getDay())
  
// 0 = January                             0 = Sunday
// 1 = February                            1 = Monday
// 2 = Tuesday                             2 = Tuesday
// 3 = April                               3 = Wednesday
// 4 = May                                 4 = Thursday
// 5 = June                                5 = Friday
// 6 = July                                6 = Saturday
// 7 = August
// 8 = September
// 9 = October
// 10 = November
// 11 = December

  let createData = new Date(2028, 10, 15, 10, 15, 20, 100);
//let createData = new Date(year, month, date, hours, minutes, seconds, milliseconds)

console.log(createData); 
// 2028-11-15T04:45:20.100Z

console.log(createData.toString());
// Wed Nov 15 2028 10:15:20 GMT+0530 (India Standard Time)
