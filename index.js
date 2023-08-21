// STEP 1
// CREATE TODO VARIABLES 
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskBtn");
const taskContainer = document.getElementById("taskContainer");
const clearAllButton = document.getElementById("clearAllBtn");
const userToDoLists = [[]];

// STEP 2
// SET THE INDEX FOR THE  CURRENT LIST 
let currentToDoList = 0; 

// STEP 3
// SET THE TASK LIST TO BE EMPTY WHEN NOTHING IS ADDED
addTaskButton.addEventListener("click", ()=>{
    const task = taskInput.value.trim();
    if(task !== "") {
        userToDoLists[currentToDoList].push({task, completed :false});
        updateTaskList(currentToDoList);
        taskInput.value =""
    }
})


// STEP 4
// CREATE HTML ELEMENTS TO TAKE TASK CONTENT 
function updateTaskList(listIndex) {
    taskContainer.innerHTML = ""; 
    for (const taskObj of userToDoLists[listIndex]) {
        const taskDiv = document.createElement("div");
        const taskCheckbox = document.createElement("input");
        taskCheckbox.classList = ("TodoInput")
        taskCheckbox.type = "checkbox";
        taskCheckbox.checked = taskObj.completed;
        taskDiv.appendChild(taskCheckbox);

        const taskText = document.createElement("span");
        taskText.classList= ("taskSpan")
        taskText.textContent = taskObj.task;
        if (taskObj.completed) {
            taskText.style.textDecoration = "line-through";
        }
        taskDiv.appendChild(taskText);

        taskCheckbox.addEventListener("change", () => {
            taskObj.completed = taskCheckbox.checked;
            updateTaskList(listIndex);
        });

        taskContainer.appendChild(taskDiv);
    }
}

// STEP 5
// CLEAR THE ALL THE CURRENT ACITVE LISTS WHEN THE CLEAR BUTTON IS CLICKED
clearAllButton.addEventListener("click", () => {
    userToDoLists[currentToDoList] = []; 
    updateTaskList(currentToDoList);
});


// STEP 6
// RESET THE TASK CONTAINER TO BE EMPTY WHEN THE PAGE RELOADS
updateTaskList(currentToDoList);
