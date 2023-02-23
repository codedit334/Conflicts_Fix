// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';

const tasks = [
  { description: 'Buy milk', completed: false, index: 0 },
  { description: 'Do laundry', completed: true, index: 1 },
  { description: 'Call mom', completed: false, index: 2 },
  { description: 'Take out the trash', completed: true, index: 3 },
];
function renderTasks() {
  const taskList = document.getElementById('task-list');

  // Clear any existing items from the task list
  taskList.innerHTML = '';

  // Sort the tasks array by index
  const sortedTasks = tasks.sort((a, b) => a.index - b.index);

  // Loop through the sorted tasks array and create an HTML list item element for each task
  sortedTasks.forEach((task) => {
    const listItem = document.createElement('li');

    // Create a checkbox input element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('click', () => {
      task.completed = !task.completed;
      renderTasks();
    });

    // Create a label element for the task description
    const label = document.createElement('label');
    label.innerText = task.description;
    label.style.textDecoration = task.completed ? 'line-through' : 'none';

    // Add the checkbox and label elements to the list item element
    listItem.appendChild(checkbox);
    listItem.appendChild(label);

    // Add the list item element to the task list
    taskList.appendChild(listItem);
  });
}

// Call renderTasks on page load
renderTasks();
