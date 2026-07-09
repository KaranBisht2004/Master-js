let yourname = document.getElementById("yourname");
let theirName = document.getElementById("theirName");
let calculator = document.getElementById("calculator");
let yourScore = document.getElementById("yourScore");
let meterFill = document.getElementById("meterFill");

function hasNumber(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " " && !isNaN(str[i])) {
            return true; 
        }
    }
    return false; 
}

calculator.addEventListener("click", () => {

    let name1Value = yourname.value.trim();
    let name2Value = theirName.value.trim();

    let nameCheck = /^[a-zA-Z\s]+$/;

    if (name1Value === "" || name2Value === "") {
        yourScore.textContent = `Pehle bandi/banda toh bana le!`;
        meterFill.style.width = `0%`;
        return; // Code ko aage badhne se rok do
    }


    if (hasNumber(name1Value) || hasNumber(name2Value)) {
        yourScore.textContent = `Asli naam daalo, number nahi! `;
        meterFill.style.width = `0%`;
        return;
    }

    let personeONE = name1Value.length;
    let personeTwo = name2Value.length;

    let calculatorLove = Math.pow(personeONE + personeTwo, 3) % 101;

    yourScore.textContent = `${calculatorLove}%`;
    meterFill.style.width = `${calculatorLove}%`;

})