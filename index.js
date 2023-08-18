
// STEP 1
// CREATE VARIABLES FOR TODO

const addTaskButton = document.getElementById("addTaskBtn");
const taskContainer = document.getElementById("taskContainer");
const clearAllButton = document.getElementById("clearAllBtn");

// STEP 2
// ASSIGN RULES TO THEM FOR EVENT LISTENING TO CREATE HTML ELEMENTS

addTaskButton.addEventListener("click", () => {
    const newTaskDiv = document.createElement("div");
    newTaskDiv.classList.add("task");

    const taskCompleted = document.createElement("input");
    taskCompleted.type = "checkbox"; 
    taskCompleted.classList.add("task-completed"); 

    const taskHeading = document.createElement("input");
    taskHeading.type = "text";
    taskHeading.placeholder = "Add Heading";
    taskHeading.classList.add("input-no-border");

    const taskContent = document.createElement("textarea");
    taskContent.setAttribute("placeholder", "Add Content");
    taskContent.classList.add("task-content");

    // STEP 3
    // CALL THE CALLBACK FUNCTIONS BE EXECUTED ONLY WHEN THE BUTTON IS TRIGERED
    newTaskDiv.appendChild(taskCompleted);
    newTaskDiv.appendChild(taskHeading);
    newTaskDiv.appendChild(taskContent);
    taskContainer.appendChild(newTaskDiv);
});

// STEP 4
// LASTLY, CLEAR ALL TASKS WHEN COMPLETED
clearAllButton.addEventListener("click", () => {
    taskContainer.innerHTML = '';
});

