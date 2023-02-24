// eslint-disable-next-line no-unused-vars
import _ from "lodash";
import "./style.css";

const tasks = [
  { description: "Buy milk", completed: false, index: 0 },
  { description: "Do laundry", completed: true, index: 1 },
  { description: "Call mom", completed: false, index: 2 },
  { description: "Take out the trash", completed: true, index: 3 },
];
function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  const sortedTasks = tasks.sort((a, b) => a.index - b.index);
  sortedTasks.forEach((task) => {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("click", () => {
      task.completed = !task.completed;
      renderTasks();
    });
    const label = document.createElement("label");
    label.innerText = task.description;
    label.style.textDecoration = task.completed ? "line-through" : "none";
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    taskList.appendChild(listItem);
  });
}
renderTasks();
