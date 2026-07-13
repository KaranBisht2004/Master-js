let btn = document.getElementById("btn")
let heading = document.getElementById("jokeText")

btn.addEventListener("click", () => {

    const getJokes = async () => {

        try {
            let jokesAPI = await fetch("https://icanhazdadjoke.com/", {
                headers: { Accept: "application/json" }
            })

            if (!jokesAPI.ok) {
                throw new Error(`HTTP eroor! status: ${jokesAPI.status}`);
            }

            let responseJOKES = await jokesAPI.json()
            console.log(responseJOKES);

            heading.innerText = responseJOKES.joke;

        } catch (error) {
            console.log(`Something Wrong Please try again: ${error}`);
            heading.innerText = "Error aa gaya bhai, try again!";
        }

    }
    getJokes()

})


