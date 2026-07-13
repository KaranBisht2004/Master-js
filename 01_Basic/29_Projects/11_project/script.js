let currentUserId = 1;
const btn = document.getElementById("btn")

let userName = document.getElementById("userName")
let userEmail = document.getElementById("userEmail")
let userCompany = document.getElementById("userCompany")
let avatarIcon = document.getElementById("avatarIcon");

btn.addEventListener("click", () => {   

    const gettingData = async () => {
        try {

            const ApiURL = `https://jsonplaceholder.typicode.com/users/${currentUserId}`;

            const apiData = await fetch(ApiURL);
            if (!apiData.ok) {

                throw new Error(`HTTP server ERROR ${apiData.status}`)
            }

            let apiRespounse = await apiData.json()
            console.log(apiRespounse);

            avatarIcon.src = `https://api.dicebear.com/7.x/initials/svg?seed=${apiRespounse.name}`;
            userName.textContent = apiRespounse.name;
            userEmail.textContent = apiRespounse.email;
            userCompany.textContent = apiRespounse.company.name;


            currentUserId++;

        } catch (error) {
            console.log(`status: 404: ${error}`);

            userName.textContent = "Saare users khatam bhai!";
            userEmail.textContent = "Wapas shuru kar rahe hain...";
            userCompany.textContent = "companyy";

            currentUserId = 1;
        }
    }
    gettingData()

})