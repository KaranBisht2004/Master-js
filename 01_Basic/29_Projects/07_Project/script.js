const body = document.body;

body.addEventListener("click", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    const div = document.createElement("div")
    div.classList.add("circle")

    const helloLanguages = [
        "Hello", "Namaste", "Hola", "Bonjour", "Ciao", "Konnichiwa", 
        "Annyeong", "Ni Hao", "Marhaba", "Guten Tag", "Olà", "Salaam", 
        "Sawatdee", "Aloha", "Vanakkam", "Sat Sri Akal", "Merhaba", "Jambo"
    ];

    div.textContent =helloLanguages[Math.floor(Math.random()* helloLanguages.length)]

    const clickSound = document.getElementById("click-sfx");
    clickSound.currentTime = 0;
    clickSound.play();

    const color = [
        "Red", "Orange", "Yellow", "Cyan", "Purple", "Coral", "Turquoise", "Teal", "Magenta"
    ];

    div.style.backgroundColor = color[Math.floor(Math.random() * color.length)]

    div.style.top = `${y - 25}px`;
    div.style.left = `${x - 25}px`;

    body.append(div)


    setTimeout(() => {
        div.remove();
    }, 5000);

})
