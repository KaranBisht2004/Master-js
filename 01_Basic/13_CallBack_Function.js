// 1. Ek normal function jo callback ko receive karega
function processUser(name, callback) {
    console.log(`Processing data for ${name}...`);

    // Kaam khatam hone ke baad, humne us callback function ko CHALAYA!
    callback();
}

// 2. Ek aur function jise hum as a callback bhejenge
function sayGoodbye() {
    console.log("Task Done! Goodbye.");
}

// 3. Execution: Yahan 'sayGoodbye' ek CALLBACK function hai
processUser("karan", sayGoodbye);

// Output:
// Processing data for karan...
// Task Done! Goodbye.


const greeting = ((callback) => {
    console.log("hello how are u");
    callback()
})
const meet = (() => {
    console.log("im good wby");
})
greeting(meet)


//Real World Scenario====================================

const orderPlace = (yourProduct, callback) => {
    console.log(`Your ${yourProduct} order placed.`);

    // Yahan humne callback function ke andar 'yourProduct' bhej diya!
    callback(yourProduct);
};

// 2. notification function ab us product ke naam ko RECEIVE karega (as a parameter)
const notification = (arrivedProduct) => {
    // Ab aap isse aaram se use kar sakte ho!
    console.log(`Your ${arrivedProduct} arrived.`);
};

// 3. Execution bilkul pehle jaisa hi rahega
orderPlace("Nike Shoe", notification);


//-------------------------------------------------------------

const payment = (amount, callback) => {
    console.log(`₹${amount} payment is initialized.`);
    callback(amount); // Agle function (paymentNotification) ko amount pass kiya
};

const paymentNotification = (receivedAmount, nextStepCallback) => {
    console.log(`₹${receivedAmount} is received.`);
    nextStepCallback(); // Agle function (makingFood) ko trigger kiya
};

const makingFood = () => {
    console.log("We are starting making your food.");
};

payment(500, (amount) => {
    paymentNotification(amount, makingFood); 
});
