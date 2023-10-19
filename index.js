

const createTaskForm = document.getElementById("create-task-form");


createTaskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  
  const newTaskDescription = createTaskForm.elements["new-task-description"].value;
  const tasksList = document.getElementById("tasks");
  const newTaskItem = document.createElement("li");
  newTaskItem.textContent = newTaskDescription;
  tasksList.appendChild(newTaskItem);

  
  createTaskForm.elements["new-task-description"].value = "";
});
