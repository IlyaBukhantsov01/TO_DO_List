const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        alert("Введите задачу!");
        return;
    }

    const li = document.createElement("li");
    li.className = "task";

    const span = document.createElement("span");
    span.textContent = text;

    span.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.className = "delete";

    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
