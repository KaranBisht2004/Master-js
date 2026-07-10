const inputFrom = document.getElementById("inputFrom");
const allTask = document.getElementById("allTask");

inputFrom.addEventListener("submit", (e) => {
    e.preventDefault();

    const todoInput = document.getElementById("todoInput");
    const text = todoInput.value.trim();

    if (!text) return;

    
    const mainRow = document.createElement("div");
    mainRow.classList.add("task-row");

  

    const taskText = document.createElement("div");
    taskText.classList.add("task-text");
    taskText.textContent = text;

    const doneBTN = document.createElement("button");
    doneBTN.classList.add("square-btn", "done-btn");
    doneBTN.textContent = "DONE"
    doneBTN.addEventListener("click", () => {
        taskText.classList.toggle("completed");
        doneBTN.textContent = ""
        doneBTN.classList.toggle("checked");
    });

    const deletBTN = document.createElement("button");
    deletBTN.classList.add("square-btn", "delete-btn");
    deletBTN.textContent = "✕"; 
    deletBTN.addEventListener("click", () => {
        mainRow.remove();
    });

    mainRow.append( taskText, doneBTN, deletBTN);
    allTask.append(mainRow);
    
    todoInput.value = "";
});