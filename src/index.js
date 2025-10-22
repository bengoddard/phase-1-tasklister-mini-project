//const { createElement } = require("react");

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("#create-task-form");
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formInput = document.querySelector("#new-task-description");
      const task = formInput.value.trim();
      console.log(formInput);
      console.log(task);
      buildToDo(task);
    })

  function buildToDo(task) {
    const li = document.createElement("li");
    li.textContent = task;

    const taskList = document.querySelector("#tasks");
    taskList.append(li);
  }
});