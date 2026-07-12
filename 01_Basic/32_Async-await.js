async function getData() {

    setTimeout(() => {

        console.log("I am inside Set Timeout Block");

    }, 3000)

}

getData() //I am inside Set Timeout Block

let outPutData = getData()
console.log(outPutData);// Promise { undefined }


// async function always return Promise


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

