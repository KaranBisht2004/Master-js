//Currying

// 1- What is Function Currying
// Function Currying mtlb jahan ek function ek baar mein saare arguments lene ki jagah sirf ek single argument leta hai, aur ek naya function return kar deta hai. Yeh process tab tak chalta rehta hai jab tak usko saare arguments nahi mil jaate

const sum = (a) => {
    return (b) => {
        return a + b
    }
}
console.log(sum(5)(5));


const sum = (...a) => {
    if (a.length >= 3) {
        return a[0] + a[1] + a[2]
    }
    return (b) => {
        return (c) => {
            return a[0] + b + c
        }
    }
}
console.log(sum(2)(3)(5));
console.log(sum(2, 3, 5));

