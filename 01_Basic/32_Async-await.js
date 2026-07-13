async function getData() {

    setTimeout(() => {

        console.log("I am inside Set Timeout Block");

    }, 3000)

}

getData() //I am inside Set Timeout Block

let outPutData = getData()
console.log(outPutData);// Promise { undefined }


// async function always return Promise

// -------------------- sloving promise nesting in async await ------------------------------

const checkInventory = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('checking inventory');
            let instock = 4
            resolve(instock);
        }, 2000);
    });
};

const checkOrder = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('creating a order');
            resolve();
        }, 2000);
    });
};

const chargingPayment = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('charing the payment');
            reject(new Error("something is wrong"))
        }, 2000);
    });
};

const sendInvoice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Sending invoice');
            resolve();
        }, 2000);
    });
};

const main = async () => {
    try {

        const instock = await checkInventory();
        console.log('instock', instock);
        await checkOrder();
        await chargingPayment();
        await sendInvoice();

        console.log('other request processing....');
    }
    catch (err) {
        console.log(err);
    }
};

main();

// fetch

const data = async () => {
    try {
        let response = await fetch("https://dummyjson.com/products");

        // Fetch tab bhi resolve ho jata hai agar 404 ya 500 error aaye, 
        // isliye ye check lagana best practice hai:
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let responseDATA = await response.json();
        console.log(responseDATA);

    } catch (error) {
        // Agar network ud gaya ya URL galat hai, toh control yahan aayega
        console.log("Kuch gadbad ho gayi bhai:", error.message);
    }
};

// Seedha call karo, bahar console.log lagane ki zaroorat nahi hai
data();
