
let buttonDIV = document.getElementById("buttonDIV")

const validColors = ["red", "yellow", "green", "blue"];

buttonDIV.addEventListener("click",(e)=>{
    if(validColors.includes(e.target.id)){
        let body = document.body;
        body.style.backgroundColor = e.target.id
    }
})