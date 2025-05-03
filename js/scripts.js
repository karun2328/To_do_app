var i = document.getElementById("textbox");
var l = document.getElementById("taskList");
var tasksQueue = [];

document.getElementById("task").addEventListener("submit", function(event) {
    event.preventDefault();

    var inp = i.value;

    if (inp === "") {
        alert("Please enter the task");
        return;
    }

    tasksQueue.push(inp);

    displayTasks();

    i.value = "";
});

function displayTasks() {
    l.innerHTML = "";

    tasksQueue.forEach((task, index) => {
        var newTask = document.createElement("li");
        newTask.textContent = "";

        
        var taskText = document.createTextNode(task);
        newTask.appendChild(taskText);

        
        var rembt = document.createElement("button");
        rembt.textContent = "Remove";
        rembt.addEventListener("click", removeTask);

        newTask.appendChild(rembt);
        l.appendChild(newTask);
    });
}

function removeTask(index) {
    tasksQueue.splice(index, 1);
    displayTasks();
}
