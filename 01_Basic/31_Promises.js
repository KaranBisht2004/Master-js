// Promise ---

// JavaScript mein jab bhi koi kaam "time lene wala" hota hai, wahan Promise use hota hai.

// 1. Promise 
const orderPizza = new Promise((resolve, reject) => {
    let stockAvailable = true;

    console.log("Pizza prepare ho raha hai... (Pending State)");

    setTimeout(() => {
        if (stockAvailable) {
           
            resolve("Mil gaya!  Aapka pizza deliver ho chuka hai.");
        } else {
            
            reject("Oops!  Pizza out of stock hai.");
        }
    }, 2000); 
});

// 2. Promise ko consume/use karna
orderPizza
    .then((message) => {
        // .then tab chalta hai jab resolve() call hota hai
        console.log("Success: " + message);
    })
    .catch((error) => {
        // .catch tab chalta hai jab reject() call hota hai
        console.log("Error: " + error);
    })
    .finally(() => {
        // Ye hamesha chalega, chahe resolve ho ya reject
        console.log("Process khatam! Shukriya.");
    });




const promiseOne = new Promise((resolve, reject, onemsg) => {
    setTimeout(() => {
        console.log(`task is complete`);

        resolve(onemsg);

    }, 1000);
});


promiseOne.then((result) => {
    console.log(`promise done. Message aaya: ${result}`);
});

const a = new Promise((resolve, reject) => {

})


const checkEven = ((nums) => {

    return new Promise((resolve, reject) => {
        if (nums % 2 === 0) {
            setTimeout(() => resolve(`${nums} is Even Number`), 1000);
        }
        else {
            setTimeout(() => reject(`${nums} is odd Number`), 1000);
        }
    })

})

let number = checkEven(15)
number.then((resolve) => {
    console.log(resolve);
})
    .catch((err) => {
        console.log(err);
    })




const getUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { name: "Karan", role: "Developer" };
            
            if (user) {
                resolve(user);
            } else {
                reject("Data not found");
            }
            
        }, 2000); 
    });
};

getUser()
    .then((res) => {
        console.log(res.name); 
    })
    .catch((err) => {
        console.log(err);
    });