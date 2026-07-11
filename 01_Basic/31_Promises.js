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


let firstPromise = new Promise((resolve, reject) => {
    console.log(`hello`);
})

console.log(firstPromise);//Promise { <pending> }



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




function validateUser(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin") {
                resolve(101);
            } else {
                reject("User Unauthorized! ");
            }
        }, 1000);
    });
}

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 101) {
                resolve("Zoro");
            } else {
                reject("User ID not found! ");
            }
        }, 1500);
    });
}

function showWelcomeMessage(name) {
    console.log(`Welcome back, ${name}! `);
}


validateUser("admin")
    .then((userId) => {
        console.log(`Step 1 Complete: User valid hai, ID mili: ${userId}`);
        return fetchUserData(userId);
    })
    .then((name) => {
        console.log(`Step 2 Complete: Data aa gaya, Naam mila: ${name}`);
        return showWelcomeMessage(name);
    })
    .catch((error) => {

        console.log("Error caught in chain:", error);
    });






function unstableNetworkCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccessful = Math.random() > 0.5;
            if (isSuccessful) {
                resolve("Data fetched successfully! ");
            } else {
                reject("Network Timeout/Error ");
            }
        }, 1000);
    });
}

async function retryMechanism(maxRetries) {

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(`Attempt ${attempt}: Network call try kar rahe hain...`);

            const result = await unstableNetworkCall();


            console.log(`Success mil gayi!`);
            return result;

        } catch (error) {
            console.log(`Attempt ${attempt} fail ho gaya: ${error}`);


            if (attempt === maxRetries) {
                throw new Error(`Saare ${maxRetries} attempts khatam! Network permanent down hai.`);
            }

            console.log("Phir se try kar rahe hain...\n");
        }
    }
}


console.log("Starting Operations...\n");

retryMechanism(3)
    .then((finalResult) => {
        console.log("FINAL STATUS: ", finalResult);
    })
    .catch((finalError) => {
        console.log("FINAL STATUS: ", finalError.message);
    });




const processPayment = ((amount) => {
    return new Promise((resolve, reject) => {
        if (amount > 0) {
            setTimeout(() => {
                return resolve(`Payment of ₹${amount} Successful!`)
            }, 1000);
        }
        else{
            return reject (`Invalid Amount! Transaction Failed.`)
        }
    })
})

processPayment(100)
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
console.log(err );
})