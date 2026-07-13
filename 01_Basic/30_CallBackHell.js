// what is Synchronous 
// Jab tak ek line ka kaam poora nahi hota, tab tak code aage nahi badhta. Pura program wahi ruk jata hai (Isse Blocking kehte hain).


function data() { // this is synchronous code
    console.log('1 console.log')
    console.log('2 console.log')
    console.log('3 console.log')
    console.log('4 console.log')
    console.log('5 console.log')
    console.log('6 console.log')
}
data()


// what is Asynchronous
//code ek bhaari kaam (jaise internet se data download karna) ko background me daal deta hai aur khud aage badh jata hai. Jab wo data download ho jata hai, toh ek notification (jise coding me Callback, Promise, ya Async/Await kehte hain) aata hai aur wo kaam poora ho jata hai. Isse aapka app ya website freeze nahi hoti (Isse Non-Blocking kehte hain).

function asyncData() {  // this is Asynchronous code
    console.log('1 console.log');
    console.log('2 console.log');
    // Yeh async kaam hai 
    // 3000 ka matlab hai 3 seconds ka delay
    setTimeout(() => {
        console.log('3 console.log (Heavy task completed!)');
    }, 3000);

    console.log('4 console.log');
    console.log('5 console.log');
    console.log('6 console.log');
}
asyncData();


// this callback hellllll
const checkInventory = ((callback) => {
    setTimeout(() => {
        console.log('checking inventory');
        callback()
    }, 2000);
})

const checkOrder = ((callback) => {
    setTimeout(() => {
        console.log('creating a order');
        const error = new Error("order creation failed.");
        callback(error)
    }, 1000)
})

const chargingPayment = ((callback) => {
    setTimeout(() => {
        console.log('charing the payment');
        let error = null
        let chargeAmount = 100
        callback(error , chargeAmount)
    }, 2000)
})

const sendInvoice = ((callback) => {
    setTimeout(() => {
        console.log('Sending invocie');
        callback()
    }, 1000);
})

const main = (() => {
    checkInventory(() => {
        checkOrder((error) => {
            if (error) {
                console.log(error);
            }
            chargingPayment((error , chargeAmount) => {
                if(error){
                    console.log("heanding error");
                    return;
                }
                console.log("charge Amount",chargeAmount);
                sendInvoice(() => {
                    console.log("all done");// this callback hell (pyramid of doom)
                })
            })
        })
    })
    console.log('other requst processing....');
})
main()

const inventory = [
    { id: 101, name: 'iPhone', stock: 3, price: 1000 },
    { id: 102, name: 'Samsung', stock: 0, price: 800 }
];


const checkStock = (productId, reqQuantity, callback) => {

    const product = inventory.find(p => p.id === productId);

    if (!product) {
        console.log(" Product not found!");
        return;
    }

    if (product.stock >= reqQuantity) {
        setTimeout(() => {
            console.log(` ${product.name} is in stock!`);
            callback(product);
        }, 1000);
    } else {
        console.log(` Sorry, ${product.name} is Out of Stock!`);
    }
};

const applyDiscount = (product, callback) => {
    setTimeout(() => {
        let finalPrice = product.price;

        if (product.price >= 500) {
            let discount = (product.price * 10) / 100;
            finalPrice = product.price - discount;
            console.log(`10% Discount Applied on ${product.name}! Saved: $${discount}`);
        } else {
            console.log(`No discount applicable for ${product.name}.`);
        }

        callback(finalPrice);
    }, 1500);
};

const generateBill = (finalPrice) => {
    setTimeout(() => {
        console.log(` Your final bill is $${finalPrice}. Thank you for shopping!`);
    }, 2000);
};

checkStock(101, 1, (product) => applyDiscount(product, generateBill));




const connectCharger = ((callback) => {

    console.log("Charger connected..");

    setTimeout(() => {
        console.log("Battery status OK!");
        callback()
    }, 1000);
})


const downloadUpdate = ((callback) => {

    console.log("Downloading system update...")

    setTimeout(() => {
        console.log("Update downloaded successfully!");
        callback()

    }, 2000);

})

const installUpdate = (() => {
    console.log("Installing update... System Rebooting!");
})

connectCharger(() => downloadUpdate(() => installUpdate()))



const boilWater = ((callback) => {

    console.log("Water is boiling...");

    setTimeout(() => {
        console.log('Water is hot!');
        callback()
    }, 1500);

})

const addCoffeeBeans = ((callback) => {

    console.log("Grinding and mixing coffee beans...");

    setTimeout(() => {
        console.log("Coffee mixture is ready!");
        callback()
    }, 2000);

})

const pourInCup = (() => {
    console.log("Pouring coffee into the cup. Enjoy your hot coffee!");
})

boilWater(() => addCoffeeBeans(pourInCup))




const users = [
    { id: "u1", name: "Rahul", email: "rahul@mail.com", isVerified: true },
    { id: "u2", name: "Amit", email: "amit@mail.com", isVerified: false },
];

const plans = [
    { type: "Premium", price: 650, currency: "INR" },
    { type: "Standard", price: 499, currency: "INR" }
];

const authenticateUser = (userId, callback) => {
    let user = users.find(netFilxUser => netFilxUser.id === userId);

    if (!user) {
        console.log("User not found!");
        return;
    }

    if (!user.isVerified) {
        console.log(' Account not verified! Please verify email first.');
        return;
    }

    setTimeout(() => {
        console.log(` User Authenticated: ${user.name}`);
        callback(user);
    }, 1000);
};

const selectPlanAndApplyTax = (userObj, planType, callback) => {
    let userplan = plans.find(planid => planid.type === planType);

    if (!userplan) {
        console.log(" Invalid Plan Type Chosen!");
        return;
    }

    setTimeout(() => {
        let tax = userplan.price * 0.18;
        let totalAmount = userplan.price + tax;

        console.log(` Plan Selected: ${userplan.type} (Base: ₹${userplan.price} + GST: ₹${tax})`);

        let paymentDetails = {
            userName: userObj.name,
            finalAmount: totalAmount
        };

        callback(paymentDetails);
    }, 1500);
};

const processPayment = (paymentDetails) => {
    setTimeout(() => {
        console.log(`Processing payment of ₹${paymentDetails.finalAmount} for ${paymentDetails.userName}...`);
        setTimeout(() => {
            console.log(" Subscription Activated! Welcome to Netflix Premium! ");
        }, 1000);
    }, 2000);
};


authenticateUser("u1", (user) => selectPlanAndApplyTax(user, "Premium", processPayment));




const weatherCheck = (callback) => {
    console.log(`1. Checking weather... `);
    setTimeout(() => {
        let weatherStatus = "CLEAR";
        console.log(`   [Weather is ${weatherStatus}]`);
        callback(weatherStatus);
    }, 800);
};

const fuelLoading = (weather, callback) => {
    if (weather !== "CLEAR") {
        console.log(" Mission Aborted: Bad Weather!");
        return;
    }
    console.log('2. Loading Liquid Hydrogen... ');
    setTimeout(() => {
        let fuelStatus = "FULL";
        callback(fuelStatus);
    }, 800);
};

const systemCheck = (fuel, callback) => {
    if (fuel !== "FULL") {
        console.log(" Mission Aborted: Fuel issue!");
        return;
    }
    console.log("3. Running system diagnostics... ");
    setTimeout(() => {
        callback("READY");
    }, 800);
};

const astronautBoarding = (sysStatus, callback) => {
    if (sysStatus !== "READY") return;
    console.log("4. Astronauts boarding the spacecraft... ");
    setTimeout(() => callback("BOARDED"), 800);
};

const hatchClosure = (astroStatus, callback) => {
    console.log("5. Locking main cabin hatches... ");
    setTimeout(() => callback("LOCKED"), 800);
};

const finalCountdown = (hatchStatus, callback) => {
    console.log("6. Initiating final countdown: 10, 9, 8... ");
    setTimeout(() => callback("COUNTDOWN_COMPLETE"), 800);
};

const engineIgnition = (countStatus, callback) => {
    console.log("7. Igniting main boosters! ");
    setTimeout(() => callback("THRUST_MAX"), 800);
};

const liftoff = (thrustStatus, callback) => {
    console.log("8. We have a liftoff! Rocket has left the pad. ");
    setTimeout(() => callback("IN_ATMOSPHERE"), 800);
};

const boosterSeparation = (locStatus, callback) => {
    console.log("9. Solid rocket boosters separated successfully. ");
    setTimeout(() => callback("ENTERING_ORBIT"), 800);
};

const orbitInsertion = (orbitStatus) => {
    console.log(`10. Mission Successful! Satellite deployed in ${orbitStatus}! `);
};


weatherCheck((s1) =>
    fuelLoading(s1, (s2) =>
        systemCheck(s2, (s3) =>
            astronautBoarding(s3, (s4) =>
                hatchClosure(s4, (s5) =>
                    finalCountdown(s5, (s6) =>
                        engineIgnition(s6, (s7) =>
                            liftoff(s7, (s8) =>
                                boosterSeparation(s8, orbitInsertion)
                            )
                        ))
                )))
    ));