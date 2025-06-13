const todoInput = document.querySelector('.js-todo-input');
const addButton = document.querySelector('.js-add-button');
const todoList = document.querySelector('.js-todo-list');

function addTask() {
  const task = todoInput.value.trim();

  if (task === '') {
    alert('No task in input!');
    return;
  }

  const li = document.createElement('li');
  li.classList.add('todo-item');

  const span = document.createElement('span');
  span.textContent = task;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';
  deleteBtn.classList.add('delete-button');

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
  todoInput.value = '';
}
