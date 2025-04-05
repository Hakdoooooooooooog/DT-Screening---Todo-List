document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskButton = document.getElementById("addTaskBtn");
  const taskLists = document.getElementById("task-lists");

  // Function to handle adding a new task
  const addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const NumberOfTasks = taskLists.querySelectorAll("li").length + 1;
    const newTask = addNewTask(taskText, NumberOfTasks);
    taskLists.appendChild(newTask);

    taskInput.value = "";
    setupEventListeners();
  };

  // Function to add a new task to the list
  const addNewTask = (taskText, index) => {
    const newListItem = document.createElement("li");
    const newBtn = document.createElement("button");

    newBtn.id = `deleteTaskBtn-${index}`;
    newBtn.innerText = "Delete ❌";
    newBtn.className = "delete-btn";

    newListItem.className = "task-lists__item";
    newListItem.innerHTML = `<label class="task-text">${taskText}</label>`;
    newListItem.appendChild(newBtn);

    return newListItem;
  };

  // Event handler for completing tasks
  const toggleComplete = (event) => {
    if (event.target.classList.contains("task-lists__item")) {
      event.target.classList.toggle("completed");
    }
  };

  // Event handler for deleting tasks
  const deleteTask = (event) => {
    event.stopPropagation();
    event.target.closest("li").remove();
  };

  // Function to setup all event listeners
  const setupEventListeners = () => {
    // Task completion toggle
    taskLists.querySelectorAll(".task-lists__item").forEach((item) => {
      item.removeEventListener("click", toggleComplete);
      item.addEventListener("click", toggleComplete);
    });

    // Delete buttons
    taskLists.querySelectorAll(".delete-btn").forEach((button) => {
      button.removeEventListener("click", deleteTask);
      button.addEventListener("click", deleteTask);
    });
  };

  // Initial setup after DOM content is loaded
  addTaskButton.addEventListener("click", addTask);
  setupEventListeners();
});
