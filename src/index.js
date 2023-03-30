document.addEventListener("DOMContentLoaded", () => {
  // your code here
const taskForm = document.getElementById("create-task-form");
const taskList = document.getElementById("tasks");
taskForm.addEventListener("submit", function(event) {
  
  event.preventDefault();

  
  const taskInput = document.getElementById("new-task-description");
  const taskText = taskInput.value;

  
  const taskItem = document.createElement("li");
  taskItem.innerText = taskText;

  
  taskList.appendChild(taskItem);


  taskInput.value = "";
});

});
